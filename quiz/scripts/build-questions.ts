// Parses chNN.md (questions) + chNNa.md (answers) into src/generated/questions.json.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..', '..');
const OUT_PATH = resolve(__dirname, '..', 'src', 'generated', 'questions.json');

marked.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
      try {
        return hljs.highlight(code, { language, ignoreIllegals: true }).value;
      } catch {
        return hljs.highlight(code, { language: 'plaintext' }).value;
      }
    }
  })
);
marked.setOptions({ gfm: true, breaks: false });

type RawQuestion = {
  number: number;
  stem: string;
  multiSelect: boolean;
  options: { letter: string; md: string }[];
};
type RawAnswer = { number: number; correct: string[]; explanation: string };
type FrontMatter = { title: string; subtitle: string };

type OutChapter = { id: string; title: string; subtitle: string; count: number };
type OutQuestion = {
  id: string;
  chapter: string;
  chapterTitle: string;
  chapterSubtitle: string;
  number: number;
  multiSelect: boolean;
  stemHtml: string;
  options: { letter: string; html: string }[];
  correct: string[];
  explanationHtml: string;
};

function parseFrontMatter(src: string): { fm: FrontMatter; body: string } {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { fm: { title: '', subtitle: '' }, body: src };
  const yaml = m[1];
  const body = m[2];
  const title = (yaml.match(/^title:\s*"?([^"\n]+)"?/m)?.[1] ?? '').trim();
  const subtitle = (yaml.match(/^subtitle:\s*"?([^"\n]*)"?/m)?.[1] ?? '').trim();
  return { fm: { title, subtitle }, body };
}

function extractSection(body: string, heading: RegExp): string {
  const lines = body.split(/\r?\n/);
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (heading.test(lines[i])) {
      start = i + 1;
      break;
    }
  }
  if (start === -1) return '';
  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    if (/^##\s+\S/.test(lines[i])) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end).join('\n');
}

// Splits a section into numbered blocks starting with lines like `**<N>. ...`.
function splitNumberedBlocks(section: string): { number: number; body: string }[] {
  const lines = section.split(/\r?\n/);
  const starts: { number: number; idx: number }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\*\*(\d+)\.\s/);
    if (m) starts.push({ number: parseInt(m[1], 10), idx: i });
  }
  const out: { number: number; body: string }[] = [];
  for (let s = 0; s < starts.length; s++) {
    const from = starts[s].idx;
    const to = s + 1 < starts.length ? starts[s + 1].idx : lines.length;
    out.push({ number: starts[s].number, body: lines.slice(from, to).join('\n') });
  }
  return out;
}

function parseQuestionBlock(block: string, number: number): RawQuestion | null {
  const lines = block.split(/\r?\n/);
  // Remove leading `**N. ` marker + trailing `**` wrapper from the first line.
  lines[0] = lines[0].replace(/^\*\*\d+\.\s+/, '');
  if (lines[0].endsWith('**')) lines[0] = lines[0].slice(0, -2);
  // First line that is exactly an option marker separates stem from options.
  // Chapters use either `**A)**` or `**A.**` style.
  const markerRe = /^\*\*([A-E])[.)]\*\*/;
  let optStart = -1;
  for (let i = 0; i < lines.length; i++) {
    if (markerRe.test(lines[i])) {
      optStart = i;
      break;
    }
  }
  if (optStart === -1) return null;
  const stem = lines.slice(0, optStart).join('\n').trim();
  const optionLines = lines.slice(optStart);
  const markerIdx: number[] = [];
  for (let i = 0; i < optionLines.length; i++) {
    if (markerRe.test(optionLines[i])) markerIdx.push(i);
  }
  const options: { letter: string; md: string }[] = [];
  for (let k = 0; k < markerIdx.length; k++) {
    const from = markerIdx[k];
    const to = k + 1 < markerIdx.length ? markerIdx[k + 1] : optionLines.length;
    const chunk = optionLines.slice(from, to).join('\n');
    const m = chunk.match(/^\*\*([A-E])[.)]\*\*\s*([\s\S]*)$/);
    if (!m) continue;
    // Strip trailing markdown soft-breaks (two spaces) and trailing blank lines.
    const md = m[2].replace(/[ \t]+$/gm, '').trim();
    options.push({ letter: m[1], md });
  }
  const multiSelect = /choose all that apply/i.test(stem);
  return { number, stem, multiSelect, options };
}

function parseAnswerBlock(block: string, number: number): RawAnswer | null {
  const firstLineEnd = block.indexOf('\n');
  const first = firstLineEnd === -1 ? block : block.slice(0, firstLineEnd);
  const rest = firstLineEnd === -1 ? '' : block.slice(firstLineEnd + 1);
  // Look for "correct answer(s) is/are ..." up to the terminating period, then
  // pull every A-E letter out of that range. Tolerates commas, "and", parentheses.
  const m = first.match(/correct\s+answer[s]?\s+(?:is|are)\s+([^.\n]+)/i);
  if (!m) return null;
  const letters = Array.from(new Set(Array.from(m[1].matchAll(/\b([A-E])\b/g)).map((x) => x[1])));
  if (letters.length === 0) return null;
  return { number, correct: letters, explanation: rest.trim() };
}

function render(md: string): string {
  return marked.parse(md, { async: false }) as string;
}

function chapterIdFromFile(name: string): string {
  // "ch01.md" -> "ch01"
  return name.replace(/\.md$/, '');
}

function main() {
  const files = readdirSync(REPO_ROOT)
    .filter((f: string) => /^ch\d+\.md$/.test(f))
    .sort();

  const chapters: OutChapter[] = [];
  const questions: OutQuestion[] = [];
  const warnings: string[] = [];

  for (const qFile of files) {
    const chId = chapterIdFromFile(qFile);
    const aFile = `${chId}a.md`;
    const qPath = join(REPO_ROOT, qFile);
    const aPath = join(REPO_ROOT, aFile);

    const qRaw = readFileSync(qPath, 'utf8');
    let aRaw = '';
    try {
      aRaw = readFileSync(aPath, 'utf8');
    } catch {
      warnings.push(`${chId}: no answer file ${aFile}`);
      continue;
    }

    const { fm: qfm, body: qBody } = parseFrontMatter(qRaw);
    const { body: aBody } = parseFrontMatter(aRaw);

    const qSection = extractSection(qBody, /^##\s+Practice\s+Questions\b/i);
    const aSection = extractSection(aBody, /^##\s+Answers\b/i);
    if (!qSection) {
      warnings.push(`${chId}: missing "Practice Questions" section`);
      continue;
    }
    if (!aSection) {
      warnings.push(`${chId}: missing "Answers" section`);
      continue;
    }

    const qBlocks = splitNumberedBlocks(qSection);
    const aBlocks = splitNumberedBlocks(aSection);
    const answersByNum = new Map<number, RawAnswer>();
    for (const b of aBlocks) {
      const parsed = parseAnswerBlock(b.body, b.number);
      if (parsed) answersByNum.set(b.number, parsed);
      else warnings.push(`${chId} answer #${b.number}: could not parse correct letters`);
    }

    let chapterCount = 0;
    for (const qb of qBlocks) {
      const q = parseQuestionBlock(qb.body, qb.number);
      if (!q) {
        warnings.push(`${chId} question #${qb.number}: could not parse options`);
        continue;
      }
      const a = answersByNum.get(qb.number);
      if (!a) {
        warnings.push(`${chId} question #${qb.number}: no matching answer, skipping`);
        continue;
      }
      const id = `${chId}-q${qb.number}`;
      // Trust the answer: any question with more than one correct letter is
      // multi-select, even if the stem doesn't say "Choose all that apply".
      const multiSelect = q.multiSelect || a.correct.length > 1;
      questions.push({
        id,
        chapter: chId,
        chapterTitle: qfm.title,
        chapterSubtitle: qfm.subtitle,
        number: qb.number,
        multiSelect,
        stemHtml: render(q.stem),
        options: q.options.map((o) => ({ letter: o.letter, html: render(o.md) })),
        correct: a.correct,
        explanationHtml: render(a.explanation)
      });
      chapterCount++;
    }

    chapters.push({
      id: chId,
      title: qfm.title,
      subtitle: qfm.subtitle,
      count: chapterCount
    });
  }

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify({ chapters, questions }, null, 2));

  console.log(`Wrote ${questions.length} questions across ${chapters.length} chapters to ${OUT_PATH}`);
  if (warnings.length) {
    console.warn(`${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
}

main();

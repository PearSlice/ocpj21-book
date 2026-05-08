import { getJSON, setJSON, getChunkedJSON, setChunkedJSON, clearAll } from './cookies';
import type { HistoryEntry, ScoreRecord } from './types';
import { emptyScore } from './types';

const SCORE_KEY = 'ocpj21_score';
const HISTORY_PREFIX = 'ocpj21_history';
const HISTORY_MAX_ENTRIES = 500; // bound the cookie footprint

export function loadScore(): ScoreRecord {
  const raw = getJSON<Partial<ScoreRecord>>(SCORE_KEY);
  if (!raw) return emptyScore();
  // Backfill fields added in later revisions.
  const base = emptyScore();
  return { ...base, ...raw, perChapter: { ...base.perChapter, ...(raw.perChapter ?? {}) } };
}

export function loadHistory(): HistoryEntry[] {
  return getChunkedJSON<HistoryEntry[]>(HISTORY_PREFIX) ?? [];
}

export function saveQuizResults(
  entries: HistoryEntry[],
  chapterOf: (qid: string) => string | undefined,
  durationMs: number
): { score: ScoreRecord; history: HistoryEntry[] } {
  const score = loadScore();
  const now = Date.now();
  if (score.firstAttempt == null) score.firstAttempt = now;
  score.lastAttempt = now;
  score.totalDurationMs += durationMs;
  score.lastDurationMs = durationMs;
  score.totalQuizzes += 1;

  for (const e of entries) {
    score.totalAttempted += 1;
    if (e.correct) score.totalCorrect += 1;
    if (e.guessed) {
      score.totalGuessed += 1;
      if (e.correct) score.totalGuessedCorrect += 1;
    }
    const chId = chapterOf(e.qid);
    if (chId) {
      const ch = score.perChapter[chId] ?? { attempted: 0, correct: 0 };
      ch.attempted += 1;
      if (e.correct) ch.correct += 1;
      score.perChapter[chId] = ch;
    }
  }

  const history = loadHistory().concat(entries);
  const trimmed =
    history.length > HISTORY_MAX_ENTRIES
      ? history.slice(history.length - HISTORY_MAX_ENTRIES)
      : history;

  setJSON(SCORE_KEY, score);
  setChunkedJSON(HISTORY_PREFIX, trimmed);
  return { score, history: trimmed };
}

export function resetProgress(): void {
  clearAll([HISTORY_PREFIX], [SCORE_KEY]);
}

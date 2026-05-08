import { writable, derived } from 'svelte/store';
import type { Question, QuestionBank, HistoryEntry } from './types';
import bank from '../generated/questions.json';

export const questionBank = bank as unknown as QuestionBank;

export type Phase = 'setup' | 'quiz' | 'results';

export type RunningQuiz = {
  questions: Question[];
  answers: Record<string, string[]>; // qid -> selected letters
  guessed: Record<string, boolean>;  // qid -> user flagged as guess
  currentIndex: number;
  startedAt: number; // epoch ms
};

export type ResultEntry = HistoryEntry & {
  question: Question;
  selected: string[];
};

export type ResultsView = {
  entries: ResultEntry[];
  correctCount: number;
  total: number;
  durationMs: number;
};

type State =
  | { phase: 'setup' }
  | { phase: 'quiz'; run: RunningQuiz }
  | { phase: 'results'; results: ResultsView };

export const state = writable<State>({ phase: 'setup' });

export const phase = derived(state, ($s) => $s.phase);

function shuffle<T>(input: T[]): T[] {
  const arr = input.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function pickQuestions(chapters: string[], count: number): Question[] {
  const pool = questionBank.questions.filter((q) => chapters.includes(q.chapter));
  return shuffle(pool).slice(0, count);
}

export function startQuiz(questions: Question[]): void {
  state.set({
    phase: 'quiz',
    run: {
      questions,
      answers: Object.fromEntries(questions.map((q) => [q.id, []])),
      guessed: Object.fromEntries(questions.map((q) => [q.id, false])),
      currentIndex: 0,
      startedAt: Date.now()
    }
  });
}

export function toggleGuessed(qid: string): void {
  state.update((s) => {
    if (s.phase !== 'quiz') return s;
    return {
      ...s,
      run: { ...s.run, guessed: { ...s.run.guessed, [qid]: !s.run.guessed[qid] } }
    };
  });
}

export function setAnswer(qid: string, selected: string[]): void {
  state.update((s) => {
    if (s.phase !== 'quiz') return s;
    return { ...s, run: { ...s.run, answers: { ...s.run.answers, [qid]: selected } } };
  });
}

export function goTo(delta: number): void {
  state.update((s) => {
    if (s.phase !== 'quiz') return s;
    const next = Math.max(0, Math.min(s.run.questions.length - 1, s.run.currentIndex + delta));
    return { ...s, run: { ...s.run, currentIndex: next } };
  });
}

export function isCorrect(q: Question, selected: string[]): boolean {
  if (selected.length !== q.correct.length) return false;
  const set = new Set(selected);
  return q.correct.every((c) => set.has(c));
}

export function finishQuiz(): ResultsView {
  let results!: ResultsView;
  state.update((s) => {
    if (s.phase !== 'quiz') return s;
    const now = Date.now();
    const durationMs = Math.max(0, now - s.run.startedAt);
    const entries: ResultEntry[] = s.run.questions.map((q) => {
      const selected = (s.run.answers[q.id] ?? []).slice().sort();
      const correct = isCorrect(q, selected);
      const guessed = !!s.run.guessed[q.id];
      return {
        qid: q.id,
        selected,
        correct,
        guessed,
        ts: now,
        question: q
      };
    });
    const correctCount = entries.filter((e) => e.correct).length;
    results = { entries, correctCount, total: entries.length, durationMs };
    return { phase: 'results', results };
  });
  return results;
}

export function resetToSetup(): void {
  state.set({ phase: 'setup' });
}

export const chapterById: Map<string, string> = new Map(
  questionBank.chapters.map((c) => [c.id, c.title])
);

export function chapterForQid(qid: string): string | undefined {
  const ix = qid.indexOf('-');
  return ix > 0 ? qid.slice(0, ix) : undefined;
}

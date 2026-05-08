export type Question = {
  id: string; // e.g. "ch01-q3"
  chapter: string; // e.g. "ch01"
  chapterTitle: string;
  chapterSubtitle: string;
  number: number;
  multiSelect: boolean;
  stemHtml: string;
  options: { letter: string; html: string }[];
  correct: string[]; // e.g. ["B"] or ["C","D"]
  explanationHtml: string;
};

export type ChapterMeta = {
  id: string;
  title: string;
  subtitle: string;
  count: number;
};

export type QuestionBank = {
  chapters: ChapterMeta[];
  questions: Question[];
};

export type HistoryEntry = {
  qid: string;
  selected: string[];
  correct: boolean;
  guessed?: boolean;
  ts: number;
};

export type ChapterScore = { attempted: number; correct: number };

export type ScoreRecord = {
  totalAttempted: number;
  totalCorrect: number;
  totalGuessed: number;
  totalGuessedCorrect: number;
  firstAttempt: number | null;
  lastAttempt: number | null;
  totalDurationMs: number;
  lastDurationMs: number | null;
  totalQuizzes: number;
  perChapter: Record<string, ChapterScore>;
};

export const emptyScore = (): ScoreRecord => ({
  totalAttempted: 0,
  totalCorrect: 0,
  totalGuessed: 0,
  totalGuessedCorrect: 0,
  firstAttempt: null,
  lastAttempt: null,
  totalDurationMs: 0,
  lastDurationMs: null,
  totalQuizzes: 0,
  perChapter: {}
});

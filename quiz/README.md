# OCPJ21 Practice Quiz

A small static web app that turns the book's practice questions into an interactive quiz. Pick a chapter set, choose how many questions, answer them, and review at the end. Score and per-question history are persisted in cookies so you can track progress over time.

Built with Vite + Svelte + TypeScript. No backend — everything runs in the browser.

## Requirements

- **Node 18 or newer** (tested on Node 24). Older Node versions will fail to start Vite.

## Running the app

From this `quiz/` directory:

```bash
npm install          # one-time
npm run dev          # http://localhost:5173
```

The dev script regenerates `src/generated/questions.json` from the chapter markdown files, then starts Vite with hot reload.

## Other scripts

```bash
npm run build             # production build → dist/
npm run preview           # serve the built dist/ locally
npm run build:questions   # regenerate questions.json only
npm run check             # svelte-check type check
```

## How it works

- **Question pipeline.** `scripts/build-questions.ts` parses `../chNN.md` + `../chNNa.md` at build time, extracts each question's stem, options, correct letters, and explanation, renders the Markdown (including Java code blocks via `highlight.js`) to HTML, and writes a single `src/generated/questions.json`. The runtime never parses Markdown.
- **Quiz flow.** Setup → Quiz → Results, all client-side. Correctness is only revealed on the Results page; you can then expand each question to see your selection, the correct answer, and the explanation.
- **Keyboard controls** during the quiz: `←` / `→` previous / next, `↑` / `↓` move option focus, `Space` selects, `Enter` advances (or submits on the last question), `G` toggles "marked as guess" on the current question.
- **Progress storage.** Aggregate score lives in the `ocpj21_score` cookie. Per-question history lives in `ocpj21_history_*` (auto-chunked if a single cookie would exceed ~3.5 KB, with `ocpj21_history_meta` tracking chunk count). Capped at 500 history entries. Reset any time from the Progress panel on the Setup screen.

## Deployment

`npm run build` produces a fully static `dist/`. Copy it behind any static host or CDN. No environment variables, no server.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Jekyll-based static site hosting a free study guide for the Oracle Certified Professional, Java SE 21 Developer Exam (1Z0-830). Content is Markdown; no application code. Published at `ocpj21.javastudyguide.com` (see `CNAME`).

## Commands

```bash
bundle install                 # install gems (first time / after Gemfile changes)
bundle exec jekyll serve       # local dev server with live reload at http://localhost:4000
bundle exec jekyll build       # build static site into _site/
```

Jekyll 4.3.x + Rouge highlighter. `_config.yml` is NOT reloaded automatically — restart the server after editing it.

## Content structure

Each exam topic has two paired Markdown files at the repo root:

- `chNN.md` — chapter body (`layout: chapter`), containing explanations and review questions.
- `chNNa.md` — answer key (`layout: answer`) linked from the chapter via the `answers_link` front-matter field.

Chapters form a linked list through `previous_link` / `previous_title` / `next_link` / `next_title` front matter. When adding or reordering chapters, update these fields on both neighbors as well as the new page itself. `intro.md` is the first page (`is_intro: true`); `index.md` uses `layout: index` and is the landing page.

Front-matter contract for a chapter (see `ch01.md` for the canonical example):
- `layout`: `chapter` or `answer`
- `title`, `subtitle`
- `exam_objectives`: YAML list shown in the chapter header
- `previous_link`, `previous_title`, `next_link`, `next_title`
- `answers_link` (chapter only) — path to the paired `chNNa.html`

Layouts live in `_layouts/` (`base.html` → `chapter.html` / `answer.html` / `index.html`); shared fragments in `_includes/`; CSS/JS/images in `assets/`.

## Editing conventions

- The book is content, not code — most changes are typo fixes, clarifications, or new review questions. Keep edits minimal and scoped; do not restructure a chapter unless asked.
- When fixing a review-question answer or explanation, update BOTH the question in `chNN.md` and the corresponding entry in `chNNa.md`.
- Contributions beyond typo corrections require licensing under CC BY-NC-SA 4.0 and grant the author a non-exclusive license (see `CONTRIBUTING.md`). Translations go in a new top-level directory named for the language.

## Quiz subproject (`quiz/`)

A Vite + Svelte + TypeScript static app that turns the book's Practice Questions into an interactive quiz. It lives in `quiz/` and is excluded from Jekyll builds (`_config.yml` exclude list).

- Dev: `cd quiz && npm install && npm run dev` (requires Node 18+; Node 24 tested).
- Build: `npm run build` → `quiz/dist/`. Preview with `npm run preview`.
- Questions pipeline: `scripts/build-questions.ts` parses `chNN.md` + `chNNa.md` at build time into `src/generated/questions.json` (gitignored). The runtime app only reads this JSON — no markdown is parsed in the browser.
- Progress is stored in cookies (`ocpj21_score`, `ocpj21_history_*`, `ocpj21_history_meta`), auto-chunked if payload exceeds per-cookie limits. See `src/lib/cookies.ts` and `src/lib/progress.ts`.
- Option parsing supports both `**A)**` and `**A.**` marker styles. Adding new chapters requires no parser changes as long as questions follow the existing conventions.

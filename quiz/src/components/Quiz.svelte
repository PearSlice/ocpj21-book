<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { state, setAnswer, goTo, finishQuiz, chapterForQid, chapterById, toggleGuessed } from '../lib/store';
  import { saveQuizResults } from '../lib/progress';
  import type { HistoryEntry } from '../lib/types';
  import Question from './Question.svelte';

  $: run = $state.phase === 'quiz' ? $state.run : null;
  $: current = run ? run.questions[run.currentIndex] : null;
  $: total = run ? run.questions.length : 0;
  $: atFirst = run ? run.currentIndex === 0 : true;
  $: atLast = run ? run.currentIndex === run.questions.length - 1 : false;
  $: selected = run && current ? (run.answers[current.id] ?? []) : [];
  $: isGuessed = run && current ? !!run.guessed[current.id] : false;
  $: chapterLabel = current ? (chapterById.get(current.chapter) ?? current.chapter) : '';

  // Keyboard focus ring over options (by letter)
  let focusedLetter: string | null = null;
  $: if (current) {
    // reset to first option when the question changes
    const first = current.options[0]?.letter ?? null;
    if (!focusedLetter || !current.options.some((o) => o.letter === focusedLetter)) {
      focusedLetter = first;
    }
  }

  // Timer: ticks once a second. Stops when the component is destroyed.
  let now = Date.now();
  let tickHandle: ReturnType<typeof setInterval> | null = null;
  $: elapsedMs = run ? now - run.startedAt : 0;
  $: elapsedLabel = formatDuration(elapsedMs);

  function formatDuration(ms: number): string {
    const total = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function onChange(next: string[]) {
    if (!current) return;
    setAnswer(current.id, next);
  }

  function submit() {
    const results = finishQuiz();
    const entries: HistoryEntry[] = results.entries.map((e) => ({
      qid: e.qid,
      selected: e.selected,
      correct: e.correct,
      ts: e.ts
    }));
    saveQuizResults(entries, (qid) => chapterForQid(qid), results.durationMs);
  }

  function moveFocus(delta: 1 | -1) {
    if (!current) return;
    const options = current.options;
    if (options.length === 0) return;
    const idx = Math.max(0, options.findIndex((o) => o.letter === focusedLetter));
    const next = (idx + delta + options.length) % options.length;
    focusedLetter = options[next].letter;
  }

  function toggleFocused() {
    if (!current || !focusedLetter) return;
    const letter = focusedLetter;
    const set = new Set(selected);
    if (current.multiSelect) {
      if (set.has(letter)) set.delete(letter);
      else set.add(letter);
      onChange(Array.from(set).sort());
    } else {
      onChange([letter]);
    }
  }

  function markGuessed() {
    if (!current) return;
    toggleGuessed(current.id);
  }

  function handleKey(e: KeyboardEvent) {
    if ($state.phase !== 'quiz') return;
    // Do not hijack keys while typing in form controls (future-proof).
    const tag = (e.target as HTMLElement | null)?.tagName ?? '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    switch (e.key) {
      case 'ArrowLeft':
        if (!atFirst) {
          e.preventDefault();
          goTo(-1);
        }
        break;
      case 'ArrowRight':
        if (!atLast) {
          e.preventDefault();
          goTo(1);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        moveFocus(1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        moveFocus(-1);
        break;
      case ' ':
      case 'Spacebar': // older browsers
        e.preventDefault();
        toggleFocused();
        break;
      case 'Enter':
        if (atLast) {
          e.preventDefault();
          submit();
        } else {
          e.preventDefault();
          goTo(1);
        }
        break;
      case 'g':
      case 'G':
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        e.preventDefault();
        markGuessed();
        break;
    }
  }

  onMount(() => {
    tickHandle = setInterval(() => {
      now = Date.now();
    }, 1000);
    window.addEventListener('keydown', handleKey);
  });

  onDestroy(() => {
    if (tickHandle) clearInterval(tickHandle);
    window.removeEventListener('keydown', handleKey);
  });
</script>

{#if run && current}
  <div class="bar">
    <div class="meta">
      <span class="pos">Question {run.currentIndex + 1} <span class="of">of</span> {total}</span>
      <span class="chap">{chapterLabel}</span>
      <span class="timer" aria-label="Elapsed time" title="Elapsed time">
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2" />
          <path d="M12 9v4l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path d="M9 3h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <span class="timer-text">{elapsedLabel}</span>
      </span>
    </div>
    <div class="progress" role="progressbar" aria-valuenow={run.currentIndex + 1} aria-valuemin={1} aria-valuemax={total}>
      <div class="fill" style="width: {((run.currentIndex + 1) / total) * 100}%"></div>
    </div>
  </div>

  <section class="quiz-card">
    <div class="quiz-card-head">
      <button
        type="button"
        class="guess-toggle"
        class:active={isGuessed}
        aria-pressed={isGuessed}
        on:click={markGuessed}
        title="Mark this question as a guess (keyboard: G)"
      >
        <span class="guess-icon" aria-hidden="true">{isGuessed ? '🎲' : '?'}</span>
        <span>{isGuessed ? 'Marked as guess' : 'Mark as guess'}</span>
      </button>
    </div>
    <Question question={current} {selected} {onChange} {focusedLetter} />
    <p class="kbhint" aria-hidden="true">
      ← / → question · ↑ / ↓ option · <kbd>Space</kbd> select · <kbd>G</kbd> guess
    </p>
  </section>

  <div class="controls">
    <button type="button" on:click={() => goTo(-1)} disabled={atFirst}>← Previous</button>
    <div class="dots" aria-label="Quiz navigation">
      {#each run.questions as q, i (q.id)}
        <button
          class="dot"
          class:current={i === run.currentIndex}
          class:answered={(run.answers[q.id] ?? []).length > 0}
          class:guessed={run.guessed[q.id]}
          type="button"
          aria-label={`Go to question ${i + 1}${run.guessed[q.id] ? ' (guessed)' : ''}`}
          on:click={() => goTo(i - run.currentIndex)}
        ></button>
      {/each}
    </div>
    {#if atLast}
      <button class="primary" type="button" on:click={submit}>Submit →</button>
    {:else}
      <button class="primary" type="button" on:click={() => goTo(1)}>Next →</button>
    {/if}
  </div>
{/if}

<style>
  .bar { margin-bottom: 1.25rem; }
  .meta {
    display: flex;
    align-items: center;
    gap: .75rem;
    font-size: .9rem;
    color: var(--text-muted);
    margin-bottom: .4rem;
  }
  .pos { font-weight: 500; color: var(--text); }
  .of { color: var(--text-muted); font-weight: 400; padding: 0 .15rem; }
  .chap {
    font-size: .75rem;
    background: var(--surface-alt);
    color: var(--text-muted);
    border-radius: 999px;
    padding: .2rem .6rem;
    margin-left: auto;
  }
  .timer {
    display: inline-flex;
    align-items: center;
    gap: .3rem;
    color: var(--text);
    font-variant-numeric: tabular-nums;
    font-weight: 500;
    padding: .2rem .55rem;
    background: var(--surface-alt);
    border-radius: 999px;
  }
  .timer-text { font-size: .85rem; }
  .progress {
    height: 6px;
    background: var(--surface-alt);
    border-radius: 3px;
    overflow: hidden;
  }
  .fill {
    background: var(--accent);
    height: 100%;
    transition: width .2s ease;
  }

  .quiz-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    box-shadow: var(--shadow);
  }
  .quiz-card-head {
    display: flex;
    justify-content: flex-end;
    margin-bottom: .75rem;
  }
  .guess-toggle {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    font-size: .85rem;
    padding: .35rem .75rem;
    border: 1px dashed var(--border);
    border-radius: 999px;
    background: transparent;
    color: var(--text-muted);
  }
  .guess-toggle:hover:not(:disabled) {
    border-style: solid;
    color: var(--text);
    background: var(--surface-alt);
  }
  .guess-toggle.active {
    background: var(--accent-soft);
    border-color: var(--accent);
    border-style: solid;
    color: var(--accent);
  }
  .guess-icon {
    font-size: 1rem;
    line-height: 1;
  }
  .kbhint {
    margin: 1rem 0 0;
    padding-top: .75rem;
    border-top: 1px dashed var(--border);
    color: var(--text-muted);
    font-size: .8rem;
    text-align: center;
  }
  kbd {
    background: var(--surface-alt);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0 .35rem;
    font-family: var(--font-mono);
    font-size: .75rem;
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.25rem;
  }
  .dots {
    display: flex;
    gap: .3rem;
    flex-wrap: wrap;
    justify-content: center;
    flex: 1;
  }
  .dot {
    width: .65rem;
    height: .65rem;
    padding: 0;
    border-radius: 50%;
    background: var(--surface-alt);
    border: 1px solid var(--border);
    cursor: pointer;
    transition: background-color .15s, transform .1s;
  }
  .dot:hover { background: var(--border); transform: scale(1.2); }
  .dot.answered { background: var(--accent-soft); border-color: var(--accent); }
  .dot.guessed {
    border-style: dashed;
    border-width: 2px;
  }
  .dot.current { background: var(--accent); border-color: var(--accent); transform: scale(1.25); }
</style>

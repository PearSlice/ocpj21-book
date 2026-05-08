<script lang="ts">
  import { resetToSetup, chapterById } from '../lib/store';
  import type { ResultsView } from '../lib/store';
  import Question from './Question.svelte';

  export let results: ResultsView;

  let openIndex: number | null = null;

  $: pct = results.total === 0 ? 0 : Math.round((results.correctCount / results.total) * 100);
  $: verdict = pct >= 80 ? 'great' : pct >= 60 ? 'ok' : 'rough';
  $: guessedEntries = results.entries.filter((e) => e.guessed);
  $: guessedCorrect = guessedEntries.filter((e) => e.correct).length;

  function formatDuration(ms: number): string {
    const total = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }
  $: perQuestion =
    results.total === 0
      ? '0s'
      : `${Math.round(results.durationMs / results.total / 1000)}s`;

  function toggle(i: number) {
    openIndex = openIndex === i ? null : i;
  }

  function chapterLabel(ch: string): string {
    return chapterById.get(ch) ?? ch;
  }

  function formatSelection(letters: string[]): string {
    if (letters.length === 0) return '(no answer)';
    return letters.join(', ');
  }

  // Strip the outer <p>…</p> for preview rendering so the flex row stays inline.
  function stripOuter(html: string): string {
    const m = html.match(/^\s*<p>([\s\S]*?)<\/p>\s*(?:[\s\S]*)$/);
    return m ? m[1] : html;
  }
</script>

<section class="summary" data-verdict={verdict}>
  <div class="score-line">
    <span class="big">{results.correctCount}</span>
    <span class="sep">/</span>
    <span class="big">{results.total}</span>
    <span class="pct">{pct}%</span>
  </div>
  <p class="timing">
    Time: <strong>{formatDuration(results.durationMs)}</strong>
    <span class="sep-dot">·</span>
    <span class="muted">~{perQuestion} per question</span>
    {#if guessedEntries.length > 0}
      <span class="sep-dot">·</span>
      <span class="muted">
        Guessed: <strong>{guessedEntries.length}</strong>
        <span class="muted">({guessedCorrect} correct)</span>
      </span>
    {/if}
  </p>
  <p class="msg">
    {#if verdict === 'great'}Excellent — strong showing across this set.
    {:else if verdict === 'ok'}Solid — review the missed questions below.
    {:else}A few weak spots — take another pass through the chapters you missed.{/if}
  </p>
  <div class="actions">
    <button class="primary" type="button" on:click={resetToSetup}>Take another quiz</button>
  </div>
</section>

<h2 class="review-title">Review</h2>

<ol class="review">
  {#each results.entries as entry, i (entry.qid)}
    <li class:correct={entry.correct} class:wrong={!entry.correct} class:guessed={entry.guessed}>
      <button class="row" type="button" on:click={() => toggle(i)} aria-expanded={openIndex === i}>
        <span class="tag" aria-hidden="true">{entry.correct ? '✓' : '✗'}</span>
        <span class="num">{i + 1}.</span>
        <span class="chap">{chapterLabel(entry.question.chapter)}</span>
        {#if entry.guessed}
          <span class="badge-guess" title="You marked this as a guess">🎲 guess</span>
        {/if}
        <span class="grow preview md">{@html stripOuter(entry.question.stemHtml)}</span>
        <span class="chev" aria-hidden="true">{openIndex === i ? '▾' : '▸'}</span>
      </button>

      {#if openIndex === i}
        <div class="detail">
          <Question
            question={entry.question}
            selected={entry.selected}
            correctLetters={entry.question.correct}
            mode="review"
            locked
          />
          <div class="answer-line">
            <div><strong>Your answer:</strong> {formatSelection(entry.selected)}</div>
            <div><strong>Correct:</strong> {formatSelection(entry.question.correct)}</div>
          </div>
          {#if entry.question.explanationHtml}
            <details open>
              <summary>Explanation</summary>
              <div class="md explanation">{@html entry.question.explanationHtml}</div>
            </details>
          {/if}
        </div>
      {/if}
    </li>
  {/each}
</ol>

<style>
  .summary {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    text-align: center;
    box-shadow: var(--shadow);
    border-top: 4px solid var(--accent);
  }
  .summary[data-verdict="great"] { border-top-color: var(--success); }
  .summary[data-verdict="rough"] { border-top-color: var(--danger); }

  .score-line { font-variant-numeric: tabular-nums; }
  .big { font-size: 2.5rem; font-weight: 700; }
  .sep { font-size: 2rem; color: var(--text-muted); padding: 0 .3rem; }
  .pct {
    font-size: 2rem;
    font-weight: 700;
    margin-left: 1rem;
    color: var(--accent);
  }
  .summary[data-verdict="great"] .pct { color: var(--success); }
  .summary[data-verdict="rough"] .pct { color: var(--danger); }
  .timing {
    margin: .75rem 0 .25rem;
    font-size: .95rem;
    color: var(--text);
  }
  .muted { color: var(--text-muted); }
  .sep-dot { color: var(--text-muted); margin: 0 .4rem; }
  .msg { color: var(--text-muted); margin: .5rem 0 1rem; }

  .review-title {
    margin: 2rem 0 .75rem;
    font-size: 1.1rem;
  }
  .review {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: .5rem;
  }
  .review li {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
  }
  .review li.correct { border-left: 4px solid var(--success); }
  .review li.wrong { border-left: 4px solid var(--danger); }
  .review li.guessed { background: repeating-linear-gradient(
    -45deg,
    var(--surface),
    var(--surface) 8px,
    var(--surface-alt) 8px,
    var(--surface-alt) 10px
  ); }
  .badge-guess {
    font-size: .72rem;
    color: var(--accent);
    background: var(--accent-soft);
    border: 1px solid var(--accent);
    border-radius: 999px;
    padding: .1rem .5rem;
    white-space: nowrap;
    font-weight: 500;
  }

  .row {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: .75rem 1rem;
    background: transparent;
    border: none;
    border-radius: 0;
    cursor: pointer;
    color: inherit;
  }
  .row:hover { background: var(--surface-alt); }
  .tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    font-weight: 700;
    font-size: .9rem;
  }
  .correct .tag { background: var(--success-soft); color: var(--success); }
  .wrong .tag { background: var(--danger-soft); color: var(--danger); }
  .num {
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
    min-width: 1.8rem;
  }
  .chap {
    font-size: .75rem;
    background: var(--surface-alt);
    color: var(--text-muted);
    border-radius: 999px;
    padding: .15rem .55rem;
    white-space: nowrap;
  }
  .grow {
    flex: 1;
    min-width: 0;
  }
  .preview {
    color: var(--text-muted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .9rem;
  }
  .chev {
    color: var(--text-muted);
    font-size: .9rem;
  }

  .detail {
    padding: 1rem 1.25rem 1.25rem;
    border-top: 1px solid var(--border);
    background: var(--surface);
  }
  .answer-line {
    display: grid;
    gap: .25rem;
    margin-top: 1rem;
    font-size: .9rem;
    padding: .75rem 1rem;
    background: var(--surface-alt);
    border-radius: 8px;
  }
  details {
    margin-top: 1rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: .5rem 1rem;
    background: var(--surface);
  }
  summary {
    cursor: pointer;
    font-weight: 500;
    padding: .25rem 0;
  }
  .explanation { font-size: .93rem; }

  .actions { margin-top: 1rem; }
</style>

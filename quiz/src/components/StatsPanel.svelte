<script lang="ts">
  import { loadScore, resetProgress } from '../lib/progress';
  import { questionBank } from '../lib/store';
  import type { ScoreRecord } from '../lib/types';

  export let score: ScoreRecord = loadScore();
  export let refreshKey = 0; // parent can bump to force re-read

  $: if (refreshKey >= 0) score = loadScore();

  $: overallPct =
    score.totalAttempted === 0
      ? 0
      : Math.round((score.totalCorrect / score.totalAttempted) * 100);

  function pctFor(chId: string): number | null {
    const c = score.perChapter[chId];
    if (!c || c.attempted === 0) return null;
    return Math.round((c.correct / c.attempted) * 100);
  }

  function formatDuration(ms: number): string {
    const total = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s.toString().padStart(2, '0')}s`;
    return `${s}s`;
  }

  function onReset() {
    if (confirm('Clear all progress stored in cookies?')) {
      resetProgress();
      score = loadScore();
    }
  }
</script>

<section class="panel" aria-label="Progress">
  <div class="head">
    <h2>Your progress</h2>
    {#if score.totalAttempted > 0}
      <button class="link" on:click={onReset} aria-label="Reset progress">Reset</button>
    {/if}
  </div>

  {#if score.totalAttempted === 0}
    <p class="empty">No attempts yet. Take a quiz to start tracking progress.</p>
  {:else}
    <div class="overall">
      <div class="score">
        <span class="big">{score.totalCorrect}</span>
        <span class="sep">/</span>
        <span class="big">{score.totalAttempted}</span>
      </div>
      <div class="pct" aria-label="Overall percentage">{overallPct}%</div>
    </div>
    {#if score.totalQuizzes > 0}
      <div class="time-row">
        <span>{score.totalQuizzes} quiz{score.totalQuizzes === 1 ? '' : 'zes'}</span>
        <span class="dot">·</span>
        <span>Total time: <strong>{formatDuration(score.totalDurationMs)}</strong></span>
        {#if score.lastDurationMs != null}
          <span class="dot">·</span>
          <span>Last: <strong>{formatDuration(score.lastDurationMs)}</strong></span>
        {/if}
        {#if score.totalGuessed > 0}
          <span class="dot">·</span>
          <span>
            Guessed: <strong>{score.totalGuessed}</strong>
            <span class="muted">({score.totalGuessedCorrect} correct)</span>
          </span>
        {/if}
      </div>
    {/if}
    <ul class="bars">
      {#each questionBank.chapters as ch}
        {@const p = pctFor(ch.id)}
        <li>
          <div class="bar-row">
            <span class="label">{ch.title}</span>
            <span class="num">{p == null ? '—' : `${p}%`}</span>
          </div>
          <div class="bar">
            <div class="fill" style="width: {p ?? 0}%; opacity: {p == null ? .2 : 1}"></div>
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</section>

<style>
  .panel {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.1rem 1.25rem;
    box-shadow: var(--shadow);
  }
  .head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: .75rem;
  }
  h2 {
    font-size: 1.05rem;
    margin: 0;
  }
  .link {
    background: none;
    border: none;
    color: var(--text-muted);
    padding: 0;
    font-size: .85rem;
    cursor: pointer;
  }
  .link:hover { color: var(--accent); background: none; }
  .empty { color: var(--text-muted); margin: 0; }
  .overall {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: .5rem 0 .75rem;
  }
  .big { font-size: 1.6rem; font-weight: 600; }
  .sep { color: var(--text-muted); padding: 0 .2rem; }
  .pct { font-size: 1.6rem; font-weight: 600; color: var(--accent); }
  .time-row {
    display: flex;
    flex-wrap: wrap;
    gap: .3rem .1rem;
    font-size: .82rem;
    color: var(--text-muted);
    margin: 0 0 .9rem;
    padding: .5rem .75rem;
    background: var(--surface-alt);
    border-radius: 8px;
  }
  .time-row strong { color: var(--text); font-weight: 600; }
  .time-row .muted { color: var(--text-muted); }
  .dot { color: var(--text-muted); margin: 0 .35rem; }
  .bars {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: .45rem;
  }
  .bar-row {
    display: flex;
    justify-content: space-between;
    font-size: .85rem;
  }
  .label { color: var(--text); }
  .num { color: var(--text-muted); font-variant-numeric: tabular-nums; }
  .bar {
    height: 6px;
    background: var(--surface-alt);
    border-radius: 3px;
    overflow: hidden;
  }
  .fill {
    height: 100%;
    background: var(--accent);
    transition: width .3s ease;
  }
</style>

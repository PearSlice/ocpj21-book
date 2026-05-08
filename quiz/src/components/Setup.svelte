<script lang="ts">
  import { questionBank, pickQuestions, startQuiz } from '../lib/store';
  import StatsPanel from './StatsPanel.svelte';

  const chapters = questionBank.chapters;
  let selectedChapters: Set<string> = new Set(chapters.map((c) => c.id));
  let countInput = 10;
  let refreshKey = 0;

  $: availableCount = chapters
    .filter((c) => selectedChapters.has(c.id))
    .reduce((sum, c) => sum + c.count, 0);
  $: effectiveCount = Math.max(1, Math.min(countInput, availableCount));
  $: canStart = availableCount > 0 && countInput >= 1;

  function toggleChapter(id: string) {
    const next = new Set(selectedChapters);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    selectedChapters = next;
  }

  function selectAll() {
    selectedChapters = new Set(chapters.map((c) => c.id));
  }
  function selectNone() {
    selectedChapters = new Set();
  }

  function onStart() {
    const picked = pickQuestions(Array.from(selectedChapters), effectiveCount);
    if (picked.length === 0) return;
    startQuiz(picked);
  }
</script>

<div class="layout">
  <section class="card">
    <h2>Start a new quiz</h2>

    <div class="count">
      <label for="count">Number of questions</label>
      <input
        id="count"
        type="number"
        min="1"
        max={availableCount || 1}
        bind:value={countInput}
      />
      <span class="hint">
        {#if availableCount === 0}
          Select at least one chapter.
        {:else if countInput > availableCount}
          Only {availableCount} question{availableCount === 1 ? '' : 's'} available — will pick {availableCount}.
        {:else}
          {availableCount} question{availableCount === 1 ? '' : 's'} available in your selection.
        {/if}
      </span>
    </div>

    <div class="chapters">
      <div class="chapters-head">
        <h3>Chapters</h3>
        <div class="actions">
          <button class="link" type="button" on:click={selectAll}>All</button>
          <span class="divider">·</span>
          <button class="link" type="button" on:click={selectNone}>None</button>
        </div>
      </div>
      <ul>
        {#each chapters as ch}
          <li>
            <label class="chapter-row" class:checked={selectedChapters.has(ch.id)}>
              <input
                type="checkbox"
                checked={selectedChapters.has(ch.id)}
                on:change={() => toggleChapter(ch.id)}
              />
              <span class="title">{ch.title}</span>
              <span class="subtitle">{ch.subtitle}</span>
              <span class="count-badge">{ch.count}</span>
            </label>
          </li>
        {/each}
      </ul>
    </div>

    <button class="primary start" type="button" on:click={onStart} disabled={!canStart}>
      Start quiz →
    </button>
  </section>

  <aside class="stats">
    <StatsPanel {refreshKey} />
  </aside>
</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 780px) {
    .layout { grid-template-columns: 1fr; }
  }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    box-shadow: var(--shadow);
  }
  h2 { margin: 0 0 1rem; font-size: 1.2rem; }
  h3 { margin: 0; font-size: 1rem; font-weight: 600; }

  .count {
    display: grid;
    grid-template-columns: auto 6.5rem;
    gap: .6rem 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .count label { font-weight: 500; }
  .hint {
    grid-column: 1 / -1;
    color: var(--text-muted);
    font-size: .85rem;
  }

  .chapters-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .6rem;
  }
  .actions { font-size: .85rem; }
  .link {
    background: none;
    border: none;
    color: var(--accent);
    padding: 0;
    cursor: pointer;
    font-size: inherit;
  }
  .link:hover { text-decoration: underline; background: none; }
  .divider { color: var(--text-muted); margin: 0 .4rem; }

  ul { list-style: none; padding: 0; margin: 0; display: grid; gap: .35rem; }
  .chapter-row {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "cb title count" "cb subtitle count";
    column-gap: .75rem;
    align-items: center;
    padding: .55rem .75rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    background: var(--surface);
    transition: border-color .15s, background-color .15s;
  }
  .chapter-row:hover { border-color: var(--accent); }
  .chapter-row.checked { background: var(--accent-soft); border-color: var(--accent); }
  .chapter-row input { grid-area: cb; width: 1.1rem; height: 1.1rem; }
  .title { grid-area: title; font-weight: 500; }
  .subtitle { grid-area: subtitle; color: var(--text-muted); font-size: .85rem; }
  .count-badge {
    grid-area: count;
    font-variant-numeric: tabular-nums;
    background: var(--surface-alt);
    border-radius: 999px;
    padding: .15rem .6rem;
    font-size: .8rem;
    color: var(--text-muted);
  }
  .chapter-row.checked .count-badge {
    background: var(--surface);
    color: var(--accent);
  }

  .start {
    margin-top: 1.5rem;
    width: 100%;
    padding: .8rem;
    font-size: 1.05rem;
    font-weight: 600;
  }
</style>

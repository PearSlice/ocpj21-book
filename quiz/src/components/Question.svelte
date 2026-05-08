<script lang="ts">
  import type { Question } from '../lib/types';

  export let question: Question;
  export let selected: string[] = [];
  export let onChange: (next: string[]) => void = () => {};
  export let locked = false;
  export let correctLetters: string[] | null = null; // when showing review
  export let mode: 'quiz' | 'review' = 'quiz';
  export let focusedLetter: string | null = null; // keyboard focus indicator

  function isSelected(letter: string): boolean {
    return selected.includes(letter);
  }

  function toggle(letter: string) {
    if (locked) return;
    if (question.multiSelect) {
      if (isSelected(letter)) onChange(selected.filter((l) => l !== letter));
      else onChange([...selected, letter].sort());
    } else {
      onChange([letter]);
    }
  }

  function stateFor(letter: string): 'none' | 'correct' | 'wrong' | 'missed' | 'picked' {
    if (mode !== 'review' || !correctLetters) {
      return isSelected(letter) ? 'picked' : 'none';
    }
    const isCorrect = correctLetters.includes(letter);
    const picked = isSelected(letter);
    if (picked && isCorrect) return 'correct';
    if (picked && !isCorrect) return 'wrong';
    if (!picked && isCorrect) return 'missed';
    return 'none';
  }
</script>

<article class="q">
  <div class="stem md">{@html question.stemHtml}</div>

  {#if question.multiSelect}
    <p class="hint">Select all that apply.</p>
  {/if}

  <ul class="options">
    {#each question.options as opt (opt.letter)}
      {@const s = stateFor(opt.letter)}
      <li>
        <label
          class="opt state-{s}"
          class:locked
          class:kb-focus={!locked && focusedLetter === opt.letter}
        >
          <input
            type={question.multiSelect ? 'checkbox' : 'radio'}
            name={question.id}
            value={opt.letter}
            checked={isSelected(opt.letter)}
            disabled={locked}
            tabindex="-1"
            on:change={() => toggle(opt.letter)}
          />
          <span class="letter">{opt.letter}</span>
          <span class="body md">{@html opt.html}</span>
          {#if mode === 'review'}
            {#if s === 'correct'}<span class="marker correct" aria-label="Your answer, correct">✓</span>{/if}
            {#if s === 'wrong'}<span class="marker wrong" aria-label="Your answer, wrong">✗</span>{/if}
            {#if s === 'missed'}<span class="marker missed" aria-label="Correct answer you did not pick">★</span>{/if}
          {/if}
        </label>
      </li>
    {/each}
  </ul>
</article>

<style>
  .q .stem { font-size: 1.02rem; }
  .hint { color: var(--text-muted); font-size: .85rem; margin: .5rem 0 0; }

  .options {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    display: grid;
    gap: .5rem;
  }
  .opt {
    display: grid;
    grid-template-columns: 1.2rem 1.5rem 1fr auto;
    gap: .75rem;
    align-items: start;
    padding: .75rem 1rem;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    cursor: pointer;
    transition: border-color .15s, background-color .15s;
  }
  .opt:not(.locked):hover { border-color: var(--accent); }
  .opt input { margin-top: .15rem; }
  .letter { font-weight: 600; color: var(--text-muted); }
  .body { overflow: hidden; }
  .opt.locked { cursor: default; }

  .state-picked { border-color: var(--accent); background: var(--accent-soft); }
  .state-correct { border-color: var(--success); background: var(--success-soft); }
  .state-wrong { border-color: var(--danger); background: var(--danger-soft); }
  .state-missed {
    border-color: var(--success);
    border-style: dashed;
  }

  .kb-focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .marker {
    font-weight: 700;
    font-size: 1.05rem;
    padding-left: .25rem;
    align-self: center;
  }
  .marker.correct { color: var(--success); }
  .marker.wrong { color: var(--danger); }
  .marker.missed { color: var(--success); }
</style>

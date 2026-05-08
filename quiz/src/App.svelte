<script lang="ts">
  import { state } from './lib/store';
  import Setup from './components/Setup.svelte';
  import Quiz from './components/Quiz.svelte';
  import Results from './components/Results.svelte';
</script>

<div class="page">
  <header>
    <h1>OCPJ21 Practice Quiz</h1>
    <p class="tagline">Study guide for the Java SE 21 Developer Exam (1Z0-830)</p>
  </header>

  <main>
    {#if $state.phase === 'setup'}
      <Setup />
    {:else if $state.phase === 'quiz'}
      <Quiz />
    {:else if $state.phase === 'results'}
      <Results results={$state.results} />
    {/if}
  </main>

  <footer>
    <small>Progress is stored locally in your browser cookies.</small>
  </footer>
</div>

<style>
  .page {
    max-width: 880px;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem;
  }
  header {
    text-align: center;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--border);
    margin-bottom: 2rem;
  }
  h1 {
    margin: 0;
    font-size: 1.7rem;
    letter-spacing: -0.01em;
  }
  .tagline {
    margin: .35rem 0 0;
    color: var(--text-muted);
    font-size: .95rem;
  }
  main {
    min-height: 50vh;
  }
  footer {
    margin-top: 3rem;
    text-align: center;
    color: var(--text-muted);
  }
</style>

<script>
  import { onMount } from 'svelte'
  export let date
  export let isLoading

  onMount(async () => {
    const res = await fetch('/api/date')

    date = await res.text()
    isLoading = !date
  })
</script>

<main>
  <h1>Svelte + Node.js API</h1>
  <h2>
    Deployed with
    <a href="https://zeit.co/docs" target="_blank" rel="noreferrer noopener">
      ZEIT Now
    </a>
    !
  </h2>
  <p>
    <a
      href="https://github.com/zeit/now/tree/master/examples/svelte"
      target="_blank"
      rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app with three directories,
    <code>/public</code>
    for static assets,
    <code>/src</code>
    for components and content, and
    <code>/api</code>
    which contains a serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    function. See
    <a href="/api/date">
      <code>api/date</code>
      for the Date API with Node.js
    </a>
    .
  </p>
  <br />
  <h2>The date according to Node.js is:</h2>
  {#if isLoading}
    <p>Loading date...</p>
  {:else}
    <p>{date}</p>
  {/if}
</main>

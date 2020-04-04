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

<style>
  main {
    @apply min-h-screen max-w-screen-sm mx-auto flex items-center;
  }

  h1 {
    @apply text-5xl font-bold text-center mb-16;
  }

  h2 {
    @apply text-2xl font-bold text-center my-8;
  }

  a {
    color: #0076ff;
    border-bottom: 1px solid white;
    transition: all 0.2s ease;
  }

  a:hover {
    border-bottom: 1px solid #0076ff;
  }

  p {
    @apply text-center;
  }

  code {
    color: #d400ff;
  }
</style>

<main>
  <div>
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
        href="https://github.com/allienx/myip"
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
  </div>
</main>

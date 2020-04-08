<script>
  import Clipboard from 'clipboard'
  import { onMount } from 'svelte'

  export let ip

  onMount(() => {
    new Clipboard('.clippy')
  })
</script>

<style>
  div {
    @apply flex justify-center mx-auto my-8;
  }

  code {
    @apply cursor-pointer p-4 mr-4 bg-gray-200 rounded font-mono;
  }

  button {
    @apply mx-4;
  }
</style>

<div>
  <code id="ip-address" class="clippy md:text-2xl" data-clipboard-text={ip}>
    {ip}
  </code>
  <button
    class="clippy"
    data-clipboard-target="#ip-address"
    title="Copy to clipboard">
    <img width="25" src="img/clippy.svg" alt="Copy to clipboard" />
  </button>
</div>

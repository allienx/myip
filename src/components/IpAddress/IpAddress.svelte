<script>
  import copy from 'copy-text-to-clipboard'
  import { CheckIcon } from '~/components/CheckIcon'
  import { ClippyIcon } from '~/components/ClippyIcon'

  export let ip
  export let hasCopied = false

  // Copy IP address to cliboard and flash check icon.
  // Don't do anything when the checkmark is clicked
  export let handleCopyClick = () => {
    if (hasCopied) {
      return
    }

    const success = copy(ip)

    if (!success) {
      return
    }

    hasCopied = true

    setTimeout(() => {
      hasCopied = false
    }, 1500)
  }
</script>

<div class="mx-auto my-8 flex justify-center">
  <code class="p-4 mr-4 bg-gray-200 rounded font-mono md:text-2xl">{ip}</code>
  <button class="mx-4" on:click={handleCopyClick} title="Copy to clipboard">
    {#if hasCopied}
      <CheckIcon />
    {:else}
      <ClippyIcon />
    {/if}
  </button>
</div>

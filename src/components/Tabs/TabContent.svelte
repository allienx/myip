<script>
  import { getContext } from 'svelte'
  import { fade } from 'svelte/transition'
  import { TABS_CONTEXT_KEY } from './constants'

  export let id

  const { activeTab } = getContext(TABS_CONTEXT_KEY)
</script>

<style>
  .content {
    @apply p-5;
  }
</style>

{#if $activeTab === id}
  <div class="content" in:fade={{ delay: 100, duration: 500 }}>
    <slot />
  </div>
{/if}

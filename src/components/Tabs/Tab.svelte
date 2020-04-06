<script>
  import { getContext, onMount } from 'svelte'
  import { TABS_CONTEXT_KEY } from './constants'

  export let id = undefined

  const { activeTab, setActiveTab } = getContext(TABS_CONTEXT_KEY)
  $: active = $activeTab === id

  onMount(() => {
    if (!$activeTab) {
      setActiveTab(id)
    }
  })
</script>

<style>
  li {
    @apply block flex-1 mx-4 py-2 px-4 rounded text-center cursor-pointer;
  }

  li:hover {
    @apply bg-gray-200;
  }

  li:first-child {
    @apply ml-0;
  }

  li:last-child {
    @apply mr-0;
  }

  .active {
    @apply bg-blue-500 text-white font-semibold;
  }

  .active:hover {
    @apply bg-blue-500;
  }
</style>

<li class:active on:click={() => setActiveTab(id)}>
  <slot />
</li>

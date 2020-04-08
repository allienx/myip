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
    @apply cursor-pointer block flex-1 bg-white rounded-t-lg py-2 px-4 text-blue-600 text-center;

    transition: font-weight 0.4s ease-in-out;
  }

  li.active {
    @apply -mb-px border-l border-t border-r font-semibold;
  }

  li:first-child {
    @apply ml-0;
  }

  li:last-child {
    @apply mr-0;
  }
</style>

<li class:active on:click={() => setActiveTab(id)}>
  <slot />
</li>

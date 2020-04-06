<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { TABS_CONTEXT_KEY } from './constants'

  export let defaultTabId = undefined

  let activeTab = writable(defaultTabId)

  setContext(TABS_CONTEXT_KEY, {
    activeTab,
    setActiveTab,
  })

  function setActiveTab(id) {
    activeTab.set(id)
  }
</script>

<div>
  <slot />
</div>

<script>
  import { onMount } from 'svelte'
  import { ClientInfo } from './api/services/clientInfo'
  import IpAddressContainer from './components/IpAddress/IpAddressContainer.svelte'
  import { fetchApi, clientInfo } from './stores/api'

  onMount(async () => {
    await fetchApi(clientInfo, ClientInfo.get)
  })
</script>

<style>
  main {
    @apply min-h-screen max-w-screen-sm mx-auto;
  }

  h1 {
    @apply text-5xl font-bold text-center mb-16;
  }
</style>

<main>
  <div>
    <h1>my ip</h1>

    <IpAddressContainer />
  </div>
</main>

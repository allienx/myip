<script>
  import { onDestroy } from 'svelte'
  import { clientInfo } from '../../stores/api'
  import IpAddress from './IpAddress.svelte'

  let isLoading
  let err
  let ip

  const unsubscribe = clientInfo.subscribe((state) => {
    isLoading = !state.isLoaded || state.isFetching
    err = state.err
    ip = state.data && state.data.ip
  })

  onDestroy(unsubscribe)
</script>

{#if isLoading}
  <div>Loading...</div>
{:else if err}
  <div>Error</div>
{:else}
  <IpAddress {ip} />
{/if}

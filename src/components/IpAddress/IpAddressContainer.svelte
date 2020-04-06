<script>
  import { ipInfo } from '../../stores/global'
  import IpAddress from './IpAddress.svelte'
</script>

{#if !$ipInfo.isLoaded || $ipInfo.isFetching}
  <div>Loading...</div>
{:else if $ipInfo.err}
  <div>Error</div>
{:else}
  <IpAddress ip={$ipInfo.data.ip} />
{/if}

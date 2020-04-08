<script>
  import { ipInfo } from '../../stores/global'
  import IpAddress from './IpAddress.svelte'
</script>

<style>
  div {
    @apply text-center;
  }
</style>

{#if !$ipInfo.isLoaded || $ipInfo.isFetching}
  <div>Loading...</div>
{:else if $ipInfo.err}
  <div>Error</div>
{:else}
  <IpAddress ip={$ipInfo.data.ip} />
{/if}

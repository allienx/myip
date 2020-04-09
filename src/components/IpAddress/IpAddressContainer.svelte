<script>
  import { ipInfo } from '../../stores/global'
  import { LoadingSpinner } from '../LoadingSpinner'
  import IpAddress from './IpAddress.svelte'
</script>

<style>
  div {
    @apply text-center;
  }
</style>

{#if !$ipInfo.isLoaded || $ipInfo.isFetching}
  <LoadingSpinner class="mx-auto" />
{:else if $ipInfo.err}
  <div>Error</div>
{:else}
  <IpAddress ip={$ipInfo.data.ip} />
{/if}

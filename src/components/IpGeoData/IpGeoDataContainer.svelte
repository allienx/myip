<script>
  import { afterUpdate } from 'svelte'
  import { ipInfo, ipGeoData } from '../../stores/global'
  import IpGeoData from './IpGeoData'

  let ip = undefined

  afterUpdate(async () => {
    const newIp = $ipInfo.data && $ipInfo.data.ip

    if (newIp && newIp !== ip) {
      ip = $ipInfo.data && $ipInfo.data.ip

      await ipGeoData.fetch(ip)
    }
  })
</script>

<style>
  div {
    @apply text-center;
  }
</style>

{#if !$ipGeoData.isLoaded || $ipGeoData.isFetching}
  <div>Loading...</div>
{:else if $ipGeoData.err}
  <div>Error</div>
{:else}
  <IpGeoData
    lat={$ipGeoData.data.lat}
    lon={$ipGeoData.data.lon}
    city={$ipGeoData.data.city}
    region={$ipGeoData.data.region}
    postalCode={$ipGeoData.data.postalCode}
    country={$ipGeoData.data.country}
    countryCode={$ipGeoData.data.countryCode}
    timezone={$ipGeoData.data.timezone} />
{/if}

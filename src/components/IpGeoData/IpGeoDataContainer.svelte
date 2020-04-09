<script>
  import { onMount } from 'svelte'
  import { ipGeoData } from '../../stores/global'
  import { LoadingSpinner } from '../LoadingSpinner'
  import IpGeoData from './IpGeoData'

  export let ip = undefined

  onMount(async () => {
    if (!$ipGeoData.isLoaded) {
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
  <LoadingSpinner class="mx-auto" />
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

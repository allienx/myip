<script>
  import Alert from '../Alert/Alert.svelte'
  import { ipGeoData } from '~/stores/global'
  import IpGeoData from './IpGeoData'
</script>

{#if $ipGeoData.isLoaded}
  {#if $ipGeoData.err}
    <div class="max-w-lg mx-auto text-center">
      <Alert msg="Fetching the IP address details failed." />
    </div>
  {:else}
    <div class="text-center">
      <IpGeoData
        lat={$ipGeoData.data.lat}
        lon={$ipGeoData.data.lon}
        city={$ipGeoData.data.city}
        region={$ipGeoData.data.region}
        postalCode={$ipGeoData.data.postalCode}
        country={$ipGeoData.data.country}
        countryCode={$ipGeoData.data.countryCode}
        timezone={$ipGeoData.data.timezone} />
    </div>
  {/if}
{/if}

<script>
  import Clipboard from 'clipboard'
  import { CountryFlag } from '../CountryFlag'
  import { onMount } from 'svelte'

  export let lat
  export let lon
  export let city
  export let region
  export let postalCode
  export let country
  export let countryCode
  export let timezone

  onMount(() => {
    new Clipboard('.clippy')
  })
</script>

<style>
  table {
    @apply mx-auto;
  }

  tr {
    @apply mb-4;

    transition: color 0.4s ease-in-out;
  }

  tr:hover {
    @apply cursor-pointer text-black;
  }

  td {
    @apply px-4;
  }

  td:first-child {
    @apply font-semibold text-right;
  }

  .spacer {
    @apply h-3;
  }

  .country {
    @apply flex items-center;
  }
</style>

<table>
  <tr class="clippy" data-clipboard-text={lat}>
    <td>Latitude</td>
    <td>{lat}</td>
  </tr>
  <tr class="spacer" />
  <tr class="clippy" data-clipboard-text={lon}>
    <td>Longitude</td>
    <td>{lon}</td>
  </tr>
  <tr class="spacer" />
  <tr class="clippy" data-clipboard-text={city}>
    <td>City</td>
    <td>{city}</td>
  </tr>
  <tr class="spacer" />
  <tr class="clippy" data-clipboard-text={region}>
    <td>Region</td>
    <td>{region}</td>
  </tr>
  <tr class="spacer" />
  <tr class="clippy" data-clipboard-text={postalCode}>
    <td>Postal Code</td>
    <td>{postalCode}</td>
  </tr>
  <tr class="spacer" />
  <tr class="clippy" data-clipboard-text={country}>
    <td>Country</td>
    <td class="country">
      {country}
      <CountryFlag class="ml-3" width="45" {countryCode} />
    </td>
  </tr>
  <tr class="spacer" />
  <tr class="clippy" data-clipboard-text={timezone}>
    <td>Timezone</td>
    <td>{timezone}</td>
  </tr>
</table>

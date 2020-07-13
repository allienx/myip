<script>
  import { CountryFlag } from '~/components/CountryFlag'

  export let lat
  export let lon
  export let city
  export let region
  export let postalCode
  export let country
  export let countryCode
  export let timezone
</script>

<style>
  tr {
    @apply mb-4;
  }

  td {
    @apply px-4;
  }

  td:first-child {
    @apply font-semibold text-right;
  }

  td:last-child {
    @apply text-left;
  }

  .spacer {
    @apply h-3;
  }
</style>

<table class="mx-auto">
  <tr>
    <td>Latitude</td>
    <td>{lat}</td>
  </tr>
  <tr class="spacer" />
  <tr>
    <td>Longitude</td>
    <td>{lon}</td>
  </tr>
  <tr class="spacer" />
  <tr>
    <td>City</td>
    <td>{city}</td>
  </tr>
  <tr class="spacer" />
  <tr>
    <td>Region</td>
    <td>{region}</td>
  </tr>
  <tr class="spacer" />
  <tr>
    <td>Postal Code</td>
    <td>{postalCode}</td>
  </tr>
  <tr class="spacer" />
  <tr>
    <td>Country</td>
    <td class="flex items-center">
      {country}
      <CountryFlag class="ml-3" width="45" {countryCode} />
    </td>
  </tr>
  <tr class="spacer" />
  <tr>
    <td>Timezone</td>
    <td>{timezone}</td>
  </tr>
</table>

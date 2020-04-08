<script>
  let className
  export { className as class }
  export let width
  export let countryCode

  const src = `https://flagpedia.net/data/flags/vector/${countryCode.toLowerCase()}.svg`
  const alt = `${countryCode} flag`
</script>

{#if countryCode}
  <img class={className} {width} {src} {alt} />
{/if}

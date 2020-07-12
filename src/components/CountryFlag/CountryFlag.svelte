<script>
  let className
  export { className as class }
  export let width = undefined
  export let countryCode

  const src = `https://flagpedia.net/data/flags/vector/${countryCode.toLowerCase()}.svg`
  const alt = `${countryCode.toUpperCase()} flag`
</script>

{#if countryCode}
  <img class={className} {width} {src} {alt} />
{/if}

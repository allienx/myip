<script>
  import { afterUpdate, onMount } from 'svelte'
  import { About } from '~/components/About'
  import { Alert } from '~/components/Alert'
  import { IpAddress } from '~/components/IpAddress'
  import { IpGeoDataContainer } from '~/components/IpGeoData'
  import { GitHubIcon } from '~/components/Icons/GitHubIcon'
  import { LoadingSpinner } from '~/components/LoadingSpinner'
  import { Tabs, TabList, Tab, TabContent } from '~/components/Tabs'
  import { ipInfo, ipGeoData } from '~/stores/global'

  const TabIds = {
    IP: 'ip',
    ABOUT: 'about',
  }

  let ip = undefined
  let isLoadingIpInfo = true
  let isLoadingIpGeoData = true

  onMount(async () => {
    // Initialize global stores.
    await ipInfo.fetch()
  })

  afterUpdate(() => {
    ip = $ipInfo.data && $ipInfo.data.ip
    isLoadingIpInfo = !$ipInfo.isLoaded || $ipInfo.isFetching
    isLoadingIpGeoData = !$ipGeoData.isLoaded || $ipGeoData.isFetching

    if (ip && !$ipGeoData.isLoaded && !$ipGeoData.isFetching) {
      ipGeoData.fetch(ip)
    }
  })
</script>

<main class="w-full max-w-screen-sm mx-auto flex-grow flex-shrink-0 px-3 pt-12">
  <h1 class="mb-12 font-mono font-bold text-5xl text-center">ip lookup</h1>

  <Tabs>
    <TabList>
      <Tab id={TabIds.IP}>My IP</Tab>
      <Tab id={TabIds.ABOUT}>About</Tab>
    </TabList>

    <TabContent id={TabIds.IP}>
      {#if isLoadingIpInfo || isLoadingIpGeoData}
        {#if $ipInfo.err}
          <div class="max-w-lg mx-auto text-center">
            <Alert msg="Something went wrong fetching your IP address." />
          </div>
        {:else}
          <LoadingSpinner class="mx-auto" />
        {/if}
      {:else}
        <IpAddress ip={$ipInfo.data.ip} />
        <IpGeoDataContainer />
      {/if}
    </TabContent>

    <TabContent id={TabIds.ABOUT}>
      <About />
    </TabContent>
  </Tabs>
</main>

<footer class="flex flex-shrink-0 justify-center items-center">
  <a
    class="p-4"
    href="https://github.com/allienx/myip"
    target="_blank"
    rel="noopener noreferrer">
    <GitHubIcon />
  </a>
</footer>

<script>
  import { onMount } from 'svelte'
  import { ipInfo } from './stores/global'
  import { About } from './components/About'
  import { IpAddressContainer } from './components/IpAddress'
  import { IpGeoDataContainer } from './components/IpGeoData'
  import { Tabs, TabList, Tab, TabContent } from './components/Tabs'

  const TabIds = {
    IP: 'ip',
    ABOUT: 'about',
  }

  onMount(async () => {
    // Initialize global stores.
    await ipInfo.fetch()
  })
</script>

<style>
  main {
    @apply max-w-screen-sm mx-auto px-3 pt-12;

    min-height: calc(100vh - 50px);
  }

  h1 {
    @apply mb-12 font-mono font-bold text-5xl text-center;
  }

  footer {
    @apply flex justify-center items-center;

    height: 50px;
  }
</style>

<main class="md:text-xl text-gray-900">
  <h1>ip lookup</h1>

  <Tabs>
    <TabList>
      <Tab id={TabIds.IP}>My IP</Tab>
      <Tab id={TabIds.ABOUT}>About</Tab>
    </TabList>

    <TabContent id={TabIds.IP}>
      <IpAddressContainer />
      <IpGeoDataContainer />
    </TabContent>

    <TabContent id={TabIds.ABOUT}>
      <About />
    </TabContent>
  </Tabs>
</main>

<footer>
  <a
    href="https://github.com/allienx/myip"
    target="_blank"
    rel="noopener noreferrer">
    <img width="25" src="img/github.svg" alt="GitHub logo" />
  </a>
</footer>

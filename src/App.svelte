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
  :global(html, body) {
    height: 100%;
  }

  :global(body) {
    @apply flex flex-col;
  }

  main {
    @apply w-full max-w-screen-sm mx-auto flex-grow flex-shrink-0 px-3 pt-12;
  }

  h1 {
    @apply mb-12 font-mono font-bold text-5xl text-center;
  }

  footer {
    @apply flex flex-shrink-0 justify-center items-center;
  }

  .github {
    @apply p-4;
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
    class="github"
    href="https://github.com/allienx/myip"
    target="_blank"
    rel="noopener noreferrer">
    <img width="25" src="img/github.svg" alt="GitHub logo" />
  </a>
</footer>

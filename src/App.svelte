<script>
  import { onMount } from 'svelte'
  import { ipInfo } from './stores/global'
  import { IpAddressContainer } from './components/IpAddress'
  import About from './components/About/About.svelte'
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
  }

  h1 {
    @apply mb-12 font-mono font-bold text-5xl text-center;
  }

  footer {
    @apply flex justify-center my-8;
  }
</style>

<main>
  <h1>ip lookup</h1>

  <Tabs>
    <TabList>
      <Tab id={TabIds.IP}>My IP</Tab>
      <Tab id={TabIds.ABOUT}>About</Tab>
    </TabList>

    <TabContent id={TabIds.IP}>
      <IpAddressContainer />
    </TabContent>

    <TabContent id={TabIds.ABOUT}>
      <About />
    </TabContent>
  </Tabs>
</main>

<footer>
  <a
    href="https://github.com/allienx"
    target="_blank"
    rel="noopener noreferrer">
    <img width="25" src="img/github.svg" alt="GitHub logo" />
  </a>
</footer>

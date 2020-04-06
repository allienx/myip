<script>
  import { onMount } from 'svelte'
  import { ipInfo } from './stores/global'
  import { IpAddressContainer } from './components/IpAddress'
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
    @apply min-h-screen max-w-screen-sm mx-auto px-3;
  }

  h1 {
    @apply my-12 font-mono font-bold text-5xl text-center;
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
      <p>
        Maecenas tincidunt at ante eget posuere. Donec non orci quis nunc
        bibendum egestas. Pellentesque ligula lacus, efficitur eu elit ac,
        lacinia dignissim lorem. Vivamus nec quam magna. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut
        quam sit amet lectus dictum facilisis et ac nulla. Duis ac ex id justo
        ultricies molestie sit amet euismod felis. Sed cursus justo velit, et
        vulputate enim malesuada eget. Donec lorem velit, elementum id enim ut,
        vestibulum accumsan nisi. Pellentesque nec suscipit elit.
      </p>
    </TabContent>
  </Tabs>
</main>

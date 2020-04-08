<style>
  p,
  ul {
    @apply m-2;
  }

  ul {
    @apply my-5;

    list-style-type: disc;
  }

  li {
    @apply pt-2 ml-8;
  }

  a {
    @apply border-b border-white border-solid text-blue-600;

    transition: all 0.4s ease-in-out;
  }

  a:hover {
    @apply border-b border-blue-600;
  }
</style>

<p>Simple web app that looks up your IP address.</p>

<ul>
  Built with:
  <li>
    <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
      svelte
    </a>
  </li>
  <li>
    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
      tailwindcss
    </a>
  </li>
  <li>
    <a href="https://golang.org" target="_blank" rel="noopener noreferrer">
      go
    </a>
  </li>
</ul>

<ul>
  Dependencies:
  <li>
    <a href="https://ipapi.com/">ipapi</a>
    - IP address geolocation
  </li>
  <li>
    <a href="https://github.com/zenorocha/clipboard.js">clipboard.js</a>
    - Copying text to the clipboard
  </li>
  <li>
    <a href="https://flagpedia.net/">flagpedia</a>
    - Country flags
  </li>
</ul>

<p>
  Hosted and auto-deployed with
  <a href="https://zeit.co" target="_blank" rel="noopener noreferrer">
    ZEIT Now
  </a>
</p>

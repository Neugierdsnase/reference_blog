<script lang="ts">
  import "../app.css"
  import "@phosphor-icons/web/regular"
  import "@phosphor-icons/web/fill"
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  onMount(() => {
    themeChange(false)
  })
</script>

<main class="w-[84%] px-[8%] lg:w-[87.5%] py-20 lg:pl-[12.5%] mx-auto max-w-[1400px]">
  <slot />
</main>

<style lang="postcss">
  main {
    counter-reset: sidenote-counter;
  }

  :global(html) {
    @apply font-serif text-base font-normal;}

  :global(body) {
    @apply bg-base-100 text-base-content;
  }
</style>

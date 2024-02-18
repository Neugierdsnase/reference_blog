<script lang="ts">
	import type { SvelteComponent } from "svelte";

  export let kind: "ul" | "ol" | "dl" = "ul";
  export let items: SvelteComponent[] = [];
</script>

  <svelte:element this={kind}>
{#each items as item}
  <li>{item}</li>
{/each}
</svelte:element>

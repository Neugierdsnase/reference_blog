<script lang="ts">
	import { HttpRegex } from '$lib/utils/regex';

	export let href: string | undefined = undefined;
	const isExternalLink = !!href && HttpRegex.test(href);
	export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self';
	export let rel = isExternalLink ? 'noopener noreferrer' : undefined;
</script>

<a
	{href}
	{target}
	{rel}
	data-sveltekit-preload-data
>
	<slot />
</a>

<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Image from '../atoms/Image.svelte';

	export let title: string;
	export let coverImage: string | undefined = undefined;
	export let excerpt: string;
	export let slug: string;
	export let tags: string[] | undefined;
	export let readingTime: string | undefined = undefined;

	export let showImage = true;
</script>

<Card
	href="/{slug}"
	target="_self"
	additionalClass="blog-post-card {!showImage || !coverImage ? 'no-image' : ''}"
>
	<div class="image" slot="image">
		{#if coverImage}
			<Image src={coverImage} alt="Cover image of this blog post" />
		{/if}
	</div>
	<div class="content" slot="content">
		<p class="title">
			{title}
		</p>
		{#if readingTime}
			<div class="note">{readingTime}</div>
		{/if}
		{#if excerpt}
			<p class="text">
				{excerpt}
			</p>
		{/if}
	</div>
	<div class="footer" slot="footer">
		{#if tags?.length}
			<ul class="tags">
				{#each tags.slice(0, 2) as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		{/if}
	</div>
</Card>

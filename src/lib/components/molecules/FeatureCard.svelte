<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Image from '../atoms/Image.svelte';

	export let name: string;
	export let description: string;
	export let image: string;
	export let tags: string[] | undefined;
</script>

<Card additionalClass="feature-card">
	<div class="image" slot="image">
		<Image src={image} alt="Picture describing the {name} feature" />
	</div>
	<div class="content" slot="content">
		<div class="title">
			<span>{name}</span>
		</div>
		<p>{description}</p>
	</div>
	<div class="footer" slot="footer">
		{#if tags && tags.length > 0}
			<ul>
				{#each tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		{/if}
	</div>
</Card>

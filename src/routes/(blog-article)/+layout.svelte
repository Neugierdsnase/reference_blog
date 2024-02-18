<script lang="ts">
	import { keywords, siteBaseUrl, title } from '$lib/data/meta';
	import type { BlogPost } from '$lib/utils/types';
	import Image from '$lib/components/atoms/Image.svelte';

	export let data: { post: BlogPost };
	$: ({ post } = data);

	let metaKeywords = keywords;

	$: {
		if (post?.tags?.length) {
			metaKeywords = post.tags.concat(metaKeywords);
		}
		if (post?.keywords?.length) {
			metaKeywords = post.keywords.concat(metaKeywords);
		}
	}
</script>

<svelte:head>
	{#if post}
		<meta name="keywords" content={metaKeywords.join(', ')} />

		<meta name="description" content={post.excerpt} />
		<meta property="og:description" content={post.excerpt} />
		<meta name="twitter:description" content={post.excerpt} />
		<link rel="canonical" href="{siteBaseUrl}/{post.slug}" />

		<title>{post.title} - {title}</title>
		<meta property="og:title" content="{post.title} - {title}" />
		<meta name="twitter:title" content="{post.title} - {title}" />

		{#if post.coverImage}
			<meta property="og:image" content="{siteBaseUrl}{post.coverImage}" />
			<meta name="twitter:image" content="{siteBaseUrl}{post.coverImage}" />
		{/if}
	{/if}
</svelte:head>

	<main>
		<article>
				{#if post}
					<h1>{post.title}</h1>
					<!-- <div class="note">Published on {dateformat(post.date, 'UTC:dd mmmm yyyy')}</div> -->
					<!-- {#if post.updated} -->
					<!-- 	<div class="note">Updated on {dateformat(post.updated, 'UTC:dd mmmm yyyy')}</div> -->
					<!-- {/if} -->
					{#if post.readingTime}
						<div class="note">{post.readingTime}</div>
					{/if}
					<!-- {#if post.tags?.length} -->
					<!-- 	<div class="tags"> -->
					<!-- 		{#each post.tags as tag} -->
					<!-- 			<Tag>{tag}</Tag> -->
					<!-- 		{/each} -->
					<!-- 	</div> -->
					<!-- {/if} -->
				{/if}
			{#if post && post.coverImage}
				<div>
					<Image src={post.coverImage} alt={post.title} />
				</div>
			{/if}
			<div>
				<slot />
			</div>
		</article>
	</main>

		<!-- {#if post.relatedPosts && post.relatedPosts.length > 0} -->
		<!-- 	<div class="container"> -->
		<!-- 		<RelatedPosts posts={post.relatedPosts} /> -->
		<!-- 	</div> -->
		<!-- {/if} -->

	<!-- <Footer /> -->

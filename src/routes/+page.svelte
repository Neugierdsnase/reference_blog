<script lang="ts">
  import type { BlogPost } from '$lib/utils/types';

	export let data: {
		posts: BlogPost[];
	};

	let { posts } = data;
</script>

<h1>Konstantin Kovar</h1>
<p class="subtitle">Web Developer</p>

<hr />

<div>
  <h2>About</h2>
  <p></p>

  <h2>Blog</h2>
  <ul class="list-none">
			{#each posts as {title, readingTime, slug}}
		<li>
				<a class="w-full" href={`blog/${slug}`}>
			{title}
		{#if readingTime}
			<span class="text-base">{readingTime}</span>
		{/if}
					</a>
		</li>
			{/each}
</ul>

  <h2>Projects</h2>
  <ul>
    <li><a href="https://prompt-dress.com">Prompt Dress Browser Extension</a></li>
    <li><a href="https://marketplace.visualstudio.com/items?itemName=KonstantinKovar.classnames-rainbow">ClassNames Rainbow VSCode Extension</a></li>
  </ul>
</div>


<script>
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
</script>

<Header showBackground />

<main>
	<div class="error-page">
		<div class="container">
			<h1>Oh no!</h1>
			<p>It seems like coffee was spilled all over this page, and now it can't be displayed.</p>
			<br />
			<a href="/">Start over</a>
		</div>
	</div>
</main>

<Footer />

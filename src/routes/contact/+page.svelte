<script>
	import Page from '$lib/Page.svelte';
	import Loader from '../../components/Loader.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Contact from '../../modules/Contact.svelte';
	let menuOpen = false;

	// LoadScreen
	let isLoading = true;
	setTimeout(() => {
		isLoading = false;
	}, 2000);
</script>

{#if isLoading}
	<!-- <LoadScreen /> -->
	<Loader />
{:else}
	<div>
		<Navbar
			{menuOpen}
			on:toggleMenu={() => (menuOpen = !menuOpen)}
		/>
		<Contact />
	</div>
{/if}

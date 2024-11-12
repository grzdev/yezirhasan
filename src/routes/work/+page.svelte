<script>
	import Page from '$lib/Page.svelte';
	import Loader from '../../components/Loader.svelte';
	import LoadScreen from '../../components/LoadScreen.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import Work from '../../modules/Work.svelte';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	let menuOpen = false;

	// LoadScreen
	let isLoading = true;
	setTimeout(() => {
		isLoading = false;
	}, 2000);

	$: isLoading =
		!$page.url.searchParams.has('skipLoader');
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
		<Work />
	</div>
{/if}

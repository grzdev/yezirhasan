<script lang="ts">
	import Page from '$lib/Page.svelte';
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';

	import '../app.css';
	import LoadScreen from '../components/LoadScreen.svelte';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Home from '../modules/Home.svelte';
	import Loader from '../components/Loader.svelte';
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
		<Home />
		<!-- <Footer /> -->
	</div>
{/if}

<style>
</style>

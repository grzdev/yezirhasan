<script>
	import { beforeNavigate, goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import '../app.css';

	let navigating = false;
	let onOutroendCb = () => {};

	beforeNavigate((navigation) => {
		// Check if the navigation is a page refresh (external navigation)
		if (!navigation.from || !navigating) {
			// This is a page reload, so we skip the interception and allow normal reload
			return;
		}

		navigating = true;
		navigation.cancel();

		// Handle the outro transition and complete navigation
		onOutroendCb = async () => {
			const route = navigation.to?.route?.id || '/';
			await goto(route);
			navigating = false;
		};
	});

	let inDuration = 1000;
	let outDuration = 500;
</script>

<main>
	{#if !navigating}
		<div
			class="transition-wrapper"
			in:fade={{ duration: inDuration }}
			out:fade={{ duration: outDuration }}
			on:outroend={onOutroendCb}
		>
			<slot />
		</div>
	{/if}
</main>

<style>
	.transition-wrapper {
		grid-row: 1;
		grid-column: 1;
	}
</style>

<script lang="ts">
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';
	import Icon from '@iconify/svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import Logo from '../image/logo6.png';
	import LogoDark2 from '../image/logo7.png';
	import { page } from '$app/stores';

	//  navbar function
	export let menuOpen: boolean;
	const dispatch = createEventDispatcher();
	let isMobileView = false;

	// Check for mobile view
	const checkViewport = () => {
		isMobileView = window.innerWidth <= 768;
	};

	onMount(() => {
		checkViewport();
		window.addEventListener('resize', checkViewport);
	});

	// Toggle menu function
	function toggleMenu() {
		menuOpen = !menuOpen;
		dispatch('toggleMenu');
	}

	function handleKeyDown(event: { key: string }) {
		if (event.key === 'Escape') {
			toggleMenu();
		}
	}

	// Current path logic using $page store
	$: currentPath = $page.url.pathname.endsWith('/')
		? $page.url.pathname.slice(0, -1) // Remove trailing slash
		: $page.url.pathname;
</script>

<nav class="flex flex-row py-[3vw] px-[2vw] md:py-[1vw] md:px-[1.5vw] items-center justify-between">
	<h1 class="text-[4vw] font-medium mt-[0] logo">
		<a href="/">
			<img
				src={Logo}
				alt=""
				class="w-[21vw] md:w-[5vw] hover:brightness-50 dark:hidden transition duration-500 ease-in-out"
			/>
			<img
				src={LogoDark2}
				alt=""
				class="w-[21vw] md:w-[5vw] hidden dark:block hover:brightness-200 transition duration-500 ease-in-out"
			/>
		</a>
	</h1>

	{#if isMobileView && !menuOpen}
		<div class="md:hidden mt-[3vw]">
			<button on:click={toggleMenu}>
				<Icon
					icon="line-md:close-to-menu-alt-transition"
					class="dark:text-[#8a8b8a] text-[#5e5e5e] cursor-pointer text-[8vw] md:text-[4vw]"
				/>
			</button>
		</div>
	{:else}
		<div class="md:hidden mt-[3vw]">
			<button on:click={toggleMenu}>
				<Icon
					icon="line-md:menu-to-close-alt-transition"
					class="dark:text-[#8a8b8a] text-[#5e5e5e] cursor-pointer text-[8vw] md:text-[4vw]"
				/>
			</button>
		</div>
	{/if}

	<div class="flex flex-row items-center gap-[3vw] hidden md:flex mt-[-1vw]">
		<div class="flex flex-row gap-[3vw] text-[1.2vw] font-semibold ml-[5vw]">
			<a href="/work" class={currentPath === '/work' ? 'active' : ''}>
				<h1
					class="text-[#5e5e5e] dark:text-[#aeafae] hover:text-black dark:hover:text-white transition duration-500 ease-in-out page1"
				>
					Work
				</h1>
			</a>

			<a href="/about" class={currentPath === '/about' ? 'active' : ''}>
				<h1
					class="text-[#5e5e5e] dark:text-[#aeafae] hover:text-black dark:hover:text-white transition duration-500 ease-in-out page2"
				>
					About
				</h1>
			</a>

			<h1
				class="text-[#5e5e5e] cursor-pointer dark:text-[#aeafae] hover:text-black dark:hover:text-white transition duration-500 ease-in-out page3"
			>
				Resume
			</h1>

			<a href="/more" class={currentPath === '/more' ? 'active' : ''}>
				<h1
					class="text-[#5e5e5e] dark:text-[#aeafae] hover:text-black dark:hover:text-white transition duration-500 ease-in-out page4"
				>
					More
				</h1>
			</a>
		</div>

		<div class="flex flex-row items-center gap-[4vw]">
			<a href="/contact">
				<button
					class="w-[10vw] h-[3vw] bg-[#019334] dark:bg-[white] text-[#ededed] dark:text-[black] hover:text-[white] dark:hover:text-[black] hover:bg-[#3bbb67] dark:hover:bg-[#83ff87] transition duration-500 ease-in-out flex justify-center items-center rounded-xl"
				>
					<h1 class="font-semibold text-[1.3vw]">Get in touch</h1>
				</button>
			</a>
		</div>
	</div>
</nav>

{#if isMobileView && menuOpen}
	<div class="fixed inset-0 z-50">
		<div
			class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
			on:click={toggleMenu}
			on:keydown={handleKeyDown}
			tabindex="-1"
			role="button"
			aria-label="Close"
		></div>
		<div
			class="w-full h-full md:w-64 bg-[#dfdfdf] dark:bg-[black] mt-[1rem]"
			in:fade={{ duration: 500 }}
			out:fade={{ duration: 700 }}
		>
			<div class="block md:hidden">
				<div class="flex flex-col gap-[2rem] items-center justify-center">
					<a
						href="/"
						class={currentPath === '/'
							? 'active text-[#6a6868] dark:text-[#989898] hover:text-black dark:hover:text-white transition duration-500 ease-in-out mt-[3rem] text-xl sm:text-3xl font-semibold'
							: 'text-[#6a6868] dark:text-[#989898] hover:text-black dark:hover:text-white transition duration-500 ease-in-out mt-[3rem] text-xl sm:text-3xl font-semibold'}
						in:fly={{ y: 200, duration: 500 }}
						out:fly={{ y: 200, duration: 2500 }}
					>
						Home
					</a>
					<a
						href="/work/"
						class={currentPath === '/work'
							? 'active text-[#6a6868] dark:text-[#989898] hover:text-blue dark:hover:text-white transition duration-500 ease-in-out text-xl sm:text-3xl font-semibold'
							: 'text-[#6a6868] dark:text-[#989898] hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-xl sm:text-3xl font-semibold'}
						in:fly={{ y: 200, duration: 700 }}
						out:fly={{ y: 200, duration: 2000 }}
					>
						Work
					</a>
					<a
						href="/about/"
						class={currentPath === '/about'
							? 'active text-[#6a6868] dark:text-[#989898] hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-xl sm:text-3xl font-semibold'
							: 'text-[#6a6868] dark:text-[#989898] hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-xl sm:text-3xl font-semibold'}
						in:fly={{ y: 200, duration: 1000 }}
						out:fly={{ y: 200, duration: 1500 }}
					>
						About
					</a>
					<div
						class="text-[#6a6868] dark:text-[#989898] hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-xl sm:text-3xl font-semibold"
						in:fly={{ y: 200, duration: 1300 }}
						out:fly={{ y: 200, duration: 1000 }}
					>
						Resume
					</div>
					<a
						href="/more/"
						class={currentPath === '/more'
							? 'active text-[#6a6868] dark:text-[#989898] hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-xl sm:text-3xl font-semibold'
							: 'text-[#6a6868] dark:text-[#989898] hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-xl sm:text-3xl font-semibold'}
						in:fly={{ y: 200, duration: 1600 }}
						out:fly={{ y: 200, duration: 1000 }}
					>
						More
					</a>
					<a
						href="/contact/"
						class="w-[10rem] h-[3rem] bg-[#7c7b7b] dark:bg-[#f4f4f4] text-[#ededed] dark:text-[black] hover:text-[white] dark:hover:text-[black] hover:bg-[#3bbb67] dark:hover:bg-[#83ff87] transition duration-500 ease-in-out flex justify-center items-center rounded-2xl"
						in:fly={{ y: 200, duration: 1900 }}
						out:fly={{ y: 200, duration: 300 }}
					>
						<h1 class="font-semibold text-xl">Get in touch</h1>
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	nav a.active {
		border-bottom: 3px solid #3bc26a;
		color: #3bc26a;
	}
	nav a.active,
	.block a.active {
		border-bottom: 3px solid #3bc26a; /* Green bottom border */
		color: #3bc26a !important; /* Make the text green */
	}

	@keyframes slideFromTop {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes moveFromBottomRight2 {
		0% {
			transform: translate(10%, 10%);
			opacity: 0;
		}
		100% {
			transform: translate(0, 0);
			opacity: 1;
		}
	}
	.logo {
		animation: moveFromBottomRight2 1s ease-in-out;
	}
	.page1 {
		animation: slideFromTop 0.5s ease-in-out;
		transform: translateY(100);
	}
	.page2 {
		animation: slideFromTop 0.7s ease-in-out;
		transform: translateY(100);
	}
	.page3 {
		animation: slideFromTop 0.8s ease-in-out;
		transform: translateY(100);
	}
	.page4 {
		animation: slideFromTop 0.9s ease-in-out;
		transform: translateY(100);
	}
</style>

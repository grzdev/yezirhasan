<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import bg from '../image/npbackground.jpeg';
	import WorkCard from '../components/WorkCard.svelte';
	import newsImage from '../image/news-image.jpeg';
	import featuredWork from '../components/featuredWork.json';
	import type { Work } from '../components/workInterface';
	import Icon from '@iconify/svelte';
	import npbackground from '../image/npbackground.jpeg';

	export let work: Work[] = featuredWork.work;

	// State for filtering
	let selectedCategory: string | null = null;
	let showCategories = false;

	// Reading time filter
	let minReadTime = 4;
	let maxReadTime = 10;
	let selectedReadTime = 4; // Default slider value

	// Get unique categories, including "All Categories"
	let categories = [
		'All',
		...Array.from(
			new Set(work.map((item) => item.category))
		)
	];

	// Toggle category visibility
	function toggleCategories() {
		showCategories = !showCategories;
	}

	// Set the category filter
	function filterByCategory(category: string) {
		selectedCategory =
			category === 'All' ? null : category; // Clear filter if "All Categories" is selected
	}

	// Filter articles based on selected category and reading time
	function applyFilters() {
		filteredWork = work.filter((item) => {
			const isInCategory = selectedCategory
				? item.category === selectedCategory
				: true;
			const isInReadingTime =
				parseInt(item.minread) >=
					parseInt(minReadTime.toString()) &&
				parseInt(item.minread) <=
					parseInt(selectedReadTime.toString());
			return isInCategory && isInReadingTime;
		});
	}

	// Filter articles based on selected category
	$: filteredWork = selectedCategory
		? work.filter(
				(item) =>
					item.category === selectedCategory
			)
		: work;
</script>

<!-- Work page content -->
<div
	class="flex justify-center items-center px-[2vw] md:px-[1vw]"
>
	<div
		class="flex flex-col overflow-x-hidden w-full"
	>
		<!-- Featured Work Header -->
		<div
			class="flex items-center w-full px-[2vw] md:px-[0.7vw] justify-between"
		>
			<h2
				class="move-from-buttom cursor-pointer hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-[7vw] md:text-[4.4vw] font-bold text-[#6a6868] dark:text-[#aeafae] mt-[1.2vw] ml-[1vw] md:mt-[0.7vw]"
			>
				Featured Articles
			</h2>

			<!-- Filter Button -->
			<button
				class="p-2 bg-[#6a6868] dark:bg-white w-[7vw] h-[7vw] md:w-[3vw] md:h-[2.5vw] hover:bg-[#3bbb67] dark:hover:bg-[#d7d7d7] md:dark:hover:bg-[#83ff87] hover:text-[white] dark:hover:text-[black] hover:bg-[#3bbb67] dark:hover:bg-[#83ff87] transition duration-500 ease-in-out flex justify-center items-center rounded-md"
				on:click={toggleCategories}
				aria-label="Filter work"
			>
				<h1
					class="text-[white] dark:text-[black] text-[4vw] md:text-[1.6vw]"
				>
					<Icon icon="octicon:filter-16" />
				</h1>
			</button>
		</div>

		<!-- Category and Reading Time Filter Menu -->
		{#if showCategories}
			<div
				class="categories ml-[-1.8vw] md:ml-[0vw] flex items-start gap-[0.5rem] md:gap-[0] md:items-center flex-col md:flex-row justify-between mb-[3vw] md:mb-[0] p-[2vw] px-[1.25rem] md:py-[0.1vw] md:px-[2vw] items-start"
				transition:slide
			>
				<div class="flex gap-2 items-center">
					{#each categories as category}
						<button
							on:click={() =>
								filterByCategory(category)}
							class="p-[0.4rem] md:p-2 text-[2.5vw] md:text-[1.1vw] font-semibold transition duration-500 ease-in-out rounded-md transition-all
                {category === selectedCategory
								? 'bg-[#3bbb67] dark:bg-[#83ff87] text-[white] dark:text-[black]'
								: 'bg-[#6a6868] dark:bg-white text-[white] dark:text-[black] hover:bg-[#3bbb67] dark:hover:bg-[#83ff87] hover:text-[white] dark:hover:text-[black]'}"
							aria-label={category}
						>
							{category}
						</button>
					{/each}
				</div>

				<!-- Reading Time Slider -->
				<div
					class="flex flex-row gap-4 items-center mr-[-1.3vw] items-start"
				>
					<div class="flex gap-4 items-center">
						<span
							class="text-[3vw] cursor-pointer md:text-[1.3vw] hover:text-black dark:hover:text-white text-[#6a6868] dark:text-white font-semibold transition duration-500 ease-in-out"
						>
							{selectedReadTime} mins read
						</span>
						<input
							type="range"
							min={minReadTime}
							max={maxReadTime}
							bind:value={selectedReadTime}
							class="slider"
						/>
					</div>

					<button
						class="mt-2 p-[0.4rem] md:p-2 text-[2.5vw] md:text-[1.1vw] bg-[#7c7b7b] dark:bg-white hover:text-[white] dark:hover:text-[black] hover:bg-[#3bbb67] dark:hover:bg-[#83ff87] transition duration-500 ease-in-out text-[white] dark:text-[black] font-semibold rounded-md"
						on:click={applyFilters}
					>
						Apply
					</button>
				</div>
			</div>
		{/if}

		<!-- Work Cards -->
		<div
			class="w-full mt-[2vw] md:mt-[0vw] px-[0.2rem] md:px-[1.3vw] ml-[0.5rem]"
		>
			<div
				class="move-from-buttom flex flex-row gap-[3vw] md:gap-[2vw] overflow-x-auto overflow-y-hidden custom-scrollbar move-container"
			>
				<WorkCard
					work={filteredWork}
					data={filteredWork}
				/>
			</div>
		</div>

		<a href="/articles/">
			<div
				class="w-[55vw] md:w-[33vw] px-[0.6rem] md:px-[2.1vw] mt-[2vw] mb-[0vw] md:mb-[1vw] md:mt-[2.4vw] flex items-center justify-between move-from-buttom2 hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-[7vw] md:text-[4vw] font-bold text-[#6a6868] dark:text-[#aeafae] flex text=start cursor-pointer"
			>
				<h2 class=" ">All articles</h2>
				<h1 class="text-[5vw] md:text-[3vw]">
					<Icon
						icon="heroicons:arrow-long-right"
					/>
				</h1>
			</div>
		</a>
	</div>
</div>

<style>
	.move-container {
		animation: move 2.5s ease-in-out infinite;
	}

	@keyframes move {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-9px);
		}
	}
	.move-from-buttom {
		animation: moveFromBottomRight 1s ease-in-out;
	}

	@keyframes moveFromBottomRight {
		0% {
			transform: translate(10%, 40%);
			opacity: 0;
		}
		100% {
			transform: translate(0, 0);
			opacity: 1;
		}
	}

	.move-from-buttom2 {
		animation: moveFromBottomRight2 2s ease-in-out;
	}

	@keyframes moveFromBottomRight2 {
		0% {
			transform: translate(10%, 100%);
			opacity: 0;
		}
		100% {
			transform: translate(0, 0);
			opacity: 1;
		}
	}

	.custom-scrollbar::-webkit-scrollbar {
		margin-top: 1rem;
		width: 2px;
		height: 0rem;
		background-color: black;
	}

	/* Style the scrollbar thumb */
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 1px;
	}

	/* Style the scrollbar thumb when hovered */
	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background-color: #555;
	}

	.slider {
		-webkit-appearance: none;
		appearance: none;
		width: 150px;
		height: 5px;
		background: #8a8a8a;
		outline: none;
		opacity: 0.8;
		transition: opacity 0.2s;
	}

	.slider:hover {
		opacity: 1;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		background: #4caf50;
		cursor: pointer;
		border-radius: 50%;
	}

	.slider::-moz-range-thumb {
		width: 15px;
		height: 15px;
		background: #4caf50;
		cursor: pointer;
		border-radius: 50%;
	}
</style>

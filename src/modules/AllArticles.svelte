<script lang="ts">
  import Icon from "@iconify/svelte";
  import WorkCard from "../components/WorkCard.svelte";
  import allArticles from "../components/allArticles.json";
  import type { Work } from "../components/workInterface";
  import { slide } from "svelte/transition";

  let work: Work[] = allArticles.work;
  
  // State for filtering
  let selectedCategory: string | null = null;
  let showCategories = false;

  // Reading time filter
  let minReadTime = 3;
  let maxReadTime = 10;
  let selectedReadTime = 3; // Default slider value

  // Get unique categories, including "All Categories"
  let categories = ["All", ...Array.from(new Set(work.map(item => item.category)))];

  // Toggle category visibility
  function toggleCategories() {
    showCategories = !showCategories;
  }

  // Set the category filter
  function filterByCategory(category: string) {
    selectedCategory = category === "All" ? null : category; // Clear filter if "All Categories" is selected
  }

  // Filter articles based on selected category and reading time
  function applyFilters() {
    filteredWork = work.filter(item => {
      const isInCategory = selectedCategory ? item.category === selectedCategory : true;
      const isInReadingTime = parseInt(item.minread) >= parseInt(minReadTime.toString()) && parseInt(item.minread) <= parseInt(selectedReadTime.toString());
      return isInCategory && isInReadingTime;
    });
  }

  // Filter articles based on selected category
  $: filteredWork = selectedCategory 
    ? work.filter(item => item.category === selectedCategory) 
    : work;
</script>

<!-- Page Layout -->
<div class="px-[3vw] py-[2vw] overflow-x-hidden">
  <!-- Header with back arrow -->
  <div class="flex flex-row w-full justify-between items-center">
    <button 
      class="flex flex-row justify-between items-center hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-[#6a6868] dark:text-[#989898]" 
      on:click={() => window.history.back()}
    >
      <h1 class="text-[6vw] md:text-[3vw]">
        <Icon icon="heroicons:arrow-long-left-solid" />
      </h1>
      <h1 class="text-[5vw] ml-[1vw] w-full md:text-[2vw] font-semibold ">
        All Articles
      </h1>
    </button>

    <button
      class="p-2 bg-[#6a6868] dark:bg-[#d7d7d7] w-[7vw] h-[7vw] md:w-[3vw] md:h-[2.5vw] hover:bg-black dark:hover:bg-[#83ff87] hover:text-[white] dark:hover:text-[black] hover:bg-[#3bbb67] dark:hover:bg-[#83ff87] transition duration-500 ease-in-out flex justify-center items-center rounded-md"
      on:click={toggleCategories}
      aria-label="Filter work"
    >
      <h1 class="text-[white] dark:text-[black] text-[4vw] md:text-[1.6vw]">
        <Icon icon="octicon:filter-16" />
      </h1>
    </button>
  </div>

  <!-- Category and Reading Time Filter Menu -->
  {#if showCategories}
    <div class="categories ml-[6vw] md:ml-[3vw] flex items-start gap-[0.5rem] md:gap-[0] md:items-center flex-col md:flex-row justify-between mt-2 mb-[3vw] md:mb-[0] px-[1vw] items-start" transition:slide>
      <div class="flex gap-2 items-center">
        {#each categories as category}
          <button
            on:click={() => filterByCategory(category)}
            class="p-[0.4rem] md:p-2 text-[2.5vw] md:text-[1.1vw] font-semibold transition duration-500 ease-in-out rounded-md transition-all 
              {category === selectedCategory ? 'bg-[#3bbb67] dark:bg-[#83ff87] text-[white] dark:text-[black]' : 'bg-[#6a6868] dark:bg-[#d7d7d7] text-[white] dark:text-[black] hover:bg-black dark:hover:bg-[#83ff87] hover:text-[white] dark:hover:text-[black]'}"
            aria-label={category}
          >
            {category}
          </button>
        {/each}
      </div>

      <!-- Reading Time Slider -->
      <div class="flex flex-row gap-4 items-center  mr-[-1vw] items-start">
        <div class="flex gap-4 items-center">
          <span class="text-[3vw] md:text-[1.3vw] hover:text-black dark:hover:text-white text-[#6a6868] dark:text-[#989898] font-semibold transition duration-500 ease-in-out">
            {selectedReadTime} mins read
          </span> 
          <input type="range" min={minReadTime} max={maxReadTime} bind:value={selectedReadTime} class="slider" />
        </div>

        <!-- Apply Button -->
        <button
          class="mt-2 p-[0.4rem] md:p-2 text-[2.5vw] md:text-[1.1vw] bg-[#6a6868] dark:bg-[#d7d7d7] hover:text-[white] dark:hover:text-[black] hover:bg-[#3bbb67] dark:hover:bg-[#83ff87] transition duration-500 ease-in-out text-[white] dark:text-[black] font-semibold rounded-md"
          on:click={applyFilters}
        >
          Apply
        </button>
      </div>
    </div>
  {/if}

  <!-- Articles grid with 4 columns -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-[4vw] md:gap-[2vw] mt-[4vw] md:mt-[1vw] fade-in-bottom ml-[15vw] md:ml-[4vw]">
    <WorkCard work={filteredWork} />
  </div>
</div>

<style>
  @keyframes fadeInBottom {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .fade-in-bottom {
      animation: fadeInBottom 1s ease-out;
    }
</style>

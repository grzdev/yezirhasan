<script lang="ts">
  import bg from "../image/npbackground4.jpeg";
  import type { Work } from "../components/workInterface";
  export let work: Work[] = [];

  let flippedCardId: string | null = null;

  function toggleFlip(id: string) {
    flippedCardId = flippedCardId === id ? null : id;
  }
</script>

{#each work as work (work.id)}
  <div  
    class="flip-container mt-[1.5vw] move-from-buttom" 
    role="button" 
    tabindex="0"
    aria-label="Flip card"
    on:click={() => toggleFlip(work.id.toString())} 
    on:keydown={(e) => { if (e.key === 'Enter') toggleFlip(work.id.toString()); }}
  >
    <div 
      class="flip-card" 
      class:flipped={flippedCardId === work.id.toString()} 
      role="button" tabindex="0" 
      aria-label="Flip card"
    >
      <!-- Updated Front Side -->
      <div
        class="flip-front px-[2vw] py-[2vw] md:px-[1vw] md:py-[1.2vw] hover:bg-[#e8e8e8] dark:hover:bg-white transition duration-500 ease-in-out bg-[#F4F4F4] dark:bg-[#e9e9e9] cursor-pointer rounded-md"
      >
        <!-- Top Divider -->
        <div class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>

        <div class="flex flex-row items-center w-full justify-between">
          <div class="w-[5vw] md:w-[2vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
          <h1 class="text-[4vw] md:text-[1.9vw] font-bold text-[black] flex flex-start italic">
            Sports Insight
          </h1>
          <div class="w-[5vw] md:w-[2vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
        </div>
        
        <div class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>

        <h1 class="text-[black] h-[10vw] md:h-[3vw] mt-[1vw] md:mt-[0.5vw] text-start text-[3.5vw] md:text-[1.3vw] leading-4 md:leading-6 font-[600]">
          {work.topic}
        </h1>

        <div class="flex flex-row justify-between mt-[0.9vw] w-full">
          <img
            src={work.img}
            alt='img'
            class="w-[35vw] md:w-[14vw] rounded-md"
          />
          <div class="flex justify-between items-center flex-col py-[2vw] md:py-[0.5vw]">
            <div class="w-[4vw] md:w-[3vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
            <div class="w-[4vw] md:w-[3vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/> 
            <div class="w-[4vw] md:w-[3vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
            <div class="w-[4vw] md:w-[3vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
            <div class="w-[4vw] md:w-[3vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
            <div class="block md:hidden w-[4vw] md:w-[3vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
          </div>
        </div>

        <div class="mt-[2vw] md:mt-[1.2vw] flex flex-col gap-[2vw] md:gap-[0.8vw]">
          <div class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
          <div class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
        </div>

        <div class="flex items-start justify-between mt-[1.5vw] md:mt-[0.5vw] items-center">
          <h1 class="text-[2.6vw] md:text-[1.2vw] text-black font-bold">
            {work.category}
          </h1>
          <div class="w-[28vw] md:w-[10vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
        </div>

        <div class="mt-[1vw] md:mt-[0.4vw] flex flex-col gap-[2vw] md:gap-[0.8vw]">
          <div class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
          <div class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.4vw]"/>
        </div>
      </div>
    
      <!-- Back Side -->
      <div 
        class="flip-back text-black justify-center items-center flex flex-col gap-[3vw] md:gap-[3vw] px-[2vw] md:px-[1vw] rounded-md"
        style="background-image: url({bg}); background-size: cover; background-position: center;"
      >
        <div class="flex flex-row justify-between items-center w-full px-[2vw] md:px-[1vw]">
          <h1 class="text-[3.2vw] md:text-[1.1vw] font-semibold">{work.datePosted}</h1>
          <h1 class="text-[3.2vw] md:text-[1.1vw] font-semibold">{work.minread} read</h1>
        </div>
        <p class="w-[37vw] md:w-[16vw] text-start text-[3.2vw] md:text-[1.2vw] font-semibold">
          {work.desc}
        </p>
        <a href={work.link} target="_blank">
          <h1 class="text-[3.2vw] md:text-[1.1vw] font-semibold decoration-solid">
           Continue reading →
          </h1>
        </a>
      </div>
    </div>
  </div>
{/each}

<style>
  .move-from-buttom {
    animation: moveFromBottomRight4 1s ease-in-out;
  }

  .flip-card {
    position: relative;
    width: 20vw;
    height: 25.5vw;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    .flip-card {
      width: 45vw;
      height: 58vw;
    }
  }

  .flip-card.flipped {
    transform: rotateY(180deg);
  }

  .flip-front, .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-front {
    transform: rotateY(0deg); /* Ensure the front is in normal orientation */
  }

  .flip-back {
    transform: rotateY(180deg); /* Keep back side exactly aligned */
  }

</style>

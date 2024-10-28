<script lang="ts">
  import bg from "../image/npbackground4.jpeg";
  import type { Work } from "../components/workInterface";
  export let work: Work[] = [];
  import newImg from "../image/news-image.jpeg"

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
      <div
        class="flip-front px-[2vw] py-[3vw] md:px-[1vw] md:py-[1.2vw] hover:bg-[#ffffff] dark:hover:bg-white transition duration-500 ease-in-out bg-[#f9f9f9] dark:bg-[#e9e9e9] cursor-pointer rounded-md"
        style="border-top-left-radius: 0; border-top-right-radius: 1rem; border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;"
      >
        <div class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"/>

        <div class="flex flex-row items-center w-full justify-between">
          <div class="w-[10vw] md:w-[3.5vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"/>
          <h1 class="text-[5vw] md:text-[1.9vw] font-bold text-[black] flex flex-start noticia-text-regular-italic">
            Sport Mania
          </h1>
          <div class="w-[10vw] md:w-[3.5vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"/>
        </div>
        
        <div class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"/>

        <div class="flex flex-row gap-[1.5vw] md:gap-[0.7vw] mt-[2.5vw] md:mt-[1.5vw]">
          <img
            src={work.img}
            alt='img'
            class="w-[32vw] md:w-[12vw] rounded-md"
          />

          <div class="mt-[-1vw] flex flex-col gap-[2vw] md:gap-[2vw]">
            <h1 class="text-wrap font-bold tracking-wide h-[4vw] text-[black] mt-[1vw] md:mt-[0.5vw] text-start text-[3vw] md:text-[1.2vw] leading-5 md:leading-6 lg:md:leading-6">
              {work.topic}
            </h1>

            <div class="hidden md:flex justify-between items-center flex-col gap-[1.1vw]">
              <div class="w-[4vw] md:w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"/>
              <div class="w-[4vw] md:w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"/> 
              <div class="w-[4vw] md:w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"/>
            </div>
          </div>
        </div>

        <div class="flex flex-row mt-[3vw] md:mt-[0.8vw] items-center justify-between">
          <div class="w-[40vw] md:w-[15vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"/>

            <h1 
            class="text-[2.6vw] w-[16vw] md:w-[7vw] text-white h-[4vw] md:h-[2vw] rounded-md flex justify-center items-center md:text-[1.1vw] font-bold"
            style="background-color: {work.category === 'Football' ? '#019334' : work.category === 'NFL' ? '#019374' : work.category === 'NBA' ? '#017593' : '#000'};"
            >
            {work.category}
            </h1>
        </div>
      </div>
    
      <div 
        class="flip-back text-black justify-center items-center flex flex-col gap-[3vw] md:gap-[2.2vw] px-[2vw] md:px-[1vw] rounded-md"
        style="background-image: url({bg}); background-size: cover; background-position: center;"
      >
        <div class="flex flex-row justify-between items-center w-full px-[2vw] md:px-[1vw]">
          <h1 class="text-[3.2vw] md:text-[1.3vw] font-semibold noticia-text-regular">{work.datePosted}</h1>
          <h1 class="text-[3.2vw] md:text-[1.3vw] font-semibold noticia-text-regular">{work.minread} read</h1>
        </div>
        <p class="noticia-text-regular w-[37vw] md:w-[16vw] text-start text-[3.2vw] md:text-[1.5vw] font-semibold">
          <!-- {work.desc} -->
        </p>
        <a href={`/article/${work.id}`}>
          <h1 class="noticia-text-regular-italic text-[3.2vw] md:text-[1.3vw] font-semibold decoration-solid">
           Continue reading →
          </h1>
        </a>
        
      </div>
    </div>
  </div>
{/each}

  
<style>
 .noticia-text-regular {
  font-family: "Noticia Text", serif;
  font-weight: 900;
  font-style: normal;
}
.noticia-text-regular-italic {
  font-family: "Noticia Text", serif;
  font-weight: 600;
  font-style: italic;
}


  .move-from-buttom {
    animation: moveFromBottomRight4 1s ease-in-out;
  }

  .flip-card {
    position: relative;
    width: 26vw;
    height: 18vw;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    .flip-card {
      width: 65vw;
      height: 42vw;
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

</style>

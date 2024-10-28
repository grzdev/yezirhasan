<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Yezir from "../image/yezir.png";
  import newspaper from "../image/np3.png"

  let headersVisible = [false, false, false];
  let cardVisible = false;
  let cardVisible2 = false;

  onMount(() => {
    headersVisible = [true, false, false];
    setTimeout(() => (headersVisible[1] = true), 400);
    setTimeout(() => (headersVisible[2] = true), 800);
    setTimeout(() => (cardVisible = true), 1200);
    setTimeout(() => (cardVisible2 = true), 1600); // 1 second after the last header
  });
</script>

<div class="flex flex-col career-section justify-center  p-[2vw] px-[6vw] md:px-[1.7vw] mt-[5vw] md:mt-[0] ">
  <!-- Career headers -->
  <div class="flex career-div flex-col items-start space-y-[8vw] md:space-y-[2vw]">
    {#if headersVisible[0]}
      <h1
        class="text-[15vw] leading-[15vw] md:leading-none text-start md:text-[5vw] lg:text-[8.5vw] font-bold dark:text-[#aeafae] text-[#5e5e5e] hover:text-[#3e3e3e] dark:hover:text-[#d0d0d0] cursor-pointer transition ease-in duration-300 relative"
        in:fade={{ duration: 1500 }}
        style="transform: scaleY(1.1);"
      >
        Sports Journalist.
      </h1>
    {/if}
    {#if headersVisible[1]}
      <h1
      class="text-[15vw] leading-[15vw] md:leading-none text-start md:text-[4vw] lg:text-[6.8vw] font-bold dark:text-[#6d6e6d] text-[#7c7c7c] hover:text-[#5d5d5d] dark:hover:text-[#a0a0a0] cursor-pointer transition ease-in duration-300"
      in:fade={{ duration: 1500 }}
      style="transform: scaleY(1.1); "
      >
      Backend Developer.
      </h1>
    {/if}
    {#if headersVisible[2]}
      <h1
      class="text-[15vw] leading-[15vw] md:leading-none text-start md:text-[4vw] lg:text-[7vw] font-bold dark:text-[#484948] text-[#a3a3a3] hover:text-[#7c7c7c] dark:hover:text-[#7d7d7d] cursor-pointer transition ease-in duration-300"
      in:fade={{ duration: 1500 }}
      style="transform: scaleY(1.1); "
      >
      Creative Manager.
      </h1>
    {/if}
  </div>

  <!-- Links to other pages  -->
  <div class="flex links-to-pages flex-col md:flex-row gap-[4vw] md:gap-[1.4vw] mt-[6vh] md:mt-[9vh]">
    {#if cardVisible}
      <a href="/about/">
        <div class="move-from-bottom w-[86vw] h-[32vh] md:w-[47vw] md:h-[42vh] cursor-pointer px-[5vw] md:px-[2vw] bg-[#a8a8a8] dark:bg-[#1A1A1C] rounded-2xl flex relative group transition-colors duration-1000 ease-in-out hover:bg-[#44e94b] dark:hover:bg-[#43bb47] overflow-hidden">
          <div class="flex flex-col">
            <h1 class="text-[6vw] md:text-[3.1vw] text-[black] dark:text-[#f4f4f4] font-semibold mt-[6vh] md:mt-[8vh] transition-opacity duration-1000 group-hover:opacity-0">
              Hey, I'm Yezir 👋🏼
            </h1>
            <img
              src={Yezir}
              alt="portrait"
              class="transition-transform duration-1000 mt-[0.4vh] md:mt-[1.4vh] group-hover:translate-x-[27vw] group-hover:translate-y-[-10vh] md:group-hover:translate-x-[20vw] md:group-hover:translate-y-[-17vh] group-hover:duration-[1000ms]"
              style="max-height: 100%; max-width: 100%; object-fit: contain;"
            >
          </div>
          <h1 class="text-[8vw] md:text-[3vw] mt-[20vh] ml-[14vw] transition-all duration-1000 group-hover:translate-x-[10vw] group-hover:opacity-0">
            <Icon icon="heroicons:arrow-long-right" />
          </h1>
          <h1 class="text-[7vw] md:text-[3vw] text-start font-semibold w-[15vw] absolute top-[7vh] left-[calc(100% + 2.4vw)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 delay-200">
            Learn More About Me
          </h1>
        </div>
      </a>  

      <a href="/work/">
        <div class="move-from-bottom w-[86vw] h-[32vh] md:w-[47vw] md:h-[42vh] cursor-pointer px-[5vw] md:px-[2vw] bg-[#a8a8a8] dark:bg-[#3b3b40] rounded-2xl flex flex-col relative group transition-colors duration-1000 ease-in-out hover:bg-[#44e94b] dark:hover:bg-[#43bb47] overflow-hidden">
          <div class="flex items-start flex-col gap-[0.2vw]">
            <h1 class="text-[3vw] md:text-[1vw] mt-[4vh] font-semibold transition-transform duration-1000 group-hover:translate-y-[1vw]">
              FEATURED WORK
            </h1>
            <div class="flex flex-row items-center justify-between w-full">
              <h1 class="text-[6.6vw] md:text-[2.6vw] font-semibold transition-all duration-1000 group-hover:translate-x-[10vw] group-hover:translate-y-[0.5vw] group-hover:opacity-0">
                Sport Articles
              </h1>
              <h1 class="text-[6.6vw] md:text-[2.6vw] font-semibold absolute left-[-8vw] opacity-0 transition-all duration-1000 group-hover:translate-x-[10vw] group-hover:translate-y-[1vw] group-hover:opacity-100">
                View My Sport Articles
              </h1>
              <h1 class="text-[8vw] md:text-[3vw] transition-transform duration-1000 group-hover:translate-y-[1vw]">
                <Icon icon="heroicons:arrow-long-right" />
              </h1>
            </div>
          </div>
          <img
            src={newspaper}
            alt="bookshelf"
            style="max-height: 100%; max-width: 100%; object-fit: contain;"
            class="mt-[-1vh] md:mt-[-7vh] w-[60vw] ml-[10vw] md:w-[30vw] md:ml-[4vw] transition-transform duration-1000 group-hover:translate-y-[3vh]"
          />
        </div>
      </a>
    {/if}
  </div> 

  <div class="flex flex-col footer other-links md:flex-row gap-[4vw] md:gap-[1.4vw] mt-[2.8vh]">
    {#if cardVisible}
      <div class="flex flex-col md:flex-row gap-[1.4vw]">
        <a href="https://github.com/yeziR4">
          <div class="move-from-bottom px-[6vw] md:px-[2vw] flex-col w-[86vw] h-[32vh] md:w-[22.8vw] md:h-[47vh] cursor-pointer bg-[#a8a8a8] dark:bg-[#1A1A1C] rounded-2xl flex relative group transition-colors duration-1000 ease-in-out hover:bg-[#44e94b] dark:hover:bg-[#43bb47] overflow-hidden ">
            <h1 class="text-[11.5vw] md:text-[4.5vw] mt-[6vh] md:mt-[12.5vh]  ml-[-1vw] md:ml-[-0.4vw] transition-all duration-1000 group-hover:opacity-0 group-hover:translate-y-[2vh]">
              <Icon icon="mingcute:github-fill" />
            </h1>
            <h1 class="text-[7.7vw] md:text-[2.7vw] mt-[5.3vh] md:mt-[12.8vh] font-semibold text-start w-[10vw] absolute top-[1.5vh] left-[6vw] md:left-[2vw] opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              View
            </h1>
            <div class="flex flex-row justify-between w-full items-center">
              <h1 class="text-[7.7vw] md:text-[2.7vw] mt-[1vh] font-semibold text-start w-[10vw]">
                My Github
              </h1>
              <h1 class="text-[8vw] md:text-[3vw] transition-transform duration-1000 group-hover:translate-y-[3vh]">
                <Icon icon="heroicons:arrow-long-right" />
              </h1>
            </div>
          </div>
        </a>
        <!-- <a href="/about/"></a> -->
        <div class="hidden md:block move-from-bottom p-[2vw] w-[22.8vw] h-[47vh] items-center justify-center cursor-pointer bg-[#a8a8a8] dark:bg-[#1A1A1C] rounded-2xl flex relative group transition-colors duration-1000 ease-in-out hover:bg-[#44e94b] dark:hover:bg-[#43bb47] overflow-hidden">
          <div class="flex flex-col mt-[11vh] items-center justify-center transition-all duration-1000 group-hover:translate-y-[-2vh] group-hover:duration-1000 group-hover:ease-in-out">
            <h1 class="text-[16vw] md:text-[6vw]">
              <Icon icon="ri:medium-fill" />
            </h1>
            <h1 class="text-[1.5vw] text-start font-semibold w-[12vw] opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100 ">
              View My Medium
            </h1>
            <h1 class="text-[2.3vw] ml-[10vw] transition-transform duration-1000 group-hover:translate-x-[1rem] group-hover:translate-y-[2rem]">
              <Icon icon="fluent:arrow-up-right-24-filled" />
            </h1>
          </div>
        </div>
      </div>

      <div class="move-from-bottom w-[86vw] h-[45vh] md:w-[47vw] md:h-[47vh] flex flex-col items-start gap-[0.5vw] py-[4vh] md:py-[2vh] px-[6vw] md:px-[2vw] bg-[#a8a8a8] dark:bg-[#1A1A1C] rounded-2xl relative group transition-colors duration-1000 ease-in-out hover:bg-[#44e94b] dark:hover:bg-[#43bb47] overflow-hidden">
        <h1 class="text-[4vw] md:text-[1.2vw] mt-[2vw] font-semibold transition-opacity duration-1000 group-hover:opacity-0">
          WHAT I DO
        </h1>
        <div class="flex flex-col items-start md:flex-row mt-[7vw] md:mt-[1vw] gap-[5vw] md:gap-[0] w-full justify-between">
          <div class="flex flex-row-reverse md:flex-col justify-center items-center md:items-center gap-[4vw] md:gap-[2vw] transition-transform duration-1000 group-hover:-translate-y-[8vh]">
            <h1 class="text-[5.5vw] md:text-[1.5vw] font-semibold">
              Sports Research 
            </h1>
            <h1 class="text-[11vw] md:text-[5vw]">
              <Icon icon="fluent-mdl2:more-sports" />
            </h1>
          </div>
          <div class="flex flex-row-reverse md:flex-col justify-center items-center md:items-center gap-[4vw] md:gap-[2vw] transition-transform duration-1000 group-hover:-translate-y-[8vh]">
            <h1 class="text-[5.5vw] md:text-[1.5vw] font-semibold">
              Server-Side Logic
            </h1>
            <h1 class="text-[11vw] md:text-[5vw]">
              <Icon icon="carbon:ibm-dynamic-route-server" />
            </h1>
          </div>
          <div class="flex flex-row-reverse md:flex-col justify-center items-center md:items-center gap-[4vw] md:gap-[2vw] transition-transform duration-1000 group-hover:-translate-y-[8vh]">
            <h1 class="text-[5.5vw] md:text-[1.5vw] font-semibold">
              Prototyping
            </h1>
            <h1 class="text-[11vw] md:text-[5vw]">
              <Icon icon="fluent-mdl2:build-issue" />
            </h1>
          </div>
          <h1 class="text-[7vw] md:text-[2vw] font-semibold mt-[-3vh] md:mt-[23vh] ml-[65vw] md:ml-[0] transition-transform duration-1000 group-hover:translate-y-4">
            <Icon icon="hugeicons:arrow-diagonal" />
          </h1>
        </div>
        <h1 class="text-[5vw] md:text-[3vw] font-semibold opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:-translate-y-[2vh] md:group-hover:-translate-y-[7vh]">
          See my skills
        </h1>
      </div>
      
    {/if}
  </div> 

  <!-- Other links -->
  <div
    class="move-from-buttom2 mt-[14vw] md:mt-[5vw] mb-[1vw] flex justify-center items-center flex-row gap-[3vw] "
  >
    <h1 class="text-[11vw] md:text-[3vw] hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-[#6a6868] dark:text-[#989898]">
      <Icon icon="fluent:mail-add-20-filled" />
    </h1>
    <h1 class="text-[11vw] md:text-[3vw] hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-[#6a6868] dark:text-[#989898]">
      <Icon icon="devicon-plain:linkedin" />
    </h1>
  </div>
</div>


<style>
  :global(body) {
    font-family: Helvetica, Arial, sans-serif;
  }

  .move-from-bottom {
    animation: moveFromBottomRight4 1s ease-in-out;
  }

  @keyframes moveFromBottomRight4 {
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
    animation: moveFromBottomRight2 4s ease-in-out;
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
</style>

<script>
  import Icon from "@iconify/svelte";
  import "../app.css";
  import data from "../components/featuredWork.json"
  import newsimage from "../image/news-image.jpeg"
</script>


<div class="flex py-[2vw] h-full bg-white px-[3vw] flex-col overflow-x-hidden">
  <div class="w-full h-[18.5vw] flex">
    <div class="flex-1 bg-red-600 flex justify-center items-center py-[1vw] px-[1vw] rounded-tl-[1vw]">
      <h1 
        class="anton-regular tracking-lighter mt-[-3vw] text-white text-[14vw]" 
        style="transform: scaleY(1.2); "
      >
        sport
      </h1>
    </div>
    <div class="flex-1 bg-black flex justify-center items-center py-[1vw] px-[1vw] rounded-tr-[1vw]">
      <h1 
        class="anton-regular tracking-lighter mt-[-3vw] text-white text-[14vw]" 
        style="transform: scaleY(1.2);"
      >
        mania
      </h1>
    </div>
  </div>

  <div class="w-full mt-[1.5vw] md:mt-[0.4vw] flex flex-col gap-[1.2vw] md:gap-[0.6vw]">
    <div class="w-full flex flex-row justify-between items-center">
      <h1 class="text-[3vw] md:text-[1.3vw] font-bold">
        Jan 20th, 2024
      </h1>
      <h1 class="text-[3vw] md:text-[1.3vw] font-bold">
        ₦199.99
      </h1>
      <h1 class="text-[3vw] md:text-[1.3vw] font-bold">
        6 min read
      </h1>
    </div>

    <div class="w-full bg-[#ababab] h-[0.6vw] md:h-[0.2vw]"/>
  </div>

  <div class="w-full flex flex-col mt-[2.5vw] md:mt-[1.2vw] gap-[1vw]">
    <div class="w-full h-[4.5vw] md:h-[3vw] flex">
      <div class="flex-[1.09] bg-yellow-300 flex"/>
      <div class="flex-[1.1] items-center bg-black flex px-[1.5vw]" >
        <h1
          class="flex anton-regular tracking-lighter text-white text-[3vw] md:text-[2vw] ml-auto"
          style="transform: scaleY(1.2);"
        >
          Football
        </h1>
      </div>
    </div>
  </div>

  <h1 
    class="anton-regular2 mt-[3vw] md:mt-[1vw] text-[7vw] leading-[7vw] flex text-start tracking-lighter"
    style="word-spacing: 0.5vw;"
  >
   Jude Bellingham: Real Madrid's New Zidane?
  </h1>

  <div class="flex flex-col md:flex-row mt-[3vw]">
    <img
      src={newsimage}
      alt="news-pic"
      class="w-full md:w-[50vw] rounded-xl"
    />
    <div class="flex flex-col w-full mt-[7vw] md:mt-[0vw] gap-[7vw] md:gap-[2vw] px-[0vw] md:px-[2vw]">
      <div class="w-full h-[full] md:h-[19vw] text-[4vw] md:text-[1.6vw] font-semibold text-start tracking-wide md:tracking-light leading-[5vw] md:leading-[2.1vw]">
        Watching the young, wiry figure of Jude Bellingham glide across the pitch with the same effortless 
        grace and poise once witnessed in the great Zinedine Zidane, a wave of nostalgia washes over me. 
        The long-sleeved shirt, the Adidas predator boots, and the jersey number 5 are not mere accessories but 
        symbols of a bygone era, a time when football was played with an artistry that seems almost lost in today's 
        high-octane, physically demanding game.
      </div>
      <div class="w-full h-[full] md:h-[19vw] text-[4vw] md:text-[1.6vw] font-semibold text-start leading-[2.1vw] tracking-wide md:tracking-light leading-[5vw] md:leading-[2.1vw]">
        Zidane's balletic movements, his ability to control the ball with the subtlest of touches, and his 
        uncanny knack for finding his teammates with inch-perfect passes that sliced through the tightest of
         defenses made him one of the best midfielders the game has ever seen. In Bellingham, you see that same 
         elegance, that same mastery of the ball, and the same ability to dictate the tempo of the game and score 
         clutch goals.
      </div>
    </div>
  </div>

  <div class="flex flex-col md:flex-row w-full gap-[7vw] md:gap-[2vw] mt-[8vw] md:mt-[7vw] mb-[5vw]">
    <div class="w-full h-[full] md:h-[21vw] text-[4vw] md:text-[1.6vw] font-semibold text-start tracking-wide md:tracking-light leading-[5.5vw] md:leading-[2.1vw]">
      As Bellingham strides into the box, his Predator boots glistening under the floodlights, I am reminded of 
      Zidane's ghosting runs into the penalty area, his ability to appear out of nowhere and unleash a powerful, 
      unstoppable shot. In that moment, I see not just a young player with immense potential, but a potential heir to Zidane's throne, a player who could restore the artistry that has been missing from the game for so long.

      Of course, it is still too early to say whether Bellingham will go on to achieve the same level of success as Zidane. However, the early signs are certainly promising.    </div>
    <div class="w-full h-[full] md:h-[21vw] text-[4vw] md:text-[1.6vw] font-semibold text-start tracking-wide md:tracking-light leading-[5.5vw] md:leading-[2.1vw]">
      Bellingham has already shown that he has the talent, the mentality, and the temperament to be a world-class 
      player. If he can continue to develop at his current rate, then there is no doubt that he has the potential to 
      become one of the greats of the game.

      I can only imagine what Zidane would think of Bellingham. I believe that the Frenchman would see in the young 
      Englishman a reflection of his brilliance, a player who could carry on the legacy of the number 5 shirt, a player 
      who could once again bring a touch of magic to the beautiful game.
    </div>
  </div>

  <div class="mt-[3vw] flex flex-col gap-[3vw]">
    <div class="w-full bg-[#ababab] h-[0.6vw] md:h-[0.2vw]"/>

    <div class="w-full bg-black h-[4.4vw] rounded-bl-[1vw] rounded-br-[1vw] overflow-hidden flex items-center">
      <div class="marquee-wrapper">
        <h1 class="text-[3vw] text-white anton-regular tracking-lighter marquee-content">
          check back every thursday for new articles
        </h1>
        <h1 class="text-[3vw] text-white anton-regular tracking-lighter marquee-content">
          check back every thursday for new articles
        </h1>
        <h1 class="text-[3vw] text-white anton-regular tracking-lighter marquee-content">
          check back every thursday for new articles
        </h1>
      </div>
    </div>
  </div>
</div>

<style>
  .anton-regular {
  font-family: "Anton", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.anton-regular2 {
  font-family: "Anton", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.marquee-wrapper {
    display: flex;
    white-space: nowrap;
    animation: marquee 12s linear infinite;
  }

  .marquee-content {
    padding-right: 5vw; /* Adjust the gap between the texts */
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%); /* Start from the right end */
    }
    100% {
      transform: translateX(-100%); /* Slide the entire width of the text */
    }
  }
</style>

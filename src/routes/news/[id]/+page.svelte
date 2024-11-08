<script>
    export let data;
    const { item } = data;
</script>
  
  
<div class="flex py-[2vw] h-full bg-white px-[3vw] flex-col overflow-x-hidden">
    <div class="w-full h-[18.5vw] flex">
      <div class="flex-1 bg-red-600 flex justify-center items-center py-[1vw] px-[1vw] rounded-tl-[3vw] md:rounded-tl-[1vw]">
        <h1 
          class="anton-regular font-bold tracking-lighter mt-[-1vw] md:mt-[-3vw] text-white text-[14vw]" 
          style="transform: scaleY(1.2); "
        >
          sport
        </h1>
      </div>
      <div class="flex-1 bg-black flex justify-center items-center py-[1vw] px-[1vw] rounded-tr-[3vw] md:rounded-tr-[1vw]">
        <h1 
          class="anton-regular font-bold tracking-lighter mt-[-1vw] md:mt-[-3vw] text-white text-[14vw]" 
          style="transform: scaleY(1.2);"
        >
          mania
        </h1>
      </div>
    </div>
  
    <div class="w-full mt-[1.5vw] md:mt-[0.4vw] flex flex-col gap-[1.2vw] md:gap-[0.6vw]">
      <div class="w-full flex flex-row justify-between items-center">
        <h1 class="text-[3vw] text-black md:text-[1.3vw] font-bold">
          {item.datePosted}
        </h1>
        <h1 class="text-[3vw] text-black md:text-[1.3vw] font-bold">
          ₦199.99
        </h1>
        <h1 class="text-[3vw] text-black md:text-[1.3vw] font-bold">
          {item.minread} read
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
            {item.category}
          </h1>
        </div>
      </div>
    </div>
  
    <h1 
      class="anton-regular2 text-black font-bold mt-[3vw] md:mt-[1vw] text-[7vw] leading-[9vw] md:leading-[7vw] flex text-start tracking-lighter"
      style="word-spacing: 0.5vw;"
    >
     {item.topic}
    </h1>
  
    <div class="flex flex-col md:flex-row mt-[3vw]">
      <img
        src={item.img}
        alt="news-pic"
        class="w-full md:w-[50vw] rounded-xl"
      />
      <div class="flex flex-col text-black w-full mt-[7vw] md:mt-[0vw] gap-[7vw] md:gap-[2vw] px-[0vw] md:px-[2vw]">
        <div class="w-full h-[full] md:h-[19vw] text-[4vw] md:text-[1.6vw] font-semibold text-start tracking-wide md:tracking-light leading-[5.5vw] md:leading-[2.2vw]">
         {item.desc1}
        </div>
        <div class="w-full text-black h-[full] md:h-[19vw] text-[4vw] md:text-[1.6vw] font-semibold text-start leading-[2.1vw] tracking-wide md:tracking-light leading-[5.5vw] md:leading-[2.2vw]">
         {item.desc2}
        </div>
      </div>
    </div>
  
    <div class="flex flex-col md:flex-row w-full gap-[7vw] md:gap-[2vw] mt-[8vw] md:mt-[7vw] mb-[5vw]">
      <div class="w-full h-[full] text-black md:h-[21vw] text-[4vw] md:text-[1.6vw] font-semibold text-start tracking-wide md:tracking-light leading-[5.5vw] md:leading-[2.2vw]">
       {item.desc3}   
      </div>
      <div class="w-full h-[full] text-black md:h-[21vw] text-[4vw] md:text-[1.6vw] font-semibold text-start tracking-wide md:tracking-light leading-[5.5vw] md:leading-[2.2vw]">
        {item.desc4}
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
    font-weight: 900;
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
  
<script lang="ts">
	import Yezir from '../image/yezir.png';
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';
	import bg from '../image/moreBg.png';
	import cardBg from '../image/cardbg3.jpeg';
	import SounwaveVideo from '../image/sounwave2.webm';
	import Flowfi from '../image/flowfi.webm';
	import FlipCard from '../components/FlipCard.svelte';
</script>

<div
	class="flex flex-col justify-center items-center"
>
	<!-- Profile Section -->
	<div
		class="flex flex-col sm:flex-col md:flex-row justify-center items-center mt-[2rem] sm:mt-[3rem] md:mt-[2rem] gap-[-1rem] md:gap-[4rem]"
	>
		<img
			src={Yezir}
			alt=""
			class="w-[20rem] sm:w-[26rem] md:w-[25rem]"
		/>
		<h1
			class="text-center hover:text-[black] dark:hover:text-[white] transition duration-500 ease-in-out cursor-pointer sm:text-start md:text-start text-3xl sm:text-2xl md:text-5xl text-[#6a6868] dark:text-[#989898] font-semibold"
		>
			Yezir Hasan 👋🏽
		</h1>
	</div>

	<!-- Marquee Section -->
	<div
		class="w-full h-[5.3rem] mt-[5rem] bg-[#cecece] dark:bg-[#1d1d1e] md:mt-[5rem] md:h-[6rem] overflow-hidden flex items-center"
	>
		<div class="marquee-wrapper">
			<h1
				class="text-[4.3rem] md:text-[5rem] font-bold text-[#6a6868] dark:text-black tracking-tighter marquee-content"
			>
				SPORTS JOURNALIST
			</h1>
			<h1
				class="text-[4.3rem] md:text-[5rem] font-bold text-[#6a6868] dark:text-black tracking-tighter marquee-content"
			>
				BACKEND DEVELOPER
			</h1>
			<h1
				class="text-[4.3rem] md:text-[5rem] font-bold text-[#6a6868] dark:text-black tracking-tighter marquee-content"
			>
				CREATIVE MANAGER
			</h1>
		</div>
	</div>

	<!-- Prototypes Section -->
	<div
		class="h-[80rem] md:h-[90rem] w-full bg-[#cecece] dark:bg-[#1d1d1e] flex flex-col items-center p-[2rem]"
	>
		<h2
			class="cursor-pointer text-[white] dark:text-white text-[2.5rem] md:text-[4.4vw] font-bold mt-[3rem] md:mt-[5rem]"
		>
			My Prototypes
		</h2>

		<div
			class="flex flex-col gap-[4rem] md:gap-[6rem] mt-[1rem] md:mt-[1rem]"
		>
			<!-- Flip Cards -->
			<FlipCard
				{cardBg}
				videoSrc={SounwaveVideo}
				title="sounwave."
				description="a site for music lovers and nerds that want to know and learn about what they listen to."
				about="a page that helps you check how well you
				listen to music. <br/><br/> shows you songs you can’t
				do without, producers and writers of your
				fav song and artists that rock your world. <br/><br/>
				all that data plus more to make you appreciate
				the music enthusiast in you."
			/>

			<FlipCard
				{cardBg}
				videoSrc={Flowfi}
				title="flowfi."
				description="your personal finance assitant that helps you keep track of your transactions."
				about="flowfi makes tracking your spending effortless. <br/><br/> upload your bank statements, 
				chat with floe, our ai chatbot, to find transactions instantly, and get insights on categories 
				like food and data etc.. <br/><br/> stay in control of your cash flow."
			/>
		</div>
	</div>

	<!-- Theme Switch -->
	<div class="mt-[5rem]">
		<ThemeSwitch />
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.text-fade {
		/* display: inline-block; */
		animation: fadeIn 1.5s ease-in-out;
	}
	@keyframes fadeInUp {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.text-animation {
		/* display: inline-block; */
		animation: fadeInUp 0.7s ease-in-out;
	}
	.text-animation2 {
		/* display: inline-block; */
		animation: fadeInUp 1s ease-in-out;
	}
	.text-animation3 {
		/* display: inline-block; */
		animation: fadeInUp 1.3s ease-in-out;
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
			transform: translateX(
				100%
			); /* Start from the right end */
		}
		100% {
			transform: translateX(
				-100%
			); /* Slide the entire width of the text */
		}
	}
</style>

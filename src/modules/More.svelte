<script lang="ts">
	import Yezir from '../image/yezir.png';
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';
	import bg from '../image/moreBg.png';
	import cardBg from '../image/cardbg3.jpeg';
	import SounwaveVideo from '../image/sounwave3.gif';
	import Flowfi from '../image/flowfi3.gif';
	import FlipCard from '../components/FlipCard.svelte';
	import Building from '../image/building.gif';
	import Icon from '@iconify/svelte';
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
			style="font-family: 'Boldonse', system-ui; font-weight: 400; font-style: normal;"
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
				class="text-[4.3rem] md:text-[6rem] font-bold text-[#6a6868] dark:text-black tracking-tighter marquee-content"
			>
				JOURNALIST •
			</h1>
			<h1
				class="text-[4.3rem] md:text-[6rem] font-bold text-[#6a6868] dark:text-black tracking-tighter marquee-content"
			>
				CREATIVE MANAGER •
			</h1>
			<h1
				class="text-[4.3rem] md:text-[6rem] font-bold text-[#6a6868] dark:text-black tracking-tighter marquee-content"
			>
				VIBE CODER
			</h1>
		</div>
	</div>

	<!-- Prototypes Section -->
	<div
		class="h-[94rem] md:h-[105rem] w-full bg-[#cecece] dark:bg-[#1d1d1e] flex flex-col items-center p-[2rem]"
	>
		<a href="/work/">
			<h2
				class="cursor-pointer text-[#6a6868] dark:text-[#989898] hover:text-[black] dark:hover:text-[white] transition duration-500 ease-in-out text-[2.5rem] md:text-[5.3rem] font-bold mt-[5rem] md:mt-[5rem] flex items-center gap-4 md:gap-[5rem]"
				style="font-family: 'Boldonse', system-ui; font-weight: 400; font-style: normal;"
			>
				View my articles :) <Icon
					icon="fluent:arrow-up-right-12-filled"
					class="text-[5rem] md:text-[7.8rem]"
				/>
			</h2>
		</a>

		<h2
			class="cursor-pointer text-[#6a6868] dark:text-[#989898] hover:text-[black] dark:hover:text-[white] transition duration-500 ease-in-out text-[2.5rem] md:text-[3.6rem] font-bold mt-[5rem] md:mt-[8rem]"
			style="font-family: 'Boldonse', system-ui; font-weight: 400; font-style: normal;"
		>
			vibe code projects
		</h2>

		<div
			class="flex flex-col gap-[5rem] md:gap-[6rem] mt-[2rem] md:mt-[2rem]"
		>
			<!-- Flip Cards -->
			<FlipCard
				{cardBg}
				videoSrc={SounwaveVideo}
				title="sounwave."
				description="a site for music lovers and nerds that want to know and learn about what they listen to,"
				about="a page that helps you check how well you
				listen to music. <br/><br/> shows you songs you can’t
				do without, producers and writers of your
				fav song and artists that rock your world. <br/><br/>
				all that data plus more to make you appreciate
				the music enthusiast in you."
				link1="https://sounwave.netlify.app/"
				link2="https://github.com/grzdev/sounwave-web"
			/>

			<FlipCard
				{cardBg}
				videoSrc={Flowfi}
				title="flowfi."
				description="your personal finance assistant that helps you keep track of your transactions,"
				about="flowfi makes tracking your spending effortless. <br/><br/> upload your bank statements, 
    chat with floe, our ai chatbot, to find transactions instantly, and get insights on categories 
    like food and data etc.. <br/><br/> stay in control of your cash flow."
				link1=""
				link2=""
				disableLinks={true}
			/>
		</div>
	</div>

	<!-- Theme Switch -->
	<div class="mt-[5rem] mb-[1rem]">
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
		animation: marquee 13s linear infinite;
	}

	.marquee-content {
		padding-right: 5vw; /* Adjust the gap between the texts */
	}

	@media (max-width: 640px) {
		.marquee-content {
			padding-right: 3rem; /* Adjust the gap for mobile screens */
		}
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

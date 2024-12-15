<script>
	import { fade } from 'svelte/transition';
	import Yezir from '../image/yezir.png';
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';
</script>

<div
	class="flex flex-col justify-center items-center"
>
	<div
		class="flex flex-col sm:flex-col md:flex-row justify-center items-center mt-[2rem] sm:mt-[3rem] md:mt-[2rem] gap-[-1rem] md:gap-[4rem]"
	>
		<img
			src={Yezir}
			alt=""
			class="text-fade mt-[0] sm:mt-[0] md:mt-[] w-[20rem] sm:w-[26rem] md:w-[25rem]"
		/>
		<h1
			class="text-center cursor-pointer sm:text-start md:text-start text-fade text-3xl sm:text-2xl md:text-5xl hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-[#6a6868] dark:text-[#989898] font-semibold"
		>
			Yezir Hasan 👋🏽
		</h1>
	</div>

	<div
		class="w-full h-[3rem] mt-[3rem] md:mt-[2rem] md:h-[5.5svw] overflow-hidden flex items-center"
		style="background: rgb(56,139,59); background: linear-gradient(90deg, rgba(56,139,59,1) 0%, rgba(67,187,71,1) 70%);"
	>
		<div class="marquee-wrapper">
			<h1
				class="text-[2.7rem] md:text-[4rem] font-bold text-[#ebebeb] dark:text-black tracking-tighter marquee-content"
				style="transform: scaleY(1.3);"
			>
				SPORT JOURNALIST
			</h1>
			<h1
				class="text-[2.7rem] md:text-[4rem] font-bold text-[#ebebeb] dark:text-black tracking-tighter marquee-content"
				style="transform: scaleY(1.3);"
			>
				BACKEND DEVELOPER
			</h1>
			<h1
				class="text-[2.7rem] md:text-[4rem] font-bold text-[#ebebeb] dark:text-black tracking-tighter marquee-content"
				style="transform: scaleY(1.3);"
			>
				CREATIVE MANAGER
			</h1>
		</div>
	</div>

	<ThemeSwitch />
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

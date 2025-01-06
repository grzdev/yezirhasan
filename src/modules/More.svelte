<script>
	import { fade } from 'svelte/transition';
	import Yezir from '../image/yezir.png';
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';
	import bg from '../image/moreBg.png';
	import cardBg from '../image/cardbg3.jpeg';
	import SounwaveVideo from '../image/sounwave2.mp4';
	import Icon from '@iconify/svelte';

	let flipped = false;

	function toggleFlip() {
		flipped = !flipped;
	}
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
		class="w-full h-[5.3rem] mt-[5rem] bg-[#cecece] dark:bg-[#1d1d1e] md:mt-[5rem] md:h-[6rem] overflow-hidden flex items-center"
	>
		<div class="marquee-wrapper">
			<h1
				class="text-[4.3rem] md:text-[5rem] font-bold text-[#6a6868] dark:text-black tracking-tighter marquee-content"
				style="transform: scaleY(1.3);"
			>
				SPORTS JOURNALIST
			</h1>
			<h1
				class="text-[4.3rem] md:text-[5rem] font-bold text-[#6a6868] dark:text-black tracking-tighter marquee-content"
				style="transform: scaleY(1.3);"
			>
				BACKEND DEVELOPER
			</h1>
			<h1
				class="text-[4.3rem] md:text-[5rem] font-bold text-[#6a6868] dark:text-black tracking-tighter marquee-content"
				style="transform: scaleY(1.3);"
			>
				CREATIVE MANAGER
			</h1>
		</div>
	</div>

	<div
		class=" h-[60rem] w-full flex flex-col items-center p-[2rem] mt-[4rem]"
	>
		<h2
			class="move-from-buttom cursor-pointer bg-gradient-to-r from-[#989898] via-[#bbbbbb] to-[#cdcdcd] bg-clip-text text-transparent text-[7vw] md:text-[4.4vw] font-bold mt-[1.2vw] ml-[1vw] md:mt-[0.7vw]"
		>
			My Protoypes
		</h2>

		<div class="flex flex-col">
			<div
				class="flip-container"
				role="button"
				tabindex="0"
				aria-label="Flip card"
				on:click={toggleFlip}
				on:keydown={(e) => {
					if (e.key === 'Enter') toggleFlip();
				}}
			>
				<div class="flip-card" class:flipped>
					<!-- Front Side -->
					<div
						class="flip-front flex flex-col items-center justify-center rounded-[1.5rem]"
						style="background-image: url({cardBg}); background-size: cover; background-position: center;"
					>
						<div class="flex flex-row gap-[2rem]">
							<video
								src={SounwaveVideo}
								loop
								autoplay
								muted
								class="w-[7rem] h-[7rem] rounded-full"
							></video>
							<h1
								class="text-[5rem] mt-[-1rem] font-bold text-white cursor-pointer opacity-70"
							>
								sounwave.
							</h1>
						</div>

						<p
							class="text-[1.4rem] w-[35rem] mt-[2.5rem] text-white font-bold tracking-wide opacity-70"
						>
							a site for music lovers and nerds
							that want to know and learn about
							what they listen to,
							<span
								class="text-white underline opacity-100 cursor-pointer"
								>more...</span
							>
						</p>

						<div
							class="flex flex-row gap-[2rem] mt-[3.5rem]"
						>
							<button class="animated-button">
								<span
									><Icon
										icon="mingcute:eye-line"
										class="text-[2rem]"
									/></span
								>
								<span></span>
							</button>
							<button class="animated-button">
								<span
									><Icon
										icon="bx:git-repo-forked"
										class="text-[2rem]"
									/></span
								>
								<span></span>
							</button>
						</div>
					</div>

					<!-- Back Side -->
					<div
						class="flip-back text-white flex flex-col items-center justify-center rounded-[1.5rem]"
						style="background-image: url({cardBg}); background-size: cover; background-position: center;"
					>
						<p
							class="text-[1.4rem] w-[39rem] mt-[1.5rem] text-center font-bold tracking-wide opacity-80"
						>
							a page that helps you check how well
							you listen to music, shows you songs
							you can’t do without, producers and
							writers of your fav song and artists
							that rock your world.
							<br />
							<br />
							all that data plus more to make you appreciate
							the music enthusiast in you.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="">
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

	/* From Uiverse.io by gharsh11032000 */
	.animated-button {
		position: relative;
		display: inline-block;
		padding: 12px 24px;
		border: none;
		font-size: 16px;
		background-color: inherit;
		border-radius: 100px;
		font-weight: 600;
		color: #ffffff9c;
		box-shadow: 0 0 0 2px #ffffff9c;
		cursor: pointer;
		overflow: hidden;
		transition: all 0.6s
			cubic-bezier(0.23, 1, 0.32, 1);
	}

	.animated-button span:last-child {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20px;
		height: 20px;
		background-color: #24d67d;
		border-radius: 50%;
		opacity: 0;
		transition: all 0.8s
			cubic-bezier(0.23, 1, 0.32, 1);
	}

	.animated-button span:first-child {
		position: relative;
		z-index: 1;
	}

	.animated-button:hover {
		box-shadow: 0 0 0 5px #21f34f60;
		color: #ffffff;
	}

	.animated-button:active {
		scale: 0.95;
	}

	.animated-button:hover span:last-child {
		width: 150px;
		height: 150px;
		opacity: 1;
	}

	.flip-container {
		width: 60rem;
		height: 30rem;
		perspective: 1000px;
		cursor: default;
	}

	.flip-card {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		transition: transform 0.6s;
	}

	.flip-card.flipped {
		transform: rotateY(180deg);
	}

	.flip-front,
	.flip-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		border-radius: 2xl;
		box-shadow:
			rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	}

	.flip-front {
		transform: rotateY(0deg);
	}

	.flip-back {
		transform: rotateY(180deg);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';

	export let cardBg: string;
	export let videoSrc: string;
	export let title: string;
	export let description: string;
	export let about: string;

	let flipped = false;

	function toggleFlip() {
		flipped = !flipped;
	}
</script>

<div
	class="flip-container w-[20rem] h-[27rem] md:w-[60rem] md:h-[30rem]"
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
			<div
				class="flex flex-row gap-[1rem] md:gap-[2rem]"
			>
				<video
					src={videoSrc}
					loop
					autoplay
					muted
					playsinline
					disablePictureInPicture
					preload="auto"
					class="w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] rounded-full"
				></video>
				<h1
					class="text-[2.3rem] md:text-[5rem] mt-[0.6rem] md:mt-[-1rem] font-bold text-white cursor-pointer opacity-70"
				>
					{title}
				</h1>
			</div>

			<p
				class="text-[1.1rem] md:text-[1.4rem] w-[16rem] md:w-[35rem] mt-[2.5rem] text-white font-bold tracking-wide opacity-70"
			>
				{description}
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
							class="text-[1.3rem] md:text-[2rem]"
						/></span
					>
					<span></span>
				</button>
				<button class="animated-button">
					<span
						><Icon
							icon="bx:git-repo-forked"
							class="text-[1.3rem] md:text-[2rem]"
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
				class="text-[1.1rem] md:text-[1.4rem] w-[18rem] md:w-[39rem] mt-[1.5rem] text-center font-bold tracking-wide opacity-80"
			>
				{@html about}
			</p>
		</div>
	</div>
</div>

<style>
	.flip-container {
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

	.animated-button {
		position: relative;
		display: inline-block;
		padding: 8px 16px; /* Adjusted for mobile */
		border: none;
		font-size: 14px; /* Adjusted for mobile */
		background-color: inherit;
		border-radius: 50px; /* Adjusted for mobile */
		font-weight: 600;
		color: #ffffff9c;
		box-shadow: 0 0 0 2px #ffffff9c;
		cursor: pointer;
		overflow: hidden;
		transition: all 0.6s
			cubic-bezier(0.23, 1, 0.32, 1);
	}

	@media (min-width: 768px) {
		.animated-button {
			padding: 12px 24px; /* Original size for desktop */
			font-size: 16px; /* Original size for desktop */
			border-radius: 100px; /* Original size for desktop */
		}
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
</style>

<script>
	import CourtBg from '../image/pitch6.jpeg';
	import bg from '../image/cardbg3.jpeg';
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';
	import Portriat from '../image/yezir-portrait.png';
	import Bubble from '../image/bubble2.png';
	import Icon from '@iconify/svelte';

	let flippedContactCard = false;

	function toggleFlip() {
		flippedContactCard = !flippedContactCard;
	}
</script>

<div
	class="flex items-center justify-center flex-col overflow-x-hidden"
>
	<h2
		class="mt-[6rem] md:mt-[0rem] cursor-pointer text-[#6a6868] dark:text-[#aeafae] hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-[2rem] md:text-[4rem] font-bold"
	>
		Contact Card
	</h2>

	<div
		class="flip-container move-container mt-[2rem] md:mt-[2vw]"
		role="button"
		tabindex="0"
		aria-label="Flip contact card"
		on:click={toggleFlip}
		on:keydown={(e) => {
			if (e.key === 'Enter') toggleFlip();
		}}
	>
		<div
			class="flip-card w-[22em] h-[14rem] md:w-[40rem] md:h-[24rem]"
			class:flipped={flippedContactCard}
		>
			<!-- Front side -->
			<div
				class="flip-front w-[45vw] h-[25vw] flex items-center justify-center px-[1vw] py-[1vw] bg-cover bg-center rounded-2xl transition-opacity duration-500 ease-in-out opacity-100 md:opacity-80 md:hover:opacity-100 bg-[#e9e9e9] dark:bg-black dark:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,_rgba(0,0,0,0.05)_0px_5px_10px]"
				style="background-image: url({CourtBg}); box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;"
			>
				<h1
					class="text-[1.1rem] md:text-[2vw] ml-[2.8vw] text-white font-bold tracking-[1vw]"
				>
					YEZIR HASSAN
				</h1>
			</div>

			<!-- Back side -->
			<div
				class="flip-back w-[45vw] h-[25vw] flex flex-col items-center justify-center bg-cover bg-center rounded-2xl"
				style="background-image: url({bg});"
			>
				<div
					class="flex flex-row gap-[0.5rem] md:gap-[1rem] items-center justify-center"
				>
					<img
						src={Portriat}
						alt="yezir-portrait"
						class="rounded-full w-[5rem] md:w-[9rem]"
					/>
					<div class="relative">
						<img
							src={Bubble}
							alt="yezir-portrait"
							class="w-[14rem] md:w-[22rem]"
							style="transform: rotate(25deg);"
						/>
						<h1
							class="absolute text-[0.8rem] md:text-[1.2rem] top-[21%] left-[34%] md:eft-[35%] w-[11rem] md:w-[14rem] font-semibold text-center text-black text-start"
						>
							get in touch, <br />
							let's make something amazing 💫
						</h1>
					</div>
				</div>

				<div
					class="flex flex-col gap-[0.4rem] mt-[-3rem] md:mt-[-2rem] justify-center items-center"
				>
					<a
						href="mailto:yezirhasan@gmail.com?subject=&body="
						target="_blank"
						rel="noopener noreferrer"
					>
						<button class="">
							<span>
								<Icon icon="bxl:gmail" />
							</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-[7rem] md:mt-[5rem] mb-[2rem]">
		<ThemeSwitch />
	</div>
</div>

<style>
	.flip-container {
		perspective: 1000px;
	}

	.flip-card {
		position: relative;
		transition: transform 0.5s;
		transform-style: preserve-3d;
		cursor: pointer;
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
	}

	.flip-front {
		transform: rotateY(0deg);
	}

	.flip-back {
		transform: rotateY(180deg);
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

	button {
		padding: 0.1em 0.25em;
		width: 7em;
		height: 4.4em;
		background-color: #212121;
		border: 0.08em solid #fff;
		border-radius: 2rem;
		font-size: 13px;
		font-family: monospace;
	}

	button span {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		bottom: 0.4em;
		width: 4.2em;
		height: 2.4em;
		background: rgb(12, 32, 56);
		background: linear-gradient(
			304deg,
			rgba(12, 32, 56, 1) 0%,
			rgb(57, 254, 116) 100%
		);

		border-radius: 1.4rem;
		font-size: 1.5em;
		color: #fff;
		border: 0.08em solid #fff;
		box-shadow: 0 0.4em 0.1em 0.019em #d3d1d1;
	}

	@media (max-width: 768px) {
		button {
			width: 4.9em;
			height: 3.5em;
		}

		button span {
			width: 3.5em;
			height: 2em;
			font-size: 1.2em;
		}
	}

	button span:hover {
		transition: all 0.5s;
		transform: translate(0, 0.4em);
		box-shadow: 0 0 0 0 #d3d1d1;
	}

	button span:not(hover) {
		transition: all 1s;
	}
</style>

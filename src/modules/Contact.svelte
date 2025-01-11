<script>
	import Icon from '@iconify/svelte';
	import Logo from '../image/logo5.png';
	import LogoDark2 from '../image/logo1.png';
	import CourtBg from '../image/pitch6.jpeg';
	import bg from '../image/cardBg3.jpeg';

	let flippedContactCard = false;

	function toggleFlip() {
		flippedContactCard = !flippedContactCard;
	}
</script>

<div
	class="flex items-center justify-center flex-col"
>
	<h2
		class="mt-[1rem] cursor-pointer hover:text-black dark:hover:text-white transition duration-500 ease-in-out text-[7vw] md:text-[2.6rem] font-bold text-[#6a6868] dark:text-[#989898]"
	>
		lets make something amazing...
	</h2>

	<div
		class="flip-container move-container mt-[2vw]"
		role="button"
		tabindex="0"
		aria-label="Flip contact card"
		on:click={toggleFlip}
		on:keydown={(e) => {
			if (e.key === 'Enter') toggleFlip();
		}}
	>
		<div
			class="flip-card"
			class:flipped={flippedContactCard}
		>
			<!-- Front side -->
			<div
				class="flip-front w-[45vw] h-[25vw] flex items-center justify-center px-[1vw] py-[1vw] bg-cover bg-center rounded-2xl transition-opacity duration-500 ease-in-out opacity-80 hover:opacity-100 bg-[#e9e9e9] dark:bg-black dark:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,_rgba(0,0,0,0.05)_0px_5px_10px]"
				style="background-image: url({CourtBg}); box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;"
			>
				<h1
					class="text-[2vw] ml-[2.8vw] text-white font-bold tracking-[1vw]"
				>
					YEZIR HASSAN
				</h1>
			</div>

			<!-- Back side -->
			<div
				class="flip-back w-[45vw] h-[25vw] flex items-center justify-center bg-cover bg-center rounded-2xl px-[1vw] py-[1vw]"
				style="background-image: url({bg});"
			></div>
		</div>
	</div>
</div>

<style>
	.flip-container {
		perspective: 1000px;
	}

	.flip-card {
		position: relative;
		width: 45vw;
		height: 25vw;
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
</style>

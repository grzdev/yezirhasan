<script>
	import { browser } from '$app/environment';

	let darkMode = true;
	let loaderColor = 'rgba(255, 255, 255, 0.5)';

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia(
					'(prefers-color-scheme: dark)'
				).matches)
		) {
			document.documentElement.classList.add(
				'dark'
			);
			darkMode = true;
		} else {
			document.documentElement.classList.remove(
				'dark'
			);
			darkMode = false;
		}
	}

	$: loaderColor = darkMode
		? 'rgba(255, 255, 255, 0.5)'
		: 'rgba(0, 0, 0, 0.5)';
</script>

<div
	class="flex w-full h-screen justify-center items-center fade-in"
>
	<div class="loader">
		<span
			class="bar"
			style="background-color: {loaderColor};"
		></span>
		<span
			class="bar"
			style="background-color: {loaderColor};"
		></span>
		<span
			class="bar"
			style="background-color: {loaderColor};"
		></span>
	</div>
</div>

<style>
	.fade-in {
		animation: fadeIn 1s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.loader {
		display: flex;
		align-items: center;
	}

	.bar {
		display: inline-block;
		width: 6px;
		height: 30px;
		border-radius: 10px;
		animation: scale-up4 1s linear infinite;
	}

	.bar:nth-child(2) {
		height: 45px;
		margin: 0 5px;
		animation-delay: 0.25s;
	}

	.bar:nth-child(3) {
		animation-delay: 0.5s;
	}

	@keyframes scale-up4 {
		20% {
			transform: scaleY(1.5);
		}

		40% {
			transform: scaleY(1);
		}
	}
</style>

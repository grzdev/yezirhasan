<script lang="ts">
	export let articles: any[] = [];
</script>

{#each articles as article (article.id)}
	<div
		class="article-container mt-[1.5vw] move-from-buttom"
		role="button"
		tabindex="0"
		aria-label="Article card"
	>
		<div class="article-card">
			<div
				class="article-front px-[0.5rem] py-[3vw] md:px-[1vw] md:py-[1.2vw] hover:bg-[#ffffff] dark:hover:bg-white transition duration-500 ease-in-out bg-[#f9f9f9] dark:bg-[#e9e9e9] cursor-pointer rounded-md"
				style="border-top-left-radius: 0; border-top-right-radius: 1rem; border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;"
			>
				<div
					class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
				/>

				<div
					class="flex flex-row items-center w-full justify-between"
				>
					<div
						class="w-[15vw] md:w-[3.5vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
					/>
					<h1
						class="text-[5vw] md:text-[1.9vw] font-bold text-[black] flex flex-start noticia-text-regular-italic"
					>
						{article.header}
					</h1>
					<div
						class="w-[15vw] md:w-[3.5vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
					/>
				</div>

				<div
					class="w-full bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
				/>

				<div
					class="flex flex-row gap-[1.5vw] md:gap-[0.7vw] mt-[4vw] md:mt-[1.5vw]"
				>
					<img
						src={article.img}
						alt="img"
						class="w-[32vw] md:w-[12vw] rounded-md"
					/>

					<div
						class="mt-[-1vw] flex flex-col gap-[2vw] md:gap-[2vw]"
					>
						<div
							class="flex justify-between items-center flex-col gap-[1rem] md:gap-[1rem] mt-[2vw]"
						>
							<div
								class="w-[8.4rem] md:w-[9rem] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
							/>
							<div
								class="w-[8.4rem] md:w-[9rem] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
							/>
							<div
								class="w-[8.4rem] md:w-[9rem] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
							/>
                            <div
								class="w-[8.4rem] md:w-[9rem] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
							/>
                            <div
								class="w-[8.4rem] hidden md:flex md:w-[9rem] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
							/>
						</div>

						
					</div>
				</div>

				<div
					class="flex flex-row mt-[4vw] md:mt-[0.8vw] items-center justify-between"
				>
					<div
						class="w-[40vw] md:w-[15vw] bg-[#5e5e5e] h-[0.6vw] md:h-[0.2vw]"
					/>

					<a href={article.link} target="_blank" rel="noopener noreferrer">
						<h1
							class="text-[2.6vw] w-[20vw] md:w-[7vw] text-white h-[1.5rem] md:h-[2.2rem] rounded-md flex justify-center items-center md:text-[1.1rem] font-bold bg-[#019334] hover:bg-[#017525] transition duration-300"
						>
							View
						</h1>
					</a>
				</div>
			</div>
		</div>
	</div>
{/each}

<style>
	.noticia-text-regular-italic {
		font-family: 'Noticia Text', serif;
		font-weight: 600;
		font-style: italic;
	}

	.move-from-buttom {
		animation: moveFromBottomRight4 1s ease-in-out;
	}

	.article-card {
		position: relative;
		width: 26vw;
		height: 18vw;
		cursor: pointer;
	}

	@media (max-width: 640px) {
		.article-card {
			width: 75vw;
			height: 11.5rem;
		}
	}

	.article-front {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	@keyframes moveFromBottomRight4 {
		0% {
			transform: translate(10%, 10%);
			opacity: 0;
		}
		100% {
			transform: translate(0, 0);
			opacity: 1;
		}
	}
</style>
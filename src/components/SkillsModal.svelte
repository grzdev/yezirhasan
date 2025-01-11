<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';

	const dispatch = createEventDispatcher();

	export let isOpen: boolean = false;

	function closeModal() {
		dispatch('close');
	}

	const careers = [
		{
			title: 'Sports Journalist',
			skills: [
				{
					name: 'Sports Research',
					icon: 'fluent-mdl2:more-sports'
				},
				{
					name: 'Feature Writing',
					icon: 'carbon:pen'
				},
				{
					name: 'Interviewing & Reporting',
					icon: 'carbon:microphone'
				}
				// { name: 'Game and Player Analysis', icon: 'carbon:analyze' },
				// { name: 'Content Curation for Sports News', icon: 'carbon:list' },
				// { name: 'Social Media Content Management', icon: 'carbon:social' }
			]
		},
		{
			title: 'Backend Developer',
			skills: [
				// {
				// 	name: 'Server-Side Logic',
				// 	icon: 'carbon:ibm-dynamic-route-server'
				// },
				{
					name: 'Chatbot Integration',
					icon: 'carbon:bot'
				},
				{
					name: 'API Development',
					icon: 'carbon:api'
				},
				// { name: 'Database Management', icon: 'carbon:data-table' },
				// { name: 'Security and Authentication', icon: 'carbon:lock' },
				{
					name: 'Performance Optimization',
					icon: 'eos-icons:performance'
				}
			]
		},
		{
			title: 'Creative Manager',
			skills: [
				{
					name: 'Prototyping',
					icon: 'fluent-mdl2:build-issue'
				},
				{
					name: 'Content Strategy',
					icon: 'carbon:content-view'
				},
				{
					name: 'Project Coordination',
					icon: 'carbon:collaborate'
				}
				// { name: 'Brand Development', icon: 'carbon:design-thinking' }
				// { name: 'UI/UX Design', icon: 'carbon:user-avatar-filled' }
				// { name: 'Multimedia Content Creation', icon: 'carbon:video' }
			]
		}
	];
</script>

{#if isOpen}
	<button
		class="modal-overlay"
		on:click={closeModal}
		on:keydown={(e) =>
			e.key === 'Enter' && closeModal()}
		aria-label="Close modal"
		transition:fade={{ duration: 300 }}
	></button>

	<div
		class="modal-content w-[90vw] border-2 dark:border-[#c2c3c2] px-[1.2rem] py-[2rem] md:px-[1.7rem] md:py-[3rem] h-[136vw] md:w-[45vw] md:h-[37rem] text-black dark:text-[#c2c3c2] bg-[#cdcdcd] dark:bg-black"
		transition:fade={{ duration: 400 }}
	>
		<button
			class="close-button text-black dark:text-white"
			on:click={closeModal}
		>
			<Icon icon="ic:baseline-close" />
		</button>

		<div
			class="flex flex-col gap-[2rem] md:gap-[2rem]"
		>
			{#each careers as career}
				<div
					class="flex items-start flex-col gap-[0.5rem]"
				>
					<h1
						class="text-[1.4rem] md:text-[1.7rem] font-semibold"
					>
						{career.title}
					</h1>
					<div
						class="flex flex-row w-full justify-between items-center"
					>
						{#each career.skills as skill}
							<div
								class="flex flex-col-reverse gap-[0.5rem] md:flex-col-reverse justify-center items-center md:items-center"
							>
								<h1
									class="text-[0.9rem] md:text-[1rem] w-[6rem] md:w-[9rem] leading-[1.2rem] md:leading-[1.2rem] font-semibold"
								>
									{skill.name}
								</h1>
								<h1
									class="text-[9vw] md:text-[2.6rem]"
								>
									<Icon icon={skill.icon} />
								</h1>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(4px);
		z-index: 10;
	}

	.modal-content {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 0.9rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		z-index: 20;
	}

	.close-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: transparent;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}
</style>

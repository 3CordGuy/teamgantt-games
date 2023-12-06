<script lang="ts">
	import SuperGanttRunner from '../components/sgr-cart.svelte';
	import Diver from '../components/diver-cart.svelte';
	import PlayButton from '../components/play-button.svelte';
	import Key from './keyboard.svelte';
	import RightArrow from './right-arrow.svelte';
	import LeftArrow from './left-arrow.svelte';

	type Game = 'gantt-runner' | 'diver';

	export let currentGame = 'gantt-runner';
	export let onGameChange = (fn: any) => {
		fn(currentGame);
	};

	function cycleGames() {
		if (currentGame === 'gantt-runner') {
			currentGame = 'diver';
			onGameChange('diver');
		} else if (currentGame === 'diver') {
			currentGame = 'gantt-runner';
			onGameChange('gantt-runner');
		}
	}
</script>

<div class={`${$$props.class} flex gap-12`}>
	<div class="flex items-center text-white justify-center w-32">
		<button
			on:click={cycleGames}
			class="grow bg-neutral-800 stretch h-full border-0 text-white hover:bg-neutral-800 cursor-pointer flex text-center items-center justify-center"
			><LeftArrow class="h-full text-white" /></button
		>
	</div>
	<div class="h-[326px] flex-col flex items-center">
		<div class="text-accent-purple-200 font-sans uppercase text-4xs mt-12">Select a game</div>
		{#if currentGame === 'gantt-runner'}
			<div class="flex md:w-[500px] gap-12 py-8 items-center">
				<div class="background-opacity-20 flex flex-col grow justify-between self-stretch gap-10">
					<h4 class="tgds-typo-heading-3 uppercase font-serif tgds-color-text-inverse">
						Super Gantt Runner
					</h4>
					<div class="flex flex-col font-serif gap-12 relative">
						<ul class="list-none mx-0 ml-8 px-2 font-sans space-y-8 text-white">
							<li class="font-bold text-semantic-interactive-400">How to Play:</li>
							<li>
								<Key>←</Key>
								<Key>→</Key> Run
							</li>
							<li><Key>X</Key> Jump</li>
							<li><Key>↓</Key> + <Key>X</Key> Super Jump</li>
							<li><Key>Z</Key> Sprint (hold)</li>
							<li class="text-accent-purple-200">
								Reach all the milestones. How fast can you do it?!
							</li>
						</ul>
						<PlayButton href="//runner.teamgantt.games" />
					</div>
				</div>
			</div>
		{:else if currentGame === 'diver'}
			<div class="flex md:w-[500px] gap-12 py-8 items-center">
				<div class="background-opacity-20 flex flex-col grow justify-between self-stretch gap-10">
					<h4 class="tgds-typo-heading-3 uppercase font-serif tgds-color-text-inverse">
						Super Duper Diver
					</h4>
					<div class="flex flex-col font-serif gap-12 relative">
						<ul class="list-none mx-0 ml-8 px-2 font-sans space-y-8 text-white">
							<li class="font-bold text-semantic-interactive-400">How to Play:</li>
							<li>
								<Key>↑</Key>
								<Key>↓</Key>
								<Key>←</Key>
								<Key>→</Key> Pilot sub
							</li>
							<li>
								<Key>X</Key> + <Key>↑</Key>
								<Key>↓</Key>
								<Key>←</Key>
								<Key>→</Key> Change Modes/Drop Diver
							</li>
							<li><Key>Z</Key> Action (Torpedo, Lower Claw)</li>
							<li class="text-accent-purple-200">
								Don't get eaten by sharks! Can you find all the trophies?
							</li>
						</ul>
						<PlayButton href="//diver.teamgantt.games" />
					</div>
				</div>
			</div>
		{/if}
	</div>
	<div class="flex items-center text-white justify-center w-32">
		<button
			on:click={cycleGames}
			class="grow bg-neutral-800 stretch h-full border-0 text-white hover:bg-neutral-800 cursor-pointer flex items-center justify-center"
			><RightArrow class="h-full text-white" /></button
		>
	</div>
</div>

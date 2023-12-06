<script lang="ts">
	import SuperGanttRunner from '../components/sgr-cart.svelte';
	import Diver from '../components/diver-cart.svelte';
	import PlayButton from '../components/play-button.svelte';
	import Key from './keyboard.svelte';
	import RightArrow from './right-arrow.svelte';
	import LeftArrow from './left-arrow.svelte';
	export let currentGame = 'gantt-runner';

	function cycleGames() {
		if (currentGame === 'gantt-runner') {
			currentGame = 'diver';
		} else if (currentGame === 'diver') {
			currentGame = 'gantt-runner';
		}
	}
</script>

<div class={`${$$props.class} flex gap-12`}>
	<div class="flex items-center text-white justify-center w-32">
		<button
			on:click={cycleGames}
			class="grow stretch h-full bg-transparent border-0 text-white hover:bg-neutral-800 cursor-pointer flex items-center justify-center"
			><LeftArrow class="h-full" /></button
		>
	</div>
	<div class="h-[326px] flex items-center">
		{#if currentGame === 'gantt-runner'}
			<div class="flex md:w-[500px] gap-12 py-8 items-center">
				<SuperGanttRunner class="w-[80px] ml-10" />
				<div class="background-opacity-20 flex flex-col grow justify-between self-stretch gap-10">
					<h4 class="tgds-typo-heading-3 uppercase font-serif tgds-color-text-inverse">
						Super Gantt Runner
					</h4>
					<div class="flex flex-col font-serif gap-12">
						<ul class="list-none mx-0 ml-8 px-2 font-sans space-y-8 text-white">
							<li class="font-bold text-semantic-interactive-400">How to Play:</li>
							<li>
								<Key>←</Key>
								<Key>→</Key> Run
							</li>
							<li><Key>X</Key> Jump</li>
							<li><Key>↓</Key> + <Key>X</Key> Super Jump</li>
							<li><Key>Z</Key> Sprint (hold)</li>
							<li>Reach all the milestones, quickly!</li>
						</ul>
						<PlayButton href="//runner.teamgantt.games" />
					</div>
				</div>
			</div>
		{:else if currentGame === 'diver'}
			<div class="flex md:w-[500px] gap-12 py-8 items-center">
				<Diver class="w-[80px] ml-10" />
				<div class="background-opacity-20 flex flex-col grow justify-between self-stretch gap-10">
					<h4 class="tgds-typo-heading-3 uppercase font-serif tgds-color-text-inverse">
						Super Duper Diver
					</h4>
					<div class="flex flex-col font-serif gap-12">
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
							<li>Don't get eaten by sharks!</li>
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
			class="grow stretch h-full bg-transparent border-0 text-white hover:bg-neutral-800 cursor-pointer flex items-center justify-center"
			><RightArrow class="h-full" /></button
		>
	</div>
</div>

<script lang="ts">
	import SuperGanttRunner from '../components/sgr-cart.svelte';
	import Diver from '../components/diver-cart.svelte';
	import PlayButton from '../components/play-button.svelte';
	export let currentGame = 'gantt-runner';
</script>

<div class={$$props.class}>
	{#if currentGame === 'gantt-runner'}
		<div class="flex md:w-[400px] h-128 gap-12 items-center">
			<SuperGanttRunner class="w-[80px] ml-10" />
			<div class="background-opacity-20 flex flex-col gap-10">
				<h4 class="tgds-typo-heading-3 uppercase font-serif tgds-color-text-inverse">
					Super Gantt Runner
				</h4>
				<PlayButton href="//runner.teamgantt.games" />
			</div>
		</div>
	{:else if currentGame === 'diver'}
		<div class="flex md:w-[400px] h-128 gap-12 items-center">
			<Diver class="w-[80px] ml-10" />
			<div class="background-opacity-20 flex flex-col gap-10">
				<h4 class="tgds-typo-heading-3 uppercase font-serif tgds-color-text-inverse">
					Super Duper Diver
				</h4>
				<PlayButton href="//diver.teamgantt.games" />
			</div>
		</div>
	{/if}
</div>

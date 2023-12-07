<script lang="ts">
	import TV from '../components/tv.svelte';
	import Shelf from '../components/shelf.svelte';
	import Floor from '../components/floor.svelte';
	import Nes from '../components/nes.svelte';
	import SgrDemo from '../components/gantt_runner_demo.gif';
	import DiverDemo from '../components/diver_demo.gif';
	import TgSub from '../components/tg-sub.png';
	import SgrJohn from '../components/sgr-john.gif';
	import BarrelNathan from '../components/sgr-barrel-nathan.gif';

	import GameSelector from '../components/game-selector.svelte';

	type Game = 'gantt-runner' | 'diver';
	let currentGame: Game = 'gantt-runner';

	export function setCurrentGame(game: Game) {
		currentGame = game;
	}
</script>

<div class="flex flex-col w-full h-full bg-focus">
	<div
		class="h-[192px] min-h-[180px] bg-gradient-to-r from-semantic-interactive-600 to-accent-purple-600 flex items-center px-20 border-b-4 border-solid border-neutral-200"
	>
		<div class="flex flex-col px-20 justify-center items-start justify-around w-full">
			<h2 class="font-serif text-xl text-semantic-interactive-300">Welcome to</h2>
			<h1 class="font-serif text-lg tgds-color-text-inverse">TeamGantt.games</h1>
		</div>
	</div>

	<div class="flex flex-col w-full grow bg-semantic-danger-100 items-end">
		<div class="flex flex-col grow w-full self-end relative wallpaper">
			<div class="flex justify-around w-full -mt-24">
				<button
					class="font-serif text-4xs py-10 px-24 cursor-pointer inline-flex items-center gap-8"
					on:click={() => (window.location.href = '//sgr.teamgantt.games')}
					on:mouseenter={() => setCurrentGame('gantt-runner')}
					>Super Gantt Runner<img class="w-20" src={SgrJohn} alt="teamgantt sub" /></button
				>
				<button
					class="font-serif text-4xs py-10 px-24 cursor-pointer inline-flex items-center gap-8"
					on:click={() => (window.location.href = '//diver.teamgantt.games')}
					on:mouseenter={() => setCurrentGame('diver')}
					>Super Duper Diver<img class="w-20" src={TgSub} alt="teamgantt sub" /></button
				>
			</div>
			<Shelf class="absolute bottom-[110px]  md:bottom-[184px] scale-90 -mb-48" />

			<div class="w-full grow flex justify-center items-center">
				<GameSelector
					class="mt-20 md:mt-10 z-10 backdrop-blur-xl rounded-lg shadow-lg"
					onGameChange={setCurrentGame}
					{currentGame}
				/>
			</div>
			<div class="flex flex-1 items-end relative">
				<Nes
					class="h-[100px] scale-50 md:scale-100 absolute bottom-[-45px] left-[-116px] md:bottom-[128px] md:left-[-40px]"
				/>
				<TV
					class="h-[180px] md:h-[350px] absolute bottom-[54px] left-[100px] md:bottom-[124px] md:left-[290px]"
				>
					<div class="absolute" slot="tvScreen">
						{#if currentGame === 'gantt-runner'}
							<img src={SgrDemo} alt="preview" />
						{:else if currentGame === 'diver'}
							<img src={DiverDemo} alt="preview" />
						{/if}
					</div>
					<div class="relative bg-focus h-24 w-24"></div>
				</TV>
				<span class="font-serif text-4xs text-center"
					>Copyright ® {new Date().getFullYear()} TeamGantt.<br />All Rights Reserved.</span
				>
			</div>
			<Floor />
		</div>
	</div>
</div>

<script>
	import TV from '../components/tv.svelte';
	import Shelf from '../components/shelf.svelte';
	import Floor from '../components/floor.svelte';
	import Nes from '../components/nes.svelte';
	import SgrDemo from '../components/gantt_runner_demo.gif';
</script>

<div
	class="h-256 bg-gradient-to-r from-semantic-interactive-600 to-accent-purple-600 flex items-center px-20"
>
	<div class="flex flex-col px-20">
		<h2 class="font-serif text-semantic-interactive-300">Welcome to</h2>
		<h1 class="font-serif tgds-color-text-inverse">TeamGantt Games</h1>
	</div>
</div>

<div class="flex basis-10 flex-col">
	<div class="flex flex-1 items-end">
		<div class="relative">
			<img
				src={SgrDemo}
				alt="preview"
				class="absolute bottom-20 left-72 h-[200px] translate-y-[22px]"
			/>
			<TV class="h-[350px] scale-75 translate-y-[54px]" />
		</div>
		<Nes class="h-[100px] scale-75 translate-y-[22px]" />
	</div>
	<div class="flex bg-neutral-200">
		<Shelf class="scale-90 -mb-48" />
	</div>
	<div class="flex">
		<Floor class />
	</div>
</div>

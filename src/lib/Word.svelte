<script lang="ts">
	import { SvelteMap } from 'svelte/reactivity';

	let { word, disabledLetters }: { word: string; disabledLetters: string[] } = $props();

	const mapping: SvelteMap<string, number> = $derived.by(() => {
		const letter2Idx = new SvelteMap<string, number>();
		let maxIdx = 0;
		for (const c of word) {
			if (!letter2Idx.has(c)) {
				const idx = maxIdx++;
				letter2Idx.set(c, idx);
			}
		}
		return letter2Idx;
	});

	const components: Array<string | number> = $derived.by(() => {
		let cs = [];
		for (const c of word) {
			if (c === ' ' || c === '-' || disabledLetters.includes(c.toUpperCase())) {
				cs.push(c);
			} else {
				cs.push(mapping.get(c)!!);
			}
		}
		return cs;
	});
</script>

<div>
	{#each components as c, i (i)}
		{#if typeof c === 'number'}
			<span class="comp bullet">&#8226;<sub>{c}</sub></span>
		{:else}
			<span class="comp letter">{c.toUpperCase()}</span>
		{/if}
	{/each}
</div>

<style lang="scss">
	div {
		width: 40%;
		margin: 0 auto 64px auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: center;
	}

	.comp {
		font-size: 3em;
		width: 1em;
		min-width: 1em;
		height: 1.8em;
		text-align: center;
	}

	.bullet {
		sub {
			font-size: 0.7em;
		}
	}
</style>

<script lang="ts">
	import KeyBoard from '$lib/KeyBoard.svelte';
	import type { SymRiddle } from '$lib/riddles';
	import { getContext } from 'svelte';
	import Word from './Word.svelte';

	let { riddle, id }: { riddle: SymRiddle; id: number } = $props();
	let word = $derived(riddle.word);
	let disabledLetters: string[] = $state([]);
	let finished = $state(false);
	const completed = getContext<number[]>('completed');

	const disableLetter = (letter: string) => {
		disabledLetters.push(letter);
		for (const c of word.toUpperCase()) {
			if (c !== ' ' && c !== '-' && !disabledLetters.includes(c)) {
				return;
			}
		}
		finished = true;
		dispatchEvent(new CustomEvent('Confetti'));
		completed.push(id);
	};

	function handleKeyDown(ev: KeyboardEvent) {
		if (!ev.altKey && !ev.ctrlKey) {
			ev.stopPropagation();

			const key = ev.key.toUpperCase();
			const code = key.charCodeAt(0);

			if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
				disableLetter(key);
			}
		}
	}

	function solve() {
		for (const c of word) {
			if (c !== ' ' && c !== '-') {
				disableLetter(c);
			}
		}
	}
</script>

<div class="container">
	<div class="center">
		<div class="hint">
			{riddle.hint} |
			{#if riddle.german}
				German
			{:else}
				English
			{/if}
		</div>
	</div>
	<Word {word} {disabledLetters} />
	{#if finished}
		<div class="center"><a class="back" href="/">Go Back</a></div>
	{:else}
		<KeyBoard {disabledLetters} onClick={disableLetter} />
		<div class="center">
			<button class="solve back" onclick={solve}>Solve</button>
		</div>
	{/if}
</div>

<svelte:window onkeydown={handleKeyDown} />

<style lang="scss">
	.center {
		display: flex;
		justify-content: center;
	}

	.back {
		color: black;
		font-size: 1.5em;
		padding: 8px 16px;
		border: 1pt solid black;
		border-radius: 1em;
		text-decoration: none;
		transition: 0.2s scale ease-in-out;

		&:hover {
			scale: 1.1;
		}
	}

	.container {
		margin: 20vh 0;
	}

	.solve {
		margin: 16px;
	}

	.hint {
		font-size: 1.4em;
		margin-bottom: 16px;
	}
</style>

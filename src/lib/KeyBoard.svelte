<script lang="ts">
	import Letter from './Letter.svelte';

	let { disabledLetters, onClick }: { disabledLetters: string[]; onClick: (s: string) => void } =
		$props();
	const ROWS = [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M']
	];
</script>

<div class="container">
	{#each ROWS as row, i (i)}
		<div class="row">
			{#each row as letter (letter)}
				<Letter {letter} disabled={disabledLetters.includes(letter)} {onClick} />
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.row {
		display: flex;
	}
</style>

<script lang="ts">
	let {
		letter,
		disabled,
		onClick
	}: { letter: string; disabled: boolean; onClick: (s: string) => void } = $props();
</script>

<button class:disabled onclick={() => onClick(letter)}>
	{letter}
</button>

<style lang="scss">
	button {
		font-size: 1.5em;
		display: inline;
		border: 2pt black solid;
		border-radius: 6pt;
		width: 32pt;
		text-align: center;
		margin: 4pt;
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
		cursor: pointer;

		&:hover:not(.disabled) {
			opacity: 1;
		}
	}

	.disabled {
		opacity: 0.1;
	}
</style>

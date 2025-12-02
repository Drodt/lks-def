<script lang="ts">
	import { RIDDLES } from '$lib/riddles';
	import { getContext } from 'svelte';

	const completed = getContext<number[]>('completed');
</script>

<h1>Wheel of (Symbolic) Fortune</h1>
<div class="container">
	{#each RIDDLES as _, id}
		<a href="/riddle/{id}" class="riddle" class:disabled={completed.includes(id)}
			>Riddle #{id + 1}</a
		>
	{/each}
</div>

<style lang="scss">
	:global(button) {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
		overflow: visible;
		text-transform: none;
	}

	button,
	[type='button'],
	[type='reset'],
	[type='submit'] {
		appearance: button;
		-webkit-appearance: button;
	}

	h1 {
		text-align: center;
	}

	.container {
		width: 60vw;
		display: flex;
		flex-direction: column;
		margin: 48px auto;
		justify-content: center;
		align-items: center;
	}

	.disabled {
		opacity: 0.5;
	}

	.riddle {
		text-decoration: none;
		padding: 8px 16px;
		color: black;
		font-size: 1.8em;
		border: 1pt solid black;
		border-radius: 8pt;
		margin: 8px 0;
		transition: 0.2s scale ease-in-out;

		&:hover:not(.disabled) {
			scale: 1.1;
		}
	}
</style>

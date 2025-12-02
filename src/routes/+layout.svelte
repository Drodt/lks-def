<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Confetti from '$lib/confetti';
	import { onMount, setContext } from 'svelte';

	let { children } = $props();
	let completed = $state([]);
	setContext('completed', completed);

	let cf: Confetti | undefined = undefined;
	onMount(() => (cf = new Confetti({ speed: 10, maxCount: 200 })));
	const confetti = () => {
		cf!.start();

		setTimeout(() => cf!.stop(), 2000);
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<svelte:window onConfetti={confetti} />

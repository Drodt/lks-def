<script lang="ts">
	import Riddle from '$lib/Riddle.svelte';
	import { RIDDLES, type SymRiddle } from '$lib/riddles';
	import type { PageProps } from './$types';

	let { params }: PageProps = $props();

	let id = $derived.by(() => parseInt(params.riddle));

	let riddle: SymRiddle = $derived.by(() => RIDDLES[id]);
</script>

<Riddle {riddle} {id} />

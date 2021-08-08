<!-- The dashboard view -->
<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	// Svelte imports
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	// Local imports
	import Card from '../lib/Card.svelte';
	import Reach from '../lib/Reach.svelte';
	import Demographic from '../lib/Demographic.svelte';
	import TopChannels from '../lib/TopChannels.svelte';

	// Stores
	import { sidePanelOpen } from '../stores/AppState';

	const padding = tweened(260, {
		duration: 300,
		easing: cubicOut
	});

	let width;

	$: {
		if (width < 1000) {
			$padding = 0;
		} else if ($sidePanelOpen) {
			$padding = 260;
		} else if (!$sidePanelOpen) {
			$padding = 0;
		}
	}
</script>

<svelte:head>
	<title>Dashboard | Dash</title>
	<html lang="en-GB" />
</svelte:head>

<svelte:window bind:innerWidth={width} />

<div in:fade class="dashboard" style="padding-left: {$padding}px">
	<!-- Reach component -->
	<div class="reach">
		<Card>
			<Reach />
		</Card>
	</div>

	<!-- Demographic component -->
	<div class="demographic">
		<Card>
			<Demographic />
		</Card>
	</div>

	<!-- Top channels component -->
	<div class="top-channels">
		<Card>
			<TopChannels />
		</Card>
	</div>
</div>

<style>
	.dashboard {
		flex-grow: 1;
		margin: 10px;
	}
	.dashboard > * + * {
		margin-top: 7px;
	}
	@media (min-width: 900px) {
		.dashboard {
			display: grid;
			grid-template-areas:
				'reach reach reach'
				'demographic demographic top-channels';
			grid-template-rows: 1fr auto;
			gap: 23px;
			margin: 17px 34px 35px 32px;
		}
		.dashboard > * + * {
			margin-top: 0px;
		}
		.reach {
			grid-area: reach;
		}
		.demographic {
			grid-area: demographic;
		}
		.top-channels {
			grid-area: top-channels;
		}
	}
</style>

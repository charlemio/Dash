<!-- The dashboard view -->
<script>
	// Svelte imports
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	// Local imports
	import Card from '../library/Card.svelte';
	import Reach from '../library/Reach.svelte';
	import Demographic from '../library/Demographic.svelte';
	import TopChannels from '../library/TopChannels.svelte';

	// Stores
	import { sidePanelOpen } from '../stores/AppState';

	const padding = tweened(260, {
		duration: 300,
		easing: cubicOut
	});

	let width;

	$: {
		console.log(`toggling padding with width ${width}`);
		if (width < 900) {
			$padding = 0;
		} else if ($sidePanelOpen) {
			$padding = 260;
		} else {
			$padding = 0;
		}
	}
</script>

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
			grid-template-rows: 1fr 1fr;
			gap: 24px;
			margin: 17px 34px 35px 32px;
		}
		.reach {
			height: unset;
			grid-area: reach;
		}
		.demographic {
			height: unset;
			grid-area: demographic;
		}
		.top-channels {
			height: unset;
			grid-area: top-channels;
		}
	}
</style>

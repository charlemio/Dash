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

	$: {
		console.log('toggling padding');
		if ($sidePanelOpen) {
			$padding = 260;
		} else {
			$padding = 0;
		}
	}
</script>

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
		display: grid;
		flex-grow: 1;
		grid-template-areas:
		/* 'top-bar top-bar top-bar' */
		'reach reach reach'
		'demographic demographic top-channels';
		grid-template-rows: 1fr 1fr;
		gap: 24px;
		margin: 17px 34px 35px 32px;
	}
	.reach {
		grid-area: reach;
		height: 100%;
	}
	.demographic {
		grid-area: demographic;
		height: 100%;
	}
	.top-channels {
		grid-area: top-channels;
		height: 100%;
	}
</style>

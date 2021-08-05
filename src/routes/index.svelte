<!-- The dashboard view -->
<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Card from '../library/Card.svelte';
	import Reach from '../library/Reach.svelte';
	import Demographic from '../library/Demographic.svelte';
	import TopChannels from '../library/TopChannels.svelte';

	import { sidePanelOpen } from '../stores/AppState';

	const padding = tweened(0, {
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

<div class="dashboard" style="padding-left: {$padding}px">
	<!-- Top bar component -->
	<div class="top-bar" ><h2>Dashboard</h2></div>
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
			'top-bar top-bar top-bar'
			'reach reach reach'
			'demographic demographic top-channels';
		grid-template-rows: 90px 1fr 1fr;
		gap: 1.41%;
    margin: 0px 2% 1.52% 1.82%;
	}
	.top-bar {
		grid-area: top-bar;
    height: 100%;
    display: flex;
    align-items: center;
	}

  .top-bar h2 {
    padding-left: 58px;
    font-size: 3.2rem;
    font-weight: bold;
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

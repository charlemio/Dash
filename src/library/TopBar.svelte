<script>
	import { fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	import { sidePanelOpen } from '../stores/AppState';

	const padding = tweened(260, {
		duration: 300,
		easing: cubicOut
	});

	let width;

	$: {
		if (width < 1000) {
			$padding = 72;
		} else if ($sidePanelOpen) {
			$padding = 312;
		} else {
			$padding = 72;
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

<div class="top-bar" style="padding-left: {$padding}px">
	<!-- Show hamburger button if side panel is collapsed -->
	{#if !$sidePanelOpen}
		<button
			in:fly={{ x: -100, opacity: 0, duration: 300 }}
			class="top-bar__hamburger-button"
			on:click={() => ($sidePanelOpen = !$sidePanelOpen)}
		>
			<img src="../static/Hamburger.svg" alt="toggle side bar" />
		</button>
	{/if}
	<h2>Dashboard</h2>
	<div class="top-bar__right-content">
		<!-- Top right utility buttons -->
		<a href="." class="top-bar-item-wrapper"><img src="../static/Search.svg" alt="Search icon" /></a
		>
		<a href="." class="top-bar-item-wrapper"
			><img src="../static/Bell.svg" alt="Notification bell" /></a
		>

		<!-- Profile content -->
		<a href="." class="top-bar-item-wrapper"
			><img src="../static/ProfilePic.svg" alt="Profile avatar" /></a
		>
		<button class="top-bar__profile-dropdown"
			><h3>Erza Miller</h3>
			<div class="profile-dropdown__icon"><img src="../static/ChevronDown.svg" alt="" /></div>
		</button>
	</div>
</div>

<style>
	.top-bar {
		grid-area: top-bar;
		display: flex;
		height: 90px;
		min-height: 90px;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2px solid rgb(0, 0, 0, 0.05);
	}
	.top-bar__hamburger-button {
		position: absolute;
		left: 12px;
		width: 50px;
		outline: none;
		transform: scale(0.75);
	}

	.top-bar h2 {
		font-size: 2.6rem;
		font-weight: bold;
	}
	.top-bar__right-content {
		display: flex;
		align-items: center;
	}

	.top-bar__right-content a {
		cursor: pointer;
	}

	.top-bar__right-content h3 {
		display: none;
		font-size: 1.6rem;
		font-weight: bold;
	}
	.top-bar__profile-dropdown {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 24px;
		margin-left: 12px;
		margin-right: 46px;
	}
	.profile-dropdown__icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.top-bar-item-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
	}

	.top-bar-item-wrapper + .top-bar-item-wrapper {
		margin-left: 16px;
	}

	@media (min-width: 600px) {
		.top-bar__right-content h3 {
			display: inline-block;
		}
		.top-bar__profile-dropdown {
			width: 123px;
		}
		.top-bar h2 {
			font-size: 3.2rem;
			font-weight: bold;
		}
	}
</style>

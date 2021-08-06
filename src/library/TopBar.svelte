<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

	import { sidePanelOpen } from '../stores/AppState';

	const padding = tweened(260, {
    duration: 300,
    easing: cubicOut
  });

	$: {
		if ($sidePanelOpen) {
			$padding = 260;
		} else {
			$padding = 20;
		}
	}
</script>

<div class="top-bar" style="padding-left: {$padding}px">
	<h2>Dashboard</h2>
	<div class="top-bar__right-content">
		<!-- Top right utility buttons -->
		<a class="top-bar-item-wrapper"><img src="../static/Search.svg" alt="search" /></a>
		<a class="top-bar-item-wrapper"><img src="../static/Bell.svg" alt="Notifications" /></a>

		<!-- Profile content -->
		<a class="top-bar-item-wrapper"><img src="../static/ProfilePic.svg" /></a>
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
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #dadada;
	}

	.top-bar h2 {
		padding-left: 58px;
		font-size: 3.2rem;
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
		font-size: 1.6rem;
		font-weight: bold;
	}
	.top-bar__profile-dropdown {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 123px;
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
</style>

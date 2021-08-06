<script>
	import '../app.postcss';
	import SidePanel from '../library/SidePanel.svelte';
	import TopBar from '../library/TopBar.svelte';
</script>

<div class="app">
	<SidePanel />
	<div class="content">
		<TopBar />
		<slot />
	</div>
</div>

<style>
	.app {
		display: flex;
		height: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		/* height: 100%; */
		width: 100%;
	}
</style>

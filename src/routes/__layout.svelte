<script>
	import '../app.postcss';
	import SidePanel from '../lib/SidePanel.svelte';
	import TopBar from '../lib/TopBar.svelte';
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
		width: 100%;
	}
</style>

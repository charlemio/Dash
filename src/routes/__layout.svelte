<script>
	import '../app.postcss';
	import SidePanel from '../library/SidePanel.svelte';
</script>

<div class="app">
	<SidePanel />
	<slot />
</div>

<style>
	.app {
		display: grid;
		height: 100%;
	}
</style>

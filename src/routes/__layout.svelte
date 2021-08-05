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
		display: flex;
		height: 100%;
		background: var(--background-color);
	}
</style>

<script>
	// Stores
	import { ReachData } from '../stores/ReachData';
</script>

<div>
	{$ReachData.totalReach}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
    min-height: 400px;
		font-size: 3rem;
	}
</style>

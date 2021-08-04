<script>
	export let icon = '';
	export let name = '';
	export let notificationCount = 0;
</script>

<button class="menu-item">
	<div class="menu-item__label"><img src={icon} alt="" /> {name}</div>
	{#if notificationCount > 0}
		<div class="menu-item__notification">{notificationCount}</div>
	{/if}
</button>

<style>
	.menu-item {
		display: flex;
		height: 56px;
		justify-content: space-between;
		align-items: center;
		border-radius: 7px 0 0 7px;
		padding: 16px 25px 16px 16px;
		margin-left: 16px;
		font-family: 'Red Hat Display', sans-serif;
		font-weight: 300;
		font-size: 1.8rem;
		color: white;
		transition: 0.4s ease all;
	}
	.menu-item:hover {
		background: #1e2b647c;
	}
	.menu-item:focus {
		background: #1e2b64;
	}
	.menu-item__label {
		display: flex;
	}
	.menu-item__label img {
    width: 24px;
		margin-right: 8px;
	}
	.menu-item__notification {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #cf3b58;
		border-radius: 3px;
		font-size: 1.4rem;
		font-weight: bold;
		width: 24px;
		height: 24px;
	}
</style>

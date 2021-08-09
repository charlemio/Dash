<script>
	export let icon = '';
	export let name = '';
	export let notificationCount = 0;
	export let href = '';
</script>

<!-- the on:click handles closing of side panel for smaller screens -->
<a {href} class="menu-item">
	<div class="menu-item__label"><img src={icon} alt="" /> {name}</div>
	{#if notificationCount > 0}
		<div class="menu-item__notification">{notificationCount}</div>
	{/if}
</a>

<style>
	.menu-item {
		display: flex;
		height: 56px;
		justify-content: space-between;
		align-items: center;
		border-radius: 7px 0 0 7px;
		padding: 16px 25px 16px 16px;
		margin-left: 16px;
		font-weight: 300;
		font-size: 1.8rem;
		color: white;
		transition: 0.4s ease all;
		outline: none;
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

	@media (hover: none) and (pointer: coarse) {
	}

	/* The following behavior should not occur on touch devices */
	@media (hover: hover) and (pointer: fine) {
		.menu-item:hover {
			background: #1e2b647c;
		}
		.menu-item:focus {
			background: var(--primary-color--highlighted);
		}
	}
</style>

<script>
	import MenuItem from './MenuItem.svelte';
</script>

<div class="side-panel">
	<div class="side-panel__top-content">
		<a class="side-panel__logo" href="/">
			<div class="side-panel__logo__icon">
				<img src="../static/Logo.svg" alt="Logo icon" />
			</div>
			Dash
		</a>
		<div class="side-panel__group">
			<h2 class="side-panel__group__label">MAIN MENU</h2>
			<MenuItem name="Dashboard" icon="../static/Bars.svg" />
			<MenuItem name="Inbox" icon="../static/Chat.svg" notificationCount={1} />
		</div>
		<div class="side-panel__group">
			<h2 class="side-panel__group__label">Workspace</h2>
			<MenuItem name="Accounts" icon="../static/User_box.svg" />
			<MenuItem name="Schedule Post" icon="../static/Calendar.svg" />
			<MenuItem name="Communities" icon="../static/Search.svg" />
			<MenuItem name="Analytics" icon="../static/Chart.svg" />
		</div>
		<div class="side-panel__group">
			<h2 class="side-panel__group__label">General</h2>
			<MenuItem name="File & Folders" icon="../static/Folder.svg" />
			<MenuItem name="Settings" icon="../static/Settings.svg" />
		</div>
	</div>
	<div class="side-panel__bottom-content">
		<div class="side-panel__support-card">
			<div class="support-card__badge"><img src="../static/Questionmark.svg" alt="" /></div>
			<div class="support-card__content">
				<h3>Need help with <strong>Dash</strong>?</h3>
				<button>Go to help center</button>
			</div>
		</div>
	</div>
</div>

<style>
	.side-panel__toggle-button {
		position: relative;
		right: 20px;
		top: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: white;
		border: 1px solid #dadada;
	}

	.side-panel {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 260px;
		height: 100%;
		background: #0d1a51;
		transition: 0.4s ease;
	}
  
	.side-panel__top-content {
		display: flex;
		flex-direction: column;
	}
	.side-panel__bottom-content {
		display: flex;
		flex-direction: column;
	}
	.side-panel__logo {
		display: flex;
		align-items: center;
		height: 40px;
		width: 111px;
		font-family: 'Red Hat Display', sans-serif;
		font-size: 2.4rem;
		font-weight: 800;
		color: white;
		margin: 24px 0px 29px 30px;
		cursor: pointer;
	}
	.side-panel__logo__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		background: #237ef9;
		margin-right: 14px;
		border-radius: 8px;
	}
	.side-panel__group {
		display: flex;
		flex-direction: column;
		margin-top: 32px;
	}
	.side-panel__group__label {
		font-family: 'Red Hat Display', sans-serif;
		font-size: 1.2rem;
		font-weight: bold;
		color: #56cbfe;
		margin-left: 30px;
		margin-bottom: 9px;
	}
	.side-panel__support-card {
		margin-left: 24px;
		margin-bottom: 39px;
		width: 204px;
	}

	.support-card__content {
		display: flex;
		height: 129px;
		padding-top: 32px;
		padding-bottom: 17px;
		background: #1e2b64;
		border-radius: 8px;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		font-family: 'Red Hat Display', sans-serif;
		color: white;
		font-size: 1.4rem;
	}

	.support-card__content button {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #237ef9;
		width: 160px;
		height: 40px;
		border-radius: 6px;
	}

	.support-card__badge {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		top: 20px;
		margin: auto;
		border-radius: 50%;
		background: white;
		width: 40px;
		height: 40px;
	}
</style>

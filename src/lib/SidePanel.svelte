<script>
	import { fly } from 'svelte/transition';
	import MenuItem from './MenuItem.svelte';
	import { sidePanelOpen } from '../stores/AppState';

	// Import SVGs
	import Logo from '../../static/Logo.svg';
	import Less from '../../static/Less.svg';
	import Bars from '../../static/Bars.svg';
	import Chat from '../../static/Chat.svg';
	import UserBox from '../../static/UserBox.svg';
	import Calendar from '../../static/Calendar.svg';
	import SearchAlt from '../../static/SearchAlt.svg';
	import Chart from '../../static/Chart.svg';
	import Folder from '../../static/Folder.svg';
	import Settings from '../../static/Settings.svg';
	import Questionmark from '../../static/Questionmark.svg';
</script>

{#if $sidePanelOpen}
	<nav class="side-panel" transition:fly={{ x: -50, opacity: 0, duration: 300 }}>
		<div class="side-panel__top-content">
			<!-- Logo -->
			<div class="top-content__logo-row">
				<a class="side-panel__logo" href="/">
					<div class="side-panel__logo__icon">
						<img src={Logo} alt="Logo icon" />
					</div>
					Dash
				</a>
				<button
					class="side-panel__toggle-button"
					on:click={() => ($sidePanelOpen = !$sidePanelOpen)}
					><img src={Less} alt="toggle button" /></button
				>
			</div>

			<!-- Menu items -->
			<div class="side-panel__group">
				<h2 class="side-panel__group__label">MAIN MENU</h2>
				<MenuItem href="/" name="Dashboard" icon={Bars} />
				<MenuItem href="/" name="Icons" icon={Chat} notificationCount={1} />
			</div>
			<div class="side-panel__group">
				<h2 class="side-panel__group__label">Workspace</h2>
				<MenuItem href="/" name="Accounts" icon={UserBox} />
				<MenuItem href="/" name="Schedule Post" icon={Calendar} />
				<MenuItem href="/" name="Communities" icon={SearchAlt} />
				<MenuItem href="/" name="Analytics" icon={Chart} />
			</div>
			<div class="side-panel__group">
				<h2 class="side-panel__group__label">General</h2>
				<MenuItem href="/" name="File & Folders" icon={Folder} />
				<MenuItem href="/" name="Settings" icon={Settings} />
			</div>
		</div>

		<!-- Support card -->
		<div class="side-panel__bottom-content">
			<div class="side-panel__support-card">
				<div class="support-card__badge"><img src={Questionmark} alt="" /></div>
				<div class="support-card__content">
					<h3>Need help with <strong>Dash</strong>?</h3>
					<button>Go to help center</button>
				</div>
			</div>
		</div>
	</nav>
{/if}

<style>
	.side-panel {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 260px;
		min-height: 100%;
		background: var(--primary-color);
		transition: 0.4s ease;
		z-index: 1;
	}
	.side-panel__top-content {
		display: flex;
		flex-direction: column;
	}
	.top-content__logo-row {
		display: flex;
		justify-content: space-between;
	}
	.side-panel__toggle-button {
		position: relative;
		left: 20px;
		top: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: white;
		border: 1px solid #dadada;
		outline: none;
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
		background: var(--accent-color);
		margin-right: 14px;
		border-radius: 8px;
	}
	.side-panel__group {
		display: flex;
		flex-direction: column;
		margin-top: 32px;
	}
	.side-panel__group__label {
		font-size: 1.2rem;
		font-weight: bold;
		color: var(--secondary-color);
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
		background: var(--primary-color--highlighted);
		border-radius: 8px;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		color: white;
		font-size: 1.4rem;
	}
	.support-card__content button {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--accent-color);
		width: 160px;
		height: 40px;
		border-radius: 6px;
		outline: none;
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

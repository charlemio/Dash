<script>
	// Library
	import { fade } from 'svelte/transition';

	// Local components
	import Chart from './Chart.svelte';

	// Stores
	import { totalReach, totalPaidReach, totalOrganicReach } from '../stores/ReachData';
	import { activeTimeSpan } from '../stores/ReachData';

	// SVGs
	import TotalReachIcon from '../../static/TotalReachIcon.svg';
	import PaidReachIcon from '../../static/PaidReachIcon.svg';
	import OrganicReachIcon from '../../static/OrganicReachIcon.svg';

	let width;
</script>

<svelte:window bind:innerWidth={width} />

<div class="reach">
	<div class="reach__top-row">
		<div class="top-row__left-content">
			<div class="top-row__total-reach">
				{#if width > 700}
					<img
						src={TotalReachIcon}
						transition:fade
						class="total-reach__icon"
						alt="Total reach icon"
					/>
				{/if}
				<div class="key-number">
					<h2>Total Reach</h2>
					<h3>{totalReach}K</h3>
				</div>
			</div>
			<div class="top-row__paid-reach">
				{#if width > 700}
					<img src={PaidReachIcon} transition:fade class="paid-reach__icon" alt="Paid reach icon" />
				{/if}
				<div class="key-number">
					<h2>Total Paid Reach</h2>
					<h3>{totalPaidReach}K</h3>
				</div>
			</div>
			<div class="top-row__organic-reach">
				{#if width > 700}
					<img
						src={OrganicReachIcon}
						transition:fade
						class="organic-reach__icon"
						alt="Organic reach icon"
					/>
				{/if}
				<div class="key-number">
					<h2>Total Organic Reach</h2>
					<h3>{totalOrganicReach}K</h3>
				</div>
			</div>
		</div>
		<ul class="top-row__right-content">
			<li class:active={$activeTimeSpan === 'daily'} on:click={() => ($activeTimeSpan = 'daily')}>
				Daily
			</li>
			<li class:active={$activeTimeSpan === 'weekly'} on:click={() => ($activeTimeSpan = 'weekly')}>
				Weekly
			</li>
			<li
				class:active={$activeTimeSpan === 'monthly'}
				on:click={() => ($activeTimeSpan = 'monthly')}
			>
				Monthly
			</li>
		</ul>
	</div>
	<div class="reach__chart-container"><Chart /></div>
</div>

<style>
	.reach {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 3rem;
		padding: 27px 24px;
	}

	.reach__top-row {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		min-height: 71px;
		margin-bottom: 20px;
	}
	.top-row__left-content {
		display: flex;
		flex-wrap: wrap;
		max-width: 753px;
		flex-grow: 1;
		justify-content: space-between;
		background: white;
	}

	.key-number h2 {
		font-size: 1.4rem;
	}
	.key-number h3 {
		font-size: 3.2rem;
		font-weight: bold;
		line-height: 4rem;
		padding-top: 4px;
	}
	.top-row__total-reach {
		display: flex;
	}
	.total-reach__icon {
		width: 64px;
		height: 64px;
		margin-right: 16px;
		border-radius: 8px;
		background: #e6f2fe;
	}

	.top-row__paid-reach {
		display: flex;
	}
	.paid-reach__icon {
		width: 64px;
		height: 64px;
		margin-right: 16px;
		border-radius: 8px;
		background: #eafbf3;
	}
	.top-row__organic-reach {
		display: flex;
	}
	.organic-reach__icon {
		width: 64px;
		height: 64px;
		margin-right: 16px;
		border-radius: 8px;
		background: #ffe9f5;
	}
	.top-row__right-content {
		justify-self: flex-end;
		background: #f5f7fb;
		list-style: none;
		display: flex;
		flex-direction: column;
		border-radius: 8px;
		padding: 4px;
	}
	.top-row__right-content li {
		font-size: 1.8rem;
		text-align: center;
		padding: 8px;
		width: 107px;
		border-radius: 6px;
		color: #a9abb0;
		transition: 0.3s ease all;
		cursor: pointer;
		user-select: none;
	}
	.top-row__right-content li:hover {
		color: var(--accent-color);
		opacity: 0.5;
	}
	.active {
		background: white !important;
		color: var(--accent-color) !important;
	}
	.active:hover {
		opacity: 1 !important;
	}
	.reach__chart-container {
		flex-grow: 1;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media (min-width: 400px) {
		.top-row__right-content {
			flex-direction: row;
			flex-grow: 1;
			max-width: 328px;
		}
	}
	@media (min-width: 600px) {
		.key-number h2 {
			font-size: 1.6rem;
		}
		.key-number h3 {
			font-size: 4rem;
		}
	}

	@media (min-width: 800px) {
		.key-number h3 {
			text-align: left;
			font-size: 4rem;
			font-weight: bold;
			line-height: 4rem;
			padding-top: 4px;
		}
	}
</style>

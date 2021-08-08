<script>
	import { topChannelsData } from '../stores/TopChannelData';
</script>

<div class="top-channels">
	<div class="top-row">
		<div class="top-row__left-content">
			<img src="../static/PieIconLight.svg" alt="Pie chart icon" />
			<h1>Top Channels</h1>
		</div>
		<a class="top-row__right-content" href="/"
			>See detail
			<img src="../static/Greater.svg" alt="Greater than icon" />
		</a>
	</div>
	<div class="top-channels__table-heading">
		<h3>Source</h3>
		<h3>Visit</h3>
	</div>
	{#each $topChannelsData as channel}
		<div class="top-channels__row">
			<div class="top-channels__row__label">
				<img src={channel.icon} alt="${channel.label} icon" />
				<span>{channel.label}</span>
			</div>
			<div class="top-channels__row__value">{channel.value}</div>
			<div class="top-channels__row__percentage">{channel.percentage}</div>
		</div>
	{/each}
</div>

<style>
	.top-channels {
		height: 100%;
	}
	.top-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 16px;
		padding-bottom: 16px;
		padding-left: 22px;
		padding-right: 22px;
		border-bottom: 2px solid rgb(0, 0, 0, 0.05);
	}
	.top-row__left-content {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.top-row__left-content h1 {
		font-size: 2.4rem;
		padding-left: 16px;
		font-weight: bold;
	}
	.top-row__right-content {
		display: flex;
		color: var(--accent-color);
		font-size: 2rem;
		font-weight: bold;
		margin-right: 8px;
	}
	.top-channels__table-heading {
		display: flex;
		font-size: 1.8rem;
		color: #939393;
		margin-left: 20px;
		margin-top: 16px;
	}
	.top-channels__table-heading > * + * {
		margin-left: 115px;
	}
	.top-channels__row {
		display: flex;
		font-size: 1.8rem;
		height: 54px;
		align-items: center;
		padding-left: 16px;
		margin-top: 16px;
		margin-left: 20px;
		margin-right: 20px;
		background: rgba(0, 0, 0, 0.022);
		border-radius: 4px;
	}
	.top-channels__row__label {
		display: flex;
		font-weight: bold;
		width: 149px;
	}
	.top-channels__row__label img {
		margin-right: 8px;
	}
	.top-channels__row__value {
		font-weight: bold;
		width: 60px;
		text-align: end;
	}
	.top-channels__row__percentage {
		font-weight: bold;
		color: #2ad989;
		width: 50px;
		margin-left: 10px;
		/* text-align: ; */
	}
</style>

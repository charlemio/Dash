<script>
	import { demographicData } from '../stores/DemographicData';
	import Card from './Card.svelte';
</script>

<div class="demographic">
	<div class="top-row">
		<div class="top-row__left-content">
			<img src="../static/PieIcon.svg" alt="Pie chart icon" />
			<h1>Demographic</h1>
		</div>
		<div class="top-row__right-content">
			<a href="/">See detail</a>
			<img src="../static/Greater.svg" alt="Greater than icon" />
		</div>
	</div>
	<div class="main-content">
		<div class="main-content__left">
			<div class="main-content__pie-chart">
				<h2>Gender</h2>
				<img src="../static/PieChart.svg" alt="Pie chart" />
				<img
					class="pie-chart__number pie-chart__male-number"
					src="../static/PieChartMaleNumber.svg"
					alt=""
				/>
				<img
					class="pie-chart__number pie-chart__female-number"
					src="../static/PieChartFemaleNumber.svg"
					alt=""
				/>
				<img
					class="pie-chart__number pie-chart__other-number"
					src="../static/PieChartOtherNumber.svg"
					alt=""
				/>
			</div>
			<img class="pie-chart__legend" src="../static/PieChartLegend.svg" alt="Pie chart legend" />
		</div>
		<div class="main-content__right">
			<div class="main-content__age-table">
				<h2>Audience Age</h2>
				<img class="age-table__span" src="AgeTableSpan.svg" alt="Age table span" />
				{#each $demographicData.age as category}
					<div class="age-table__row">
						<div>
							<span class="age-table__row__icon" style="background: {category.color}" />
							<span class="age-table__row__label">{category.label}</span>
						</div>
						<div class="age-table__row__value">{category.value}</div>
						<div class="age-table__row__percentage">{category.percentage}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.demographic {
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
	}
	.top-row__right-content a {
		color: var(--accent-color);
		font-size: 2rem;
		font-weight: bold;
		margin-right: 8px;
	}
	.main-content {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.main-content__left {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.main-content__pie-chart {
		margin-bottom: 32px;
		position: relative;
	}
	.main-content__pie-chart h2 {
		position: absolute;
		font-size: 2rem;
		font-weight: bold;
		left: 75px;
		top: 92px;
	}
	.pie-chart__male-number {
		position: absolute;
		top: -50px;
		left: 55px;
	}
	.pie-chart__female-number {
		position: absolute;
		bottom: 10px;
		left: 155px;
	}
	.pie-chart__other-number {
		position: absolute;
		bottom: -10px;
		left: -20px;
	}
	.pie-chart__legend {
		margin-bottom: 44px;
	}
	.main-content__right {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin-top: 54px;
	}
	.main-content__age-table {
		display: flex;
		flex-direction: column;
		width: 100%;
		background: rgba(0, 0, 0, 0.022);
		border-radius: 12px;
		padding-top: 27px;
		padding-bottom: 44px;
		padding-left: 18px;
		padding-right: 10%;
		margin-right: 26px;
	}
	.main-content__age-table h2 {
		font-size: 2rem;
		font-weight: bold;
	}
	.age-table__span {
		height: 12px;
		margin-top: 14px;
		width: 100%;
		object-fit: fill;
	}
	.age-table__row {
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
	}
	.age-table__row__icon {
		display: inline-block;
		border-radius: 50%;
		height: 12px;
		width: 12px;
		margin-right: 12px;
	}
	.age-table__row__label {
		font-size: 1.8rem;
	}
	.age-table__row__value {
		font-size: 1.8rem;
		font-weight: bold;
	}
	.age-table__row__percentage {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
		font-size: 1.4rem;
		font-weight: bold;
		background: #e6f2fe;
		border-radius: 50%;
	}
</style>

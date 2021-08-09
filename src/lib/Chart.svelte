<script>
	import * as Pancake from '@sveltejs/pancake';

	import { months } from '../stores/ReachData.js';

	let x1 = 0;
	let x2 = 11;
	let y1 = 0;
	let y2 = 4;
</script>

<div class="chart">
	<Pancake.Chart {x1} {x2} {y1} {y2}>
		<Pancake.Grid horizontal count={5} let:value>
			<div class="grid-line horizontal"><span>{value}</span></div>
		</Pancake.Grid>

		<Pancake.Grid vertical count={12} let:value>
			<span class="x-label">{months[value]}</span>
		</Pancake.Grid>
	</Pancake.Chart>
</div>

<style>
	.chart {
		height: 100%;
		width: 100%;
		padding: 10px;
	}

	.grid-line {
		position: relative;
		display: block;
	}

	.grid-line.horizontal {
		width: calc(100%);
		border-bottom: 2px dashed rgb(0, 0, 0, 0.05);
	}

	.grid-line span {
		position: absolute;
		left: -20px;
		bottom: -9px;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
	}

	.x-label {
		position: absolute;
		width: 4em;
		left: -20px;
		bottom: -30px;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
</style>

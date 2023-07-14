<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { ItemType, type Day, type Item } from '$lib/Calendar';

	export var headers: string[] = [];
	export let days: Day[] = [];
	export let items: Item[] = [];

	let dispatch = createEventDispatcher();

  // TODO: Move this logic into rendering time and conditionally render the item
	function getItemTypeClasses(item: Item) {
		switch (item.type) {
			case ItemType.Info:
				return 'task--info';
			case ItemType.Warning:
				return 'task--warning';
			case ItemType.Danger:
				return 'task--danger';
			case ItemType.Primary:
				return 'task--primary';
			case ItemType.Detail:
				return 'task--detail';
			default:
				return '';
		}
	}
</script>

<div class="calendar">
	{#each headers as header}
		<span class="day-name" on:click={() => dispatch('headerClick', header)}>{header}</span>
	{/each}

	{#each days as day}
		{#if day.enabled}
			<span class="day" on:click={() => dispatch('dayClick', day)}>{day.name}</span>
		{:else}
			<span class="day day-disabled" on:click={() => dispatch('dayClick', day)}>{day.name}</span>
		{/if}
	{/each}

	{#each items as item}
		<section
			on:click={() => dispatch('itemClick', item)}
			class="task {item.className} {getItemTypeClasses(item)}"
			style="grid-column: {item.startCol} / span {item.len};      
      grid-row: {item.startRow};  
      align-self: {item.isBottom ? 'end' : 'center'};"
		>
			{item.title}
			{#if item.detailHeader}
				<div class="task-detail">
					<h2>{item.detailHeader}</h2>
					<p>{item.detailContent}</p>
				</div>
			{/if}
		</section>
	{/each}
</div>

<style>
	.calendar {
		display: grid;
		width: 100%;
		height: 100%;
		grid-template-columns: repeat(7, minmax(45px, 1fr));
		grid-template-rows: 18px;
		grid-auto-rows: 45px;
		overflow: auto;
	}
	.day {
		@apply text-gray-700;
		border-bottom: 1px solid rgba(166, 168, 179, 0.12);
		border-right: 1px solid rgba(166, 168, 179, 0.12);
		text-align: right;
		padding: 5px 10px;
		letter-spacing: 1px;
		font-size: 8px;
		box-sizing: border-box;
		position: relative;
		z-index: 1;
	}
	.day:nth-of-type(7n + 7) {
		border-right: 0;
	}
	.day:nth-of-type(n + 1):nth-of-type(-n + 7) {
		grid-row: 1;
	}
	.day:nth-of-type(n + 8):nth-of-type(-n + 14) {
		grid-row: 2;
	}
	.day:nth-of-type(n + 15):nth-of-type(-n + 21) {
		grid-row: 3;
	}
	.day:nth-of-type(n + 22):nth-of-type(-n + 28) {
		grid-row: 4;
	}
	.day:nth-of-type(n + 29):nth-of-type(-n + 35) {
		grid-row: 5;
	}
	.day:nth-of-type(n + 36):nth-of-type(-n + 42) {
		grid-row: 6;
	}
	.day:nth-of-type(7n + 1) {
		grid-column: 1/1;
	}
	.day:nth-of-type(7n + 2) {
		grid-column: 2/2;
	}
	.day:nth-of-type(7n + 3) {
		grid-column: 3/3;
	}
	.day:nth-of-type(7n + 4) {
		grid-column: 4/4;
	}
	.day:nth-of-type(7n + 5) {
		grid-column: 5/5;
	}
	.day:nth-of-type(7n + 6) {
		grid-column: 6/6;
	}
	.day:nth-of-type(7n + 7) {
		grid-column: 7/7;
	}
	.day-name {
		font-size: 10px;
		text-transform: uppercase;
		color: #e9a1a7;
		text-align: center;
		border-bottom: 1px solid rgba(166, 168, 179, 0.12);
		line-height: 25px;
		font-weight: 500;
	}
	.day-disabled {
		color: rgba(152, 160, 166, 0.5);
		background-color: #ffffff;
		background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fdf9ff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
		cursor: not-allowed;
	}

	.task {
		border-left-width: 2px;
		padding: 2px;
		margin: 2px;
		border-left-style: solid;
		font-size: 8px;
		position: relative;
		align-self: center;
		z-index: 2;
	}
	.task--warning {
		border-left-color: #fdb44d;
		background: #fef0db;
		color: #fc9b10;
		margin-top: -5px;
	}
	.task--danger {
		@apply variant-glass-error col-[2_/_span_3] row-[3] mt-3 border-l-error-500 text-secondary-500;
	}
	.task--info {
		@apply variant-glass-warning mt-3 border-l-warning-500 text-secondary-500;
	}
	.task--primary {
		@apply variant-ghost-warning rounded border-0 text-secondary-500 shadow-lg;
		/* box-shadow: 0 5px 7px rgba(71, 134, 255, 0.4); */
	}
	.task-detail {
		@apply variant-glass-primary absolute left-0 top-[calc(100%+4px)] z-10 rounded-lg border border-primary-300 p-2 text-secondary-500 shadow-lg;
	}
	.task-detail:after,
	.task-detail:before {
		@apply pointer-events-none absolute bottom-full left-1/3 h-0 w-0 border border-solid border-transparent;
		content: ' ';
	}
	.task-detail:before {
		@apply ml-[-4px] border-4 border-b-primary-500;
	}
	.task-detail:after {
		@apply ml-[-3px] border-[3px] border-b-white;
	}
	.task-detail h2 {
		@apply m-0 text-xs text-primary-700;
	}
	.task-detail p {
		@apply mb-0 mt-2 text-[8px] font-medium text-secondary-500;
	}

	/* md */
	@media (min-width: 768px) {
	}

	/* lg */
	@media (min-width: 1024px) {
		.calendar {
			grid-template-columns: repeat(7, minmax(120px, 1fr));
			grid-template-rows: 32px;
			grid-auto-rows: 82px;
		}
		.day {
			padding: 14px 20px;
			font-size: 14px;
		}

		.day-name {
			font-size: 12px;
			line-height: 50px;
		}

		.task {
			border-left-width: 3px;
			padding: 8px 12px;
			margin: 10px;
			font-size: 14px;
		}

		.task--primary {
			box-shadow: 0 10px 14px rgba(71, 134, 255, 0.4);
		}
		.task-detail {
			top: calc(100% + 8px);
			padding: 20px;
			border-radius: 14px;
			box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
		}

		.task-detail:before {
			border-width: 8px;
			margin-left: -8px;
		}

		.task-detail:after {
			border-width: 6px;
			margin-left: -6px;
		}
		.task-detail h2 {
			font-size: 15px;
		}
		.task-detail p {
			margin-top: 4px;
			font-size: 12px;
		}
	}

	/* xl */
	@media (min-width: 1280px) {
	}

	/* 2xl */
	@media (min-width: 1536px) {
	}
</style>

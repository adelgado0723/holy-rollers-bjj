<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import PrimaryItem from './PrimaryItem.svelte';
	import { ItemType, type Day, type Item } from '$lib/Calendar/Calendar';
	import InfoItem from './InfoItem.svelte';
	import WarningItem from './WarningItem.svelte';
	import DangerItem from './DangerItem.svelte';

	export var headers: string[] = [];
	export let days: Day[] = [];
	export let items: Item[] = [];

	let dispatch = createEventDispatcher();
</script>

<div class="calendar">
	{#each headers as header}
		<span
			class="day-name"
			on:click={() => dispatch('headerClick', header)}
			on:keydown={() => dispatch('headerClickKeydown', header)}
			on:keyup={() => dispatch('headerClickKeyup', header)}>{header}</span
		>
	{/each}

	{#each days as day}
		{#if day.enabled}
			<span
				class="day text-gray-700"
				on:click={() => dispatch('dayClick', day)}
				on:keydown={() => dispatch('dayClickKeydown', day)}
				on:keyup={() => dispatch('dayClickKeyup', day)}>{day.name}</span
			>
		{:else}
			<span
				class="day day-disabled text-gray-700"
				on:click={() => dispatch('dayClick', day)}
				on:keydown={() => dispatch('dayClickKeydown', day)}
				on:keyup={() => dispatch('dayClickKeyup', day)}>{day.name}</span
			>
		{/if}
	{/each}

	{#each items as item}
		{#if item.type == ItemType.Info}
			<!-- render info item -->
			<InfoItem {item} />
		{:else if item.type == ItemType.Warning}
			<!-- render warning item -->
			<WarningItem {item} />
		{:else if item.type == ItemType.Danger}
			<!-- render danger item -->
			<DangerItem {item} />
		{:else}
			<!-- render primary item -->
			<PrimaryItem {item} />
		{/if}
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
	}

	/* xl */
	@media (min-width: 1280px) {
	}

	/* 2xl */
	@media (min-width: 1536px) {
	}
</style>

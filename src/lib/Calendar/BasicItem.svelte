<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Item } from './Calendar';

  let dispatch = createEventDispatcher();
  export let item: Item;
  export let className: string;
</script>

<div
  on:click={() => dispatch('itemClick', item)}
  on:keydown={() => dispatch('itemClickKeydown', item)}
  on:keyup={() => dispatch('itemClickKeyup', item)}
  class="task {className}"
  style="grid-column: {item.startCol} / span {item.len};      
      grid-row: {item.startRow};  
      align-self: {item.isBottom ? 'end' : 'center'};"
>
  {item.title}
  {#if item.detailHeader}
    <div class="task-detail">
      <h2 class="m-0 text-xs text-primary-700 lg:text-[15px]">{item.detailHeader}</h2>
      <p class="mb-0 mt-2 text-[8px] font-medium text-secondary-500 lg:mt-1 lg:text-[12px]">
        {item.detailContent}
      </p>
    </div>
  {/if}
</div>

<style>
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

  @media (min-width: 1024px) {
    .task {
      border-left-width: 3px;
      padding: 8px 12px;
      margin: 10px;
      font-size: 14px;
    }
  }
</style>

<script lang="ts">
  import type { Item } from './Calendar';
  import BasicItem from './BasicItem.svelte';
  import DetailItem from './DetailItem.svelte';

  export let item: Item;
</script>

{#if item.detailHeader || item.detailContent}
  <DetailItem {item} className="variant-ghost-warning text-secondary-500 mt-[-5px]" />
{:else}
  <BasicItem {item} className="variant-ghost-warning text-secondary-500 mt-[-5px]" />
{/if}

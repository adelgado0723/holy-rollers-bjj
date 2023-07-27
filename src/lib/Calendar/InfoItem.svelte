<script lang="ts">
  import type { Item } from './Calendar';
  import BasicItem from './BasicItem.svelte';
  import DetailItem from './DetailItem.svelte';

  export let item: Item;
</script>

{#if item.detailHeader || item.detailContent}
  <DetailItem {item} className="variant-ghost-success mt-3 border-l-warning-500 text-secondary-500" />
{:else}
  <BasicItem {item} className="variant-ghost-success mt-3 border-l-warning-500 text-secondary-500" />
{/if}

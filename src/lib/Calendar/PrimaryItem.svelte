<script lang="ts">
  import type { Item } from './Calendar';
  import BasicItem from './BasicItem.svelte';
  import DetailItem from './DetailItem.svelte';

  export let item: Item;
</script>

{#if item.detailHeader || item.detailContent}
  <DetailItem {item} className="variant-ghost-surface rounded border-0 text-secondary-500 shadow-lg lg:shadow-xl " />
{:else}
  <BasicItem {item} className="variant-ghost-surface rounded border-0 text-secondary-500 shadow-lg lg:shadow-xl " />
{/if}

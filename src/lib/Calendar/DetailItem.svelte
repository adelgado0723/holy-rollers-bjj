<script lang="ts">
  import type { Item } from './Calendar';
  import BasicItem from './BasicItem.svelte';

  export let item: Item;
  export let className = '';
</script>

<BasicItem
  {item}
  className="{className} lg:after:border-6 lg:after:ml-[-6] lg:before:border-8 lg:before:ml-[-8px] lg:top-[calc(100%+8px)] lg:p-5 lg:rounded-2xl variant-glass-primary absolute left-0 top-[calc(100%+4px)] z-10 rounded-lg border border-primary-300 p-2 text-secondary-500 shadow-lg before:after:content-[' '] before:after:pointer-events-none before:after:absolute before:after:bottom-full before:after:left-1/3 before:after:h-0 before:after:w-0 before:after:border before:after:border-solid before:after:border-transparent before:ml-[-4px] before:border-4 before:border-b-primary-500 after:ml-[-3px] after:border-[3px] after:border-b-white"
/>

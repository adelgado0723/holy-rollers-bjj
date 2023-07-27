<script lang="ts">
  export let id: string;
</script>

<div
  {id}
  class="container card variant-glass-surface my-10 flex w-full max-w-6xl flex-col items-center justify-center py-16 text-center md:my-20 md:p-8 md:py-16 md:text-xl lg:text-2xl"
>
  <slot />
</div>

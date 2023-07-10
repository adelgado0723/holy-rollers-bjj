<script lang="ts">
  export let id: string
</script>

<div
  id={id}
	class="container card variant-glass-surface my-10 flex w-full max-w-6xl flex-col items-center justify-center p-8 pt-20 text-center md:my-20 md:text-xl lg:text-2xl"
>
  <slot/>
</div>

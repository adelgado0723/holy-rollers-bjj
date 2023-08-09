<script lang="ts">
  import DownloadIcon from '$lib/DownloadIcon.svelte';
</script>

<a
  href={$$restProps.href || ''}
  download={$$restProps.download || ''}
  class={$$restProps.class || 'btn variant-filled flex w-56 items-center justify-center gap-4'}
  ><slot /> <DownloadIcon /></a
>

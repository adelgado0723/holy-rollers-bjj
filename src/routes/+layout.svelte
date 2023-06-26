<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<AppShell regionPage="relative" slotPageHeader="relative  top-0 z-10">
	<!-- <svelte:fragment slot="header"> -->
	<!-- 	<AppBar class="sticky top-0 text-2xl md:text-4xl" padding="p-1 md:p-2"> -->
	<!-- 		<svelte:fragment slot="lead" -->
	<!-- 			><img -->
	<!-- 				alt="hamburger menu" -->
	<!-- 				class="m-0 w-10 p-0 md:w-14" -->
	<!-- 				src="/hamburger.svg" -->
	<!-- 			/></svelte:fragment -->
	<!-- 		> -->
	<!-- 		Holy Rollers BJJ -->
	<!-- 		<svelte:fragment slot="trail" -->
	<!-- 			><img -->
	<!-- 				alt="hamburger menu" -->
	<!-- 				class="m-0 w-10 p-0 md:w-14" -->
	<!-- 				src="/calendar.svg" -->
	<!-- 			/></svelte:fragment -->
	<!-- 		> -->
	<!-- 	</AppBar></svelte:fragment -->
	<!-- > -->

	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>

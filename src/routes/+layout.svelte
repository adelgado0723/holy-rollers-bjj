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

<AppShell>
	<svelte:fragment slot="header"
		><AppBar class="text-2xl md:text-4xl p-0 m-0" padding='p-1 md:p-2' >
			<svelte:fragment slot="lead"
				><img alt="hamburger menu" class="w-10 md:w-14 m-0 p-0" src="/hamburger.svg" /></svelte:fragment
			>
			Holy Rollers BJJ
			<svelte:fragment slot="trail"
				><img alt="hamburger menu" class="w-10 md:w-14 m-0 p-0"src="/calendar.svg" /></svelte:fragment
			>
		</AppBar></svelte:fragment
	>

	<div class="relative">
		<div class="absolute left-0 top-0 z-[-1] -translate-x-5 -translate-y-12">
			<div class="absolute left-1 top-1 z-[-2] h-32 w-32 md:h-48 md:w-48 rounded-full bg-primary-200" />
			<Avatar
				class=" z-[-1]"
				src="BJJClub/Class2_06-02-2023.jpeg"
				width="w-32 md:w-48"
				rounded="rounded-full"
			/>
		</div>
		<div class="absolute right-0 top-60 z-[-1] translate-x-5">
			<div class="absolute left-1 top-1 z-[-2] h-32 w-32 md:h-48 md:w-48 rounded-full bg-primary-200" />
			<Avatar
				class=" z-[-1]"
				src="BJJClub/Class4_06-02-2023.jpeg"
				width="w-32 md:w-48"
				rounded="rounded-full"
			/>
		</div>
	</div>
	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>

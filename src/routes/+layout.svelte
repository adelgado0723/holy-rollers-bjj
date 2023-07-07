<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Hero from '$lib/Hero.svelte';
	import Nav from '$lib/Nav.svelte';
	import type { SvelteComponent } from 'svelte';

	let navBar: SvelteComponent;
	let navBarHeight: number;
</script>

<AppShell
	on:scroll={() => {
		navBarHeight = navBar.scrollTop;
		console.log('position', navBar.position);
	}}
>
	<div
		class="section flex h-full w-full min-w-[370px] flex-col items-center justify-center {navBarHeight ===
			0 && 'bg-red-500'}"
	>
		<Hero />
		<Nav bind:this={navBar} />
		<slot />
	</div>
</AppShell>

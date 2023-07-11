<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Hero from '$lib/Hero.svelte';

	let navBar: HTMLElement;
	let navBarHeight: number;
	const onScroll = () => {
		navBarHeight = navBar.getBoundingClientRect().top;
	};
</script>

<AppShell on:scroll={onScroll}>
	<div
		id="top"
		class="section flex h-full w-full min-w-[370px] flex-col items-center justify-center"
	>
		<Hero />
		<nav
			bind:this={navBar}
			class="app-bar md:text-md min-h-14 variant-glass-secondary sticky top-0 z-20 mt-6 flex w-[100vw] py-4 text-xs md:mt-0 md:text-lg lg:text-xl"
		>
			<a
				href="#top"
				class="transition-opacity duration-200 ease-in-out {navBarHeight != 0
					? 'w-0 opacity-0'
					: ''}"
				><header
					class="md:absolute crumb ml-4 md:ml-6 xl:ml-8 text-lg font-heading-token md:text-xl lg:ml-6 lg:text-2xl xl:text-3xl"
				>
					HR
				</header></a
			>
			<ol class="flex h-full w-full flex-row items-center justify-center gap-x-2 md:gap-x-4">
				<li class="crumb sm:hover:text-primary-500">
					<a href="#about" class="">About</a>
				</li>
				<li class="crumb-separator" aria-hidden>/</li>
				<li class="crumb sm:hover:text-primary-500">
					<a class="" href="#schedule">Schedule</a>
				</li>
				<li class="crumb-separator" aria-hidden>/</li>
				<li class="crumb sm:hover:text-primary-500">
					<a class="" href="#contact-us">Contact Us</a>
				</li>
				<li class="crumb-separator" aria-hidden>/</li>
				<li class="crumb sm:hover:text-primary-500">
					<a class="" href="#get-started">Get Started</a>
				</li>
			</ol>
		</nav>
		<slot />
	</div>
</AppShell>

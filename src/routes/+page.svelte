<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div
	class=" container relative mx-auto flex h-full w-full flex-col items-center justify-center gap-10 scroll-smooth"
>
	<div class="relative mt-32 flex h-full w-full flex-col items-center justify-center">
		<div class="absolute left-0 top-0 z-[-1] -translate-x-5 -translate-y-12">
			<div
				class="absolute left-1 top-1 z-[-2] h-32 w-32 rounded-full bg-primary-200 md:h-48 md:w-48"
			/>
			<Avatar
				class=" z-[-1]"
				src="BJJClub/Class2_06-02-2023.jpeg"
				width="w-32 md:w-48"
				rounded="rounded-full"
			/>
		</div>

		<div
			class="m-4 mt-[4.5rem] flex flex-col items-center justify-center gap-6 md:m-8 md:mt-2 md:gap-8"
		>
			<div class="text-4xl text-secondary-500 font-token md:text-6xl">BELLEVIEW UMC</div>
			<div class="text-5xl font-heading-token md:text-8xl">Holy Rollers</div>
			<div class="text-4xl text-secondary-500 font-token md:text-6xl">JIU JITSU CLUB</div>
		</div>

		<div class="absolute right-0 top-60 z-[-1] translate-x-5">
			<div
				class="absolute left-1 top-1 z-[-2] h-32 w-32 rounded-full bg-primary-200 md:h-48 md:w-48"
			/>
			<Avatar
				class=" z-[-1]"
				src="BJJClub/Class4_06-02-2023.jpeg"
				width="w-32 md:w-48"
				rounded="rounded-full"
			/>
		</div>
	</div>
	<ol
		class="breadcrumb sticky top-0 m-24 box-border flex h-48 w-[100vw] flex-row justify-center bg-secondary-500"
	>
		<li class="crumb">
			<a href="#who-we-are" class="anchor">Who We Are</a>
		</li>
		<li class="crumb-separator" aria-hidden>/</li>
		<li class="crumb"><a class="anchor" href="/schedule">Schedule</a></li>
		<li class="crumb-separator" aria-hidden>/</li>
		<li class="crumb"><a class="anchor" href="#location">Location</a></li>
		<li class="crumb-separator" aria-hidden>/</li>
		<li class="crumb"><a class="anchor" href="#class-overview">Class Overview</a></li>
		<li class="crumb-separator" aria-hidden>/</li>
		<li class="crumb"><a class="anchor" href="#register">Register</a></li>
		<li class="crumb-separator" aria-hidden>/</li>
		<li class="crumb"><a class="anchor" href="#contact-us">Contact Us</a></li>
	</ol>

	<div id="who-we-are" class="m-3 w-full pt-14 md:m-4">
		<h1>Who we are</h1>
		<p class="text-lg">
			Hosted by Belleview United Methodist Church, the Holy Rollers BJJ club is a faith based
			martial arts programed aimed at teaching children ages 4-16 discipline and self-defense
		</p>
	</div>

	<div id="schedule" class="m-3 w-full pt-14 md:m-4">
		<h1>Schedule</h1>
		<p class="m-3 md:m-4">This is a test paragraph... calendar. Add to calender option?</p>
	</div>

	<div id="location" class="m-3 w-full pt-14 md:m-4">
		<h1>Location</h1>
		<p class="m-3 md:m-4">This is a test paragraph... Include a map?</p>
	</div>

	<div id="class-overview" class="m-3 w-full pt-14 md:m-4">
		<h1>Class Overview</h1>
		<p class="m-3 md:m-4">
			This is a test paragraph... include a description of the class structure
		</p>
	</div>

	<div id="register" class="m-3 w-full pt-14 md:m-4">
		<h1>Register</h1>
		<p class="m-3 md:m-4">This is a test paragraph... download registration forms</p>
	</div>

	<div id="contact-us" class="m-3 w-full pt-14 md:m-4">
		<h1>Contact Us</h1>
		<p class="m-3 md:m-4">This is a test paragraph... include a contact form?</p>
	</div>

	<div id="test" class="m-3 w-full pt-14 md:m-4">
		<h1>Test</h1>
		<p class="m-3 md:m-4">This is a test paragraph</p>
	</div>
	<div id="test" class="m-3 w-full pt-14 md:m-4">
		<h1>Test</h1>
		<p class="m-3 md:m-4">This is a test paragraph</p>
	</div>
</div>

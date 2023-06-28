<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div
	class=" container relative mx-auto flex h-full w-full flex-col items-center justify-center gap-10 scroll-smooth"
>
	<div class="relative flex h-full w-full flex-col items-center justify-center">
		<div class="absolute left-0 top-0 z-[-1] -translate-x-6 -translate-y-8">
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

		<div class="absolute right-0 top-80 z-[-1] translate-x-5">
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
	<nav
		class="md:text-md variant-glass-secondary sticky top-0 z-20 mt-20 h-14  w-[100vw] py-4 text-sm md:mt-0 md:h-48"
	>
		<ol class="flex h-full w-full flex-row items-center gap-x-4 sm:justify-center">
			<li class="crumb sm:hidden">
				<img src="hamburger.svg" class="h-12" alt="hamburger menu icon" />
			</li>
			<li class="crumb hidden sm:flex">
				<a href="#who-we-are" class="">Who We Are</a>
			</li>
			<li class="crumb-separator hidden sm:flex" aria-hidden>/</li>
			<li class="crumb hidden sm:flex"><a class="" href="/schedule">Schedule</a></li>
			<li class="crumb-separator hidden sm:flex" aria-hidden>/</li>
			<li class="crumb hidden sm:flex"><a class="" href="#location">Location</a></li>
			<li class="crumb-separator hidden sm:flex" aria-hidden>/</li>
			<li class="crumb hidden sm:flex"><a class="" href="#class-overview">Class Overview</a></li>
			<li class="crumb-separator hidden sm:flex" aria-hidden>/</li>
			<li class="crumb hidden sm:flex"><a class="" href="#register">Register</a></li>
			<li class="crumb-separator hidden sm:flex" aria-hidden>/</li>
			<li class="crumb hidden sm:flex"><a class="" href="#contact-us">Contact Us</a></li>
		</ol>
	</nav>
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

	<div id="location" class="card variant-glass m-3 w-full p-8 pt-14 md:m-4">
		<header class="card-header mb-24 text-center text-7xl font-heading-token">Location</header>

		<section class="m-3 flex flex-row items-center justify-center gap-4 md:m-4">
			<p>
				Located accross Belleview Elementary School, Belleview UMC sponsors and hosts the Holy
				Rollers BJJ Club. <br />
				<br />
				Belleview United Methodist Church <br />
				5640 SE Brown Rd, Belleview, FL 34420
			</p>
			<a
				href="https://www.google.com/maps/place/Belleview+United+Methodist+Church/@29.0555551,-82.0599103,17z/data=!3m1!4b1!4m6!3m5!1s0x88e7d1c600279c15:0xba8cf7130c9e9460!8m2!3d29.0555504!4d-82.0573354!16s%2Fg%2F1tf1cl1r?entry=ttu"
				class="text-primary-500 no-underline hover:text-primary-600"
			>
				On Google Maps 📌
			</a>
		</section>
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
</div>

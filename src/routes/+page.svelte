<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import CalendarController from '$lib/CalendarController.svelte';
</script>

<div
	class="section flex h-full w-full min-w-[370px] flex-col items-center justify-center overflow-auto"
>
	<div class="mb-16 flex w-full flex-col items-center justify-center gap-8">
		<div class="relative flex w-40 items-center justify-center self-start md:w-52 lg:w-64 xl:w-80">
			<div
				class="absolute left-1 top-1 z-[-2] h-36 w-36 rounded-full bg-primary-200 md:h-48 md:w-48 lg:h-60 lg:w-60 xl:h-72 xl:w-72"
			/>
			<Avatar
				class=" z-[-1]"
				src="BJJClub/Class2_06-02-2023.jpeg"
				width="w-36 md:w-48 lg:w-60 xl:w-72"
				rounded="rounded-full"
			/>
		</div>
		<div class=" container flex flex-col items-center justify-center gap-6 md:gap-8">
			<div class="text-4xl text-secondary-500 font-token md:text-6xl">BELLEVIEW UMC</div>
			<div class="text-5xl font-heading-token md:text-8xl">Holy Rollers</div>
			<div class="text-4xl text-secondary-500 font-token md:text-6xl">JIU JITSU CLUB</div>
		</div>
		<div class="relative flex w-40 items-center justify-center self-end md:w-52 lg:w-64 xl:w-80">
			<div
				class="absolute left-1 top-1 z-[-2] h-36 w-36 rounded-full bg-primary-200 md:h-48 md:w-48 lg:h-60 lg:w-60 xl:h-72 xl:w-72"
			/>
			<Avatar
				class=" z-[-1]"
				src="BJJClub/Class4_06-02-2023.jpeg"
				width="w-36 md:w-48 lg:w-60 xl:w-72"
				rounded="rounded-full"
			/>
		</div>
	</div>
	<nav
		class="app-bar md:text-md variant-glass-secondary sticky top-0 z-20 mt-6 h-14 w-[100vw] py-4 text-xs md:mt-0 md:h-16 md:text-lg lg:text-xl"
	>
		<ol class="flex h-full w-full flex-row items-center justify-center gap-x-4">
			<!-- <li class="crumb sm:hidden"> -->
			<!-- 	<img src="hamburger.svg" class="h-12" alt="hamburger menu icon" /> -->
			<!-- </li> -->
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

	<div
		id="about"
		class="container card variant-glass-surface my-10 flex w-full max-w-4xl flex-col items-center justify-center p-8 pt-20 text-center md:my-20 md:text-lg lg:text-xl"
	>
		<header class="card-header mb-6 text-5xl font-heading-token md:mb-8">About</header>

		<div
			class="m-3 flex w-full flex-col items-center justify-center md:m-4 md:block md:text-justify"
		>
			<img
				src="/BJJClub/Class6_06-02-2023.jpeg"
				alt="BJJ Class wearing uniforms"
				class="xl:96 float-right mb-4 w-96 object-cover md:ml-8 md:w-80"
			/>
			<p class="my-4 md:my-0 md:mb-6 lg:mb-8">
				We are a fresh expression of our faith. Combining scripture and techniques we have learned
				from Brazillian Jiu Jitsu (BJJ). We believe self-defense encompasses more than just
				protecting your physical body.
			</p>

			<p class="my-4 md:my-6 lg:my-8">
				Coaches Andy and LeeAnne volunteer their time and are BJJ blue belts with 10+ years of
				experience in the sport and 5+ years of experience teaching kids classes. We aim to make
				each class fun, teaching Biblical scriptures, and introducing kids to forming a habit of
				prayer.
			</p>

			<p class="mt-4 md:mt-6 lg:mt-8">
				These classes are free and open to kids 4 years old - 16 years old. If you are interested in
				signing your child up please click 'Get Started'!
			</p>
		</div>
		<a href="#get-started" class="btn variant-filled m-5">Get Started</a>
	</div>

	<div id="schedule" class="m-3 w-full pt-14 md:m-4">
		<h1>Schedule</h1>
		<p class="m-3 md:m-4">This is a test paragraph... calendar. Add to calender option?</p>
		<CalendarController />
	</div>

	<div
		id="contact-us"
		class="container card variant-glass-surface my-10 w-full max-w-4xl p-8 pt-20 md:my-20 md:text-lg lg:text-xl"
	>
		<header class="card-header mb-6 text-center text-5xl font-heading-token md:mb-8">
			Contact Us
		</header>

		<div class="m-3 flex flex-col items-center justify-center gap-4 md:m-4">
			<p class="unstyled my-6">
				Located accross Belleview Elementary School, Belleview UMC sponsors and hosts the Holy
				Rollers BJJ Club. <br />
			</p>
			<div
				class="flex w-full flex-col items-start justify-center gap-6 md:flex-row md:justify-evenly"
			>
				<div class="h-full w-full">
					<h3 class="unstyled mb-10 text-center text-2xl md:mb-0">Address</h3>
					<div
						class="my-0 flex flex-col items-center justify-center gap-10 md:my-8 md:flex-row md:justify-start md:gap-0"
					>
						<div>
							Belleview United Methodist Church <br />
							5640 SE Brown Rd, <br />
							Belleview, FL 34420
						</div>
						<a
							href="https://www.google.com/maps/place/Belleview+United+Methodist+Church/@29.0555551,-82.0599103,17z/data=!3m1!4b1!4m6!3m5!1s0x88e7d1c600279c15:0xba8cf7130c9e9460!8m2!3d29.0555504!4d-82.0573354!16s%2Fg%2F1tf1cl1r?entry=ttu"
							class="unstyled text-center text-primary-500 hover:text-primary-600"
						>
							Google Maps 📌
						</a>
					</div>
				</div>
				<div class="h-full w-full">
					<h3 class="unstyled text-center text-2xl">Email</h3>
					<p
						class="unstyled my-4 flex h-full w-full flex-col items-center justify-center text-primary-500 hover:text-primary-600 md:my-8"
					>
						<a href="mailto:help@holyrollersbjj.com" class="unstyled text-center">
							help@holyrollersbjj.com <br />
							📨
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>

	<div id="get-started" class="m-3 w-full pt-14 md:m-4">
		<h1>Get Started</h1>
		<p class="m-3 md:m-4">
			This is a test paragraph... include a description of the class structure Steps to get started:
		</p>
		<ol>
			<li>Download and fill out the registration forms</li>
			<li>Bring the forms to your first class</li>
			<li>Have fun!</li>
		</ol>

		<div id="register" class="m-3 w-full pt-14 md:m-4">
			<h1>Register</h1>
			<p class="m-3 md:m-4">
				This service is <span class="italic">free</span> to the community and currently enrolling new
				students. Once capacity is reaches, we will start a wait list.
			</p>
		</div>
	</div>
</div>

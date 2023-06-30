<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div
	class=" container relative mx-auto flex h-full w-full flex-col items-center justify-center gap-28 scroll-smooth"
>
	<div class="relative my-28 flex h-full w-full flex-col items-center justify-center">
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
		class="app-bar md:text-md variant-glass-secondary sticky top-0 z-20 mt-20 h-14 w-[100vw] py-4 text-sm md:mt-0 md:h-48"
	>
		<ol
			class="md:text-md flex h-full w-full flex-row items-center justify-center gap-x-4 text-[12px] sm:text-sm"
		>
			<!-- <li class="crumb sm:hidden"> -->
			<!-- 	<img src="hamburger.svg" class="h-12" alt="hamburger menu icon" /> -->
			<!-- </li> -->
			<li class="crumb sm:hover:text-primary-500">
				<a href="#about" class="">About</a>
			</li>
			<li class="crumb-separator" aria-hidden>/</li>
			<li class="crumb sm:hover:text-primary-500">
				<a class="" href="/schedule">Schedule</a>
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

	<div id="about" class="card variant-glass-surface m-3 w-full p-8 pt-14 md:m-4">
		<header class="card-header mb-24 text-center text-5xl font-heading-token">Contact Us</header>

		<div class="m-3 flex flex-col items-center justify-center gap-8 md:m-4">
			<p class=" unstyled text-lg">
				We are a fresh expression of our faith. Combining scripture and techniques we have learned
				from Brazillian Jiu Jitsu (BJJ). We believe self-defense encompasses more than just
				protecting your physical body. Coaches Andy and LeeAnne volunteer their time and are BJJ
				blue belts with 10+ years of experience in the sport and 5+ years of experience teaching
				kids classes. We aim to make each class fun, teaching Biblical scriptures, and introducing
				kids to forming a habit of prayer. These classes are free and open to kids 4 years old - 16
				years old. If you are interested in signing your child up please click 'Get Started'!
			</p>
      <button type="button" class="btn-icon bg-gradient-to-br variant-gradient-warning-success"> test</button>
			<a href="#get-started" class="unstyled btn btn-icon">Get Started</a>
		</div>
	</div>

	<div id="schedule" class="m-3 w-full pt-14 md:m-4">
		<h1>Schedule</h1>
		<p class="m-3 md:m-4">This is a test paragraph... calendar. Add to calender option?</p>
	</div>

	<div id="contact-us" class="card variant-glass-surface m-3 w-full p-8 pt-14 md:m-4">
		<header class="card-header mb-24 text-center text-5xl font-heading-token">Contact Us</header>

		<div class="m-3 flex flex-col items-center justify-center gap-8 md:m-4">
			<p class="unstyled my-8 text-xl">
				Located accross Belleview Elementary School, Belleview UMC sponsors and hosts the Holy
				Rollers BJJ Club. <br />
			</p>
			<div class="flex w-full items-start justify-evenly gap-10">
				<div class="h-full w-full">
					<h3 class="unstyled text-center text-2xl">Address</h3>
					<p class="unstyled flex flex-col items-center justify-start text-lg">
						<br />
						<a
							href="https://www.google.com/maps/place/Belleview+United+Methodist+Church/@29.0555551,-82.0599103,17z/data=!3m1!4b1!4m6!3m5!1s0x88e7d1c600279c15:0xba8cf7130c9e9460!8m2!3d29.0555504!4d-82.0573354!16s%2Fg%2F1tf1cl1r?entry=ttu"
							class="unstyled text-primary-500 hover:text-primary-600"
						>
							Belleview United Methodist Church <br />
							5640 SE Brown Rd, Belleview, FL 34420 <br />
						</a>
						<a
							href="https://www.google.com/maps/place/Belleview+United+Methodist+Church/@29.0555551,-82.0599103,17z/data=!3m1!4b1!4m6!3m5!1s0x88e7d1c600279c15:0xba8cf7130c9e9460!8m2!3d29.0555504!4d-82.0573354!16s%2Fg%2F1tf1cl1r?entry=ttu"
							class="unstyled text-center text-primary-500 hover:text-primary-600"
						>
							<br />
							Google Maps <br />
							📌
						</a>
					</p>
				</div>
				<div class="h-full w-full">
					<h3 class="unstyled text-center text-3xl font-token">Email</h3>
					<p
						class=" unstyled flex h-full w-full flex-col items-center justify-center text-xl text-primary-500 hover:text-primary-600"
					>
						<br />
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
			<p class="m-3 md:m-4">This is a test paragraph... download registration forms</p>
		</div>
	</div>

	<div id="contact-us" class="m-3 w-full pt-14 md:m-4">
		<h1>Contact Us</h1>
		<p class="m-3 md:m-4">This is a test paragraph... include a contact form?</p>
	</div>
</div>

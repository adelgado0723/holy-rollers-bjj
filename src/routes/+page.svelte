<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class=" container relative mx-auto flex h-full flex-col items-center justify-center gap-10">
	<div class="m-8 flex flex-col items-center justify-center gap-8">
		<div class="text-6xl text-secondary-500 font-token">BELLEVIEW UMC</div>
		<div class="text-8xl font-heading-token">Holy Rollers</div>
		<div class="text-6xl text-secondary-500 font-token">JIU JITSU CLUB</div>
	</div>
	<div class="absolute left-0 top-0 z-[-1] -translate-x-28 -translate-y-12">
		<div class="absolute left-1 top-1 z-[-2] h-48 w-48 rounded-full bg-primary-200" />
		<Avatar
			class=" z-[-1]"
			src="BJJClub/Class2_06-02-2023.jpeg"
			width="w-48"
			rounded="rounded-full"
		/>
	</div>
	<div class="absolute right-0 top-52 z-[-1] translate-x-28">
		<div class="absolute left-1 top-1 z-[-2] h-48 w-48 rounded-full bg-primary-200" />
		<Avatar
			class=" z-[-1]"
			src="BJJClub/Class4_06-02-2023.jpeg"
			width="w-48"
			rounded="rounded-full"
		/>
	</div>

	<ol class="breadcrumb flex h-full flex-row justify-center">
		<li class="crumb">
			<a href="#who-we-are" class="anchor">Who We Are</a>
		</li>
		<li class="crumb-separator" aria-hidden>/</li>
		<li class="crumb"><a class="anchor" href="/schedule">Schedule</a></li>
	</ol>

	<div class="m-4">
		<h1 id="who-we-are">Who we are</h1>
		<p class="text-lg">
			Hosted by Belleview United Methodist Church, the Holy Rollers BJJ club is a faith based
			martial arts programed aimed at teaching children ages 4-16 discipline and self-defense
		</p>
	</div>

	<div class="m-4 w-full">
		<h1>Schedule</h1>
		<p class="m-4">This is a test paragraph</p>
	</div>
</div>

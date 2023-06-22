<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="container mx-auto flex h-full flex-col items-center justify-center gap-10">
	<div class="m-8 flex flex-col items-center justify-center gap-8 space-y-5">
		<div class="text-6xl text-secondary-500 font-token">BELLEVIEW UMC</div>
		<div class="text-8xl font-heading-token">Holy Rollers</div>
		<div class="text-6xl text-secondary-500 font-token">JIU JITSU CLUB</div>
	</div>

	<ol class="breadcrumb flex-row justify-center">
		<li class="crumb">
			<a href="#who-we-are" class="anchor">Who We Are</a>
		</li>
		<li class="crumb-separator" aria-hidden>/</li>
		<li class="crumb"><a class="anchor" href="/schedule">Schedule</a></li>
	</ol>

	<div class="m-4 space-y-5">
		<h1 id="who-we-are">Who we are</h1>
		<p class="text-lg">
			Hosted by Belleview United Methodist Church, the Holy Rollers BJJ club is a faith based
			martial arts programed aimed at teaching children ages 4-16 discipline and self-defense
		</p>
	</div>

	<div class="m-4 flex items-center justify-center gap-10">
		<div>
			<div
				class="absolute z-0 h-32 w-32 translate-x-1 translate-y-0.5 rounded-full bg-secondary-400"
			/>
			<Avatar
				class="absolute"
				src="BJJClub/Class2_06-02-2023.jpeg"
				width="w-32"
				rounded="rounded-full"
			/>
		</div>
		<div>
			<div class="absolute h-32 w-32 translate-x-1 translate-y-0.5 rounded-full bg-primary-200" />
			<Avatar src="BJJClub/Class4_06-02-2023.jpeg" width="w-32" rounded="rounded-full" />
		</div>
	</div>
</div>

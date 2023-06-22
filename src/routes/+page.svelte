<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="container h-full mx-auto gap-10 flex flex-col justify-center items-center">
	<div class="space-y-5 m-4 flex flex-col items-center justify-center gap-8">
		<div class="font-token text-6xl text-secondary-500">BELLEVIEW</div>
		<div class="font-heading-token text-8xl">Holy Rollers</div>
		<div class="font-token text-6xl text-secondary-500">JIU JITSU</div>
	</div>

	<ol class="breadcrumb flex-row justify-center">
		<li class="crumb"><a rel="noopener" target="_blank" href="#who-we-are"class="anchor">Who We Are</a></li>
		<li class="crumb-separator" aria-hidden>/</li>
		<li class="crumb"><a class="anchor" href="/schedule">Schedule</a></li>
	</ol>

	<div class="space-y-5 m-4">
  <h1 id="who-we-are">Who we are</h1>
		<p class="text-lg">
			Hosted by Belleview United Methodist Church, the Holy Rollers BJJ club is a faith based
			martial arts programed aimed at teaching children ages 4-16 discipline and self-defense
		</p>
	</div>

	<div class="images flex gap-10 items-center justify-center m-4">
		<div>
			<div class="bg-primary-500 fixed w-32 h-32 rounded-full translate-x-1 translate-y-0.5" />
			<Avatar
				class="relative"
				src="BJJClub/Class5_06-02-2023.jpeg"
				width="w-32"
				rounded="rounded-full"
			/>
		</div>
		<div>
			<div class="bg-secondary-400 fixed w-32 h-32 rounded-full translate-x-1 translate-y-0.5" />
			<Avatar
				class="relative"
				src="BJJClub/Class2_06-02-2023.jpeg"
				width="w-32"
				rounded="rounded-full"
			/>
		</div>
		<div>
			<div class="bg-primary-200 -500 fixed w-32 h-32 rounded-full translate-x-1 translate-y-0.5" />
			<Avatar
				class="relative"
				src="BJJClub/Class4_06-02-2023.jpeg"
				width="w-32"
				rounded="rounded-full"
			/>
		</div>
	</div>
</div>

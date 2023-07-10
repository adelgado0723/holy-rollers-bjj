<script>
	import CardContainer from './CardContainer.svelte';
</script>

<CardContainer id="about">
	<header class="card-header my-auto mb-6 text-5xl font-heading-token md:mb-8">About</header>

	<div class="m-3 flex w-full flex-col items-center justify-center md:m-4 md:block md:text-justify">
		<img
			src="/BJJClub/Class6_06-02-2023.jpeg"
			alt="BJJ Class wearing uniforms"
			class="float-right mb-4 w-96 object-cover md:ml-8 md:w-80"
		/>
		<p class="md:text-xl lg:text-2xl my-4 md:my-0 md:mb-6 lg:mb-8">
			We are a fresh expression of our faith. Combining scripture and techniques we have learned
			from Brazillian Jiu Jitsu (BJJ). We believe self-defense encompasses more than just protecting
			your physical body.
		</p>

		<p class="my-4 md:my-6 lg:my-8">
			Coaches Andy and LeeAnne volunteer their time and are BJJ blue belts with 10+ years of
			experience in the sport and 5+ years of experience teaching kids classes. We aim to make each
			class fun, teaching Biblical scriptures, and introducing kids to forming a habit of prayer.
		</p>

		<p class="mt-4 md:mt-6 lg:mt-8">
			These classes are free and open to kids 4 years old - 16 years old. If you are interested in
			signing your child up please click 'Get Started'!
		</p>
	</div>
	<a href="#get-started" class="btn variant-filled m-5">Get Started</a>
</CardContainer>

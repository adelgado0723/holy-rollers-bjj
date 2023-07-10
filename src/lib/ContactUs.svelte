<script>
	import CardContainer from './CardContainer.svelte';
</script>

<CardContainer id="contact-us">
	<header class="card-header mb-6 text-center text-5xl font-heading-token md:mb-8">
		Contact Us
	</header>

	<div class="m-3 flex flex-col items-center justify-center gap-4 text-justify md:m-4">
		<p class="unstyled my-6">
			Located accross Belleview Elementary School, Belleview UMC sponsors and hosts the Holy Rollers
			BJJ Club. <br />
		</p>
		<div
			class="flex w-full flex-col items-start justify-center gap-6 md:flex-row md:justify-evenly"
		>
			<div class="mb-5 h-full w-full md:mb-0">
				<h3 class="unstyled mb-5 text-center text-2xl">Address</h3>
				<div
					class="my-0 flex flex-col items-center justify-center gap-5 md:flex-row md:justify-start"
				>
					<div class="text-center">
						Belleview United Methodist Church <br />
						5640 SE Brown Rd, <br />
						Belleview, FL 34420
					</div>
					<a
						href="https://www.google.com/maps/place/Belleview+United+Methodist+Church/@29.0555551,-82.0599103,17z/data=!3m1!4b1!4m6!3m5!1s0x88e7d1c600279c15:0xba8cf7130c9e9460!8m2!3d29.0555504!4d-82.0573354!16s%2Fg%2F1tf1cl1r?entry=ttu"
						class="unstyled btn variant-filled text-center text-primary-500 hover:text-primary-600"
					>
						Google Maps 📌
					</a>
				</div>
			</div>
			<div class="h-full w-full">
				<h3 class="unstyled text-center text-2xl">Email</h3>
				<p
					class="unstyled flex h-full w-full flex-col items-center justify-center text-primary-500 hover:text-primary-600"
				>
					<a href="mailto:help@holyrollersbjj.com" class="unstyled text-center">
						help@holyrollersbjj.com <br />
						📨
					</a>
				</p>
			</div>
		</div>
	</div>
</CardContainer>

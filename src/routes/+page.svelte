<script lang="ts">
	import About from '$lib/About.svelte';
	import CalendarController from '$lib/CalendarController.svelte';
	import ContactUs from '$lib/ContactUs.svelte';
	import GetStarted from '$lib/GetStarted.svelte';
</script>

<About />

<div id="schedule" class="m-3 w-full pt-14 md:m-4">
	<h1>Schedule</h1>
	<p class="m-3 md:m-4">This is a test paragraph... calendar. Add to calender option?</p>
	<CalendarController />
</div>

<ContactUs />
<GetStarted />

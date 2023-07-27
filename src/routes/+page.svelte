<script lang="ts">
  import About from '$lib/About.svelte';
  import CalendarController from '$lib/CalendarController.svelte';
  import ContactUs from '$lib/ContactUs.svelte';
  import CardContainer from '$lib/CardContainer.svelte';
  import GetStarted from '$lib/GetStarted.svelte';
</script>

<About />

<!-- <div id="schedule" class="m-3 w-full pt-14 md:m-4"> -->
<CardContainer id="schedule">
  <h1>Schedule</h1>
  <p class="my-5 md:my-6">Check out our BJJ fundamentals classes, Wednesdays at 6:30pm.</p>
  <CalendarController />
</CardContainer>

<ContactUs />
<GetStarted />

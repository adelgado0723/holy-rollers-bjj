<script lang="ts">
  import CalendarController from '$lib/CalendarController.svelte';
  import CardContainer from '$lib/CardContainer.svelte';
</script>

<CardContainer id="schedule">
  <header class="card-header my-6 text-center text-5xl font-heading-token">Schedule</header>
  <p class="my-5 md:my-6">Check out our BJJ fundamentals classes, Wednesdays at 6:30pm.</p>
  <CalendarController />
</CardContainer>

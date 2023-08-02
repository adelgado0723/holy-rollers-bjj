<script lang="ts">
  import CardContainer from '$lib/CardContainer.svelte';
</script>

<CardContainer id="get-started">
  <header class="card-header my-6 text-center text-5xl font-heading-token">Get Started</header>

  <p class="m-3 md:m-8">
    This service is <span class="italic">free</span> to the community and currently enrolling new students. Once capacity
    is reached, we will start a wait list.
  </p>

  <div class="m-4 mb-8">
    <div class="flex items-center justify-center gap-4">
      <header class="m-4 text-4xl font-heading-token">Register</header>

      Download and fill out the registration forms. Bring the forms to your first class. Have funl!
    </div>
    <a href="documents/ActivityWaiverForm.pdf" download="ActivityWaiverForm.pdf" class="btn variant-filled"
      >Activity Waiver 🢃</a
    >
  </div>

  <div class="m-4">
    <div class="flex items-center justify-center gap-4">
      <header class="m-4 text-4xl font-heading-token">Guildlines</header>
      Prepare by reading the class guidelines. This will help you prepare to get the most out of your training.
    </div>
    <a href="documents/ClassGuidelines.pdf" download="ClassGuidelines.pdf" class="btn variant-filled"
      >Class Guidelines 🢃</a
    >
  </div>
</CardContainer>

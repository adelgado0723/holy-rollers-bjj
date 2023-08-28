<script lang="ts">
  import CardContainer from '$lib/CardContainer.svelte';
  import DownloadButton from '$lib/DownloadButton.svelte';
</script>

<CardContainer id="get-started">
  <header class="card-header my-6 text-center text-5xl font-heading-token">Get Started</header>

  <p class="m-3 md:m-8">
    This service is <span class="italic">free</span> to the community and currently enrolling new students. Once capacity
    is reached, we will start a wait list.
  </p>

  <div class="m-4 mb-8">
    <header class="m-8 text-4xl font-heading-token">Register</header>
    <div class="mx-10 flex items-center justify-center gap-14 text-left">
      Download and fill out the registration forms. Bring the forms to your first class. Have funl!
      <DownloadButton href="documents/ActivityWaiverForm.pdf" download="ActivityWaiverForm.pdf"
        >Activity Waiver</DownloadButton
      >
    </div>
  </div>

  <div class="m-4">
    <header class="m-8 text-4xl font-heading-token">Guildlines</header>
    <div class="mx-10 flex items-center justify-center gap-14 text-left">
      Prepare by reading the class guidelines. This will help you prepare to get the most out of your training.
      <DownloadButton href="documents/ClassGuidelines.pdf" download="ClassGuidelines.pdf"
        >Class Guidelines</DownloadButton
      >
    </div>
  </div>
</CardContainer>

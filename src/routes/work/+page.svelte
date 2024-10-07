<script>
  import Page from "$lib/Page.svelte";
  import LoadScreen from "../../components/LoadScreen.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import Work from "../../modules/Work.svelte";

  let menuOpen = false;

  // LoadScreen
  let isLoading = true;
  setTimeout(() => {
    isLoading = false;
  }, 2000);
</script>

{#if isLoading}
  <LoadScreen />
{:else}
  <div>
    <Navbar {menuOpen} on:toggleMenu={() => (menuOpen = !menuOpen)} />
    <Work />
  </div>
{/if}

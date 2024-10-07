<script>
  import Page from "$lib/Page.svelte";
  import LoadScreen from "../../components/LoadScreen.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import About from "../../modules/About.svelte";
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
    <About />
  </div>
{/if}

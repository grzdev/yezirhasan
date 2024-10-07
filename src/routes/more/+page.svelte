<script>
  import Page from "$lib/Page.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import More from "../../modules/More.svelte";
  let menuOpen = false;
</script>

<div>
  <Navbar {menuOpen} on:toggleMenu={() => (menuOpen = !menuOpen)} />
  <More />
</div>

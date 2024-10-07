<script>
  import Page from "$lib/Page.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import Contact from "../../modules/Contact.svelte";
  let menuOpen = false;
</script>

<div>
  <Navbar {menuOpen} on:toggleMenu={() => (menuOpen = !menuOpen)} />
  <Contact />
</div>

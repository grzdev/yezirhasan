<script>
    import Page from "$lib/Page.svelte";
    import LoadScreen from "../../components/LoadScreen.svelte";
    import AllArticles from "../../modules/AllArticles.svelte";
  
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
      <AllArticles/>
    </div>
  {/if}
  
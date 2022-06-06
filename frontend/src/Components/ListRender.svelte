<script>
   import { InlineLoading } from "carbon-components-svelte";
  import { onMount } from "svelte";
  let value = [];
  let loading = false;
  onMount(async () => {
    loading = true;
    let data = await fetch("http://localhost:1337/api/reviews/");
    let v = await data.json();
    value = v.data;
    loading = false;
  });
</script>

{#if loading}
<InlineLoading status="active" description="Submitting..." />
{:else}
  <ul class="list">
    {#each value as { id, attributes }}
      <li class="elements">
        <div class="card">
          <div class="container">
            <h4><b>Title : {attributes.title}</b></h4>
            <p>Rating : {attributes.rating}</p>
            <hr />
            <p>Body : {attributes.body}</p>
          </div>
        </div>
      </li>
    {/each}
  </ul>
{/if}

<style>
  .elements {
    list-style: none;
    margin-bottom: 55px;
  }
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(255, 86, 86, 0.2);
    transition: 0.3s;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }
</style>

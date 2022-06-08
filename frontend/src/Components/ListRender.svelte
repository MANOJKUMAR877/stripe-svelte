<script>
  import { InlineLoading } from "carbon-components-svelte";
  import { Toast } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { identity } from "svelte/internal";
  export let token;
  let value = [];
  let editId = "";
  let loading = false;
  let data = {
    title: "",
    rating: "",
    body: "",
  };
  onMount(async () => {
    loading = true;
    let data = await fetch("http://localhost:1337/api/reviews/");
    let v = await data.json();
    value = v.data;
    loading = false;
  });
  const edit = (e) => {
    editId = e;
    console.log(value, editId);
    let find = value.filter((v) => (v.id === editId ? v.attributes : null));
    if (find && find[0] && find[0].attributes) {
      data.title = find[0].attributes.title;
      data.rating = find[0].attributes.rating;
      data.body = find[0].attributes.body;
    }
  };
  const save = (e) => {
    fetch(`http://localhost:1337/api/reviews/${e}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: data }),
    });
    editId = "";
  };
  const deletes = (e) => {
    
    fetch(`http://localhost:1337/api/reviews/${e}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
</script>

<Toast>
  <span slot="icon" />
  <span slot="text"> Transition type: fade </span>
</Toast>

{#if loading}
  <InlineLoading status="active" description="Submitting..." />
{:else}
  <ul class="list">
    {#each value as { id, attributes }}
      <li class="elements">
        <button on:click={() => deletes(id)}>Delete</button>
        <div class="card">
          {#if editId === id}
            <div class="container">
              <h4><b>Title : <input bind:value={data.title} /></b></h4>
              <p>Rating : <input bind:value={data.rating} /></p>
              <hr />
              <p>Body : <textarea bind:value={data.body} /></p>
            </div>
            <button
              on:click={() => {
                save(id);
              }}>Save</button
            >
          {:else}
            <div class="container">
              <h4><b>Title : {attributes.title}</b></h4>
              <p>Rating : {attributes.rating}</p>
              <hr />
              <p>Body : {attributes.body}</p>
            </div>
            <button
              on:click={() => {
                edit(id);
              }}>Edit</button
            >
          {/if}
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

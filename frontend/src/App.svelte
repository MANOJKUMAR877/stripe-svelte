<script>
  import ListRender from "./Components/ListRender.svelte";
  import "carbon-components-svelte/css/all.css";
  import Form_OP from "./Components/Form_OP.svelte";
  import dataFetch from "./API/fetch";
  let token = "";
  import FormOp from "./Components/Form_OP.svelte";
  import { onMount } from "svelte";
  import AddDetail from "./Components/AddDetail.svelte";
  onMount(() => {
    token = window.localStorage.getItem("token");
    //console.log(token.length > 0)
  });
  const add = () => {
    let d = {
      title: "gf",
      rating: 6,
      body: "ESSENCE OF BELLYDANCE ™\nDie ESSENCE OF BELLYDANCE ™ Methode verbindet die Schönheit des (Bauch-)Tanzes mit einer klar strukturierten und erklärten Technik. Dadurch wird es jeder Frau ermöglicht, diesen Tanz zu begreifen und Schritt für Schritt für sich zu erobern.",
    };
    fetch("http://localhost:1337/api/reviews/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(d),
    });
  };
</script>

<hr />

{#if !token.length > 1}
  <FormOp />
{/if}
<AddDetail />
<hr />
<br />
<button
  on:click={() => {
    add();
  }}>Add</button
>
<hr />
<ListRender />
<hr />

<style>
</style>

<script>
  import ListRender from "./Components/ListRender.svelte";
  import "carbon-components-svelte/css/all.css";
  import Form_OP from "./Components/Form_OP.svelte";
  import dataFetch from "./API/fetch";
  let token = "";
  import FormOp from "./Components/Form_OP.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    token = window.localStorage.getItem("token");
    //console.log(token.length > 0)
  });
</script>

<hr />

{#if !token.length > 1}
  <FormOp />
{/if}

<hr />
<br />
<hr />
<ListRender />
<hr />

<style>
</style>

<script>
  import ListRender from "./Components/ListRender.svelte";
  import "carbon-components-svelte/css/all.css";
  import Form_OP from "./Components/Form_OP.svelte";
  import dataFetch from "./API/fetch";
  export let token = "";
  import FormOp from "./Components/Form_OP.svelte";
  import { onMount } from "svelte";
  import AddDetail from "./Components/AddDetail.svelte";
import ContentForm from "./Components/ContentForm.svelte";
  onMount(() => {
    token = window.localStorage.getItem("token");
    console.log(token);
  });

</script>

<hr />

<FormOp />

<AddDetail />
<hr />
<br />

<hr />
<ListRender />
<hr />
<br/>
<ContentForm token={token}/>
<style>
</style>

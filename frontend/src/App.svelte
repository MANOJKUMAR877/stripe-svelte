<script>
  import { dict,locale, t } from "./i18n.js";
  import ListRender from "./Components/ListRender.svelte";
  import "carbon-components-svelte/css/all.css";
  import Form_OP from "./Components/Form_OP.svelte";
  import dataFetch from "./API/fetch";
  export let token = "";
  import FormOp from "./Components/Form_OP.svelte";
  import { onMount } from "svelte";
  import AddDetail from "./Components/AddDetail.svelte";
  import translation from "./translation";
  $: languages = Object.keys(translation);
  $: dict.set(translation);
  
  import ContentForm from "./Components/ContentForm.svelte";
  onMount(() => {
    token = window.localStorage.getItem("token");
    console.log(token);
  });
  $:console.log($locale)
</script>

{#each languages as lang}
  <div>
    <label for={lang}>{lang}</label>
    <input type="radio" value={lang} name="langu" bind:group={$locale}/>
  </div>
{/each}
<hr />

<h1>{$t('title.helloworld')}</h1>

<!-- <FormOp />

<AddDetail />
<hr />
<br />

<hr />
<ListRender token={token} />
<hr />
<br/>
<ContentForm token={token}/> -->
<style>
</style>

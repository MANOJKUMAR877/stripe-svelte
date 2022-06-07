<script>
  export let token;
  let data = {
    title: "",
    rating: "",
    body: "",
  };
  const submit = () => {
    console.log("fhgjk");
    fetch("http://localhost:1337/api/reviews/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: data }),
    });
  };
</script>

<form
  on:submit|preventDefault={() => {
    submit();
  }}
>
  <input bind:value={data.title} />
  <input bind:value={data.rating} />
  <textarea bind:value={data.body} />
  <button on:click>Submit</button>
</form>

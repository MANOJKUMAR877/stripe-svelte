<script>
  import { Form, Button, TextInput, TextArea } from "carbon-components-svelte";

  export const data = {
    identifier: "",
    password: "",
  };

  const submit = async () => {
    console.log(
      "val",
      JSON.stringify({ identifier: data.identifier, password: data.password })
    );
    const res = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {

      let d  = await(res.json())
      console.log(d.jwt)
      window.localStorage.setItem('token',d.jwt)
    }
  };
</script>

<Form
  on:submit={(e) => {
    e.preventDefault();
    submit();
  }}
>
  <label for="identifier">Enter the User Name</label>
  <TextInput name="identifier" bind:value={data.identifier} />
  <label for="password">Enter the password</label>
  <TextInput name="password" type="password" bind:value={data.password} />

  <Button type="submit">Submit</Button>
</Form>

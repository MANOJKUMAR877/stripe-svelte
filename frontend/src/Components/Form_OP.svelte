<script>
  import { Form, Button, TextInput, TextArea } from "carbon-components-svelte";
  export const data = {
    title: "",
    rating: "",
    body: "",
  };
</script>

<Form
  on:submit={(e) => {
    e.preventDefault();
    console.log("submit", data);
  }}
>
  <label for="title">Enter the Title</label>
  <TextInput name="title" bind:value={data.title} />
  <label for="rating">Enter the Rating</label>
  <TextInput name="rating" type="number" bind:value={data.rating} />
  <TextArea
    labelText="Body"
    placeholder="Enter a description..."
    bind:value={data.body}
  />
  <Button type="submit">Submit</Button>
</Form>

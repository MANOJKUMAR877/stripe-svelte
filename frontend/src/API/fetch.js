import axios from "axios";
const dataFetch =  () => {
  let value =  axios.get("http://localhost:1337/api/reviews/");
  return value;
};
export default dataFetch;

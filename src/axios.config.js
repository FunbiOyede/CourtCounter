import axios from "axios";

const Axios = axios.create({
  baseURL: "https://court-counter-94ae0.firebaseio.com/"
});

export default Axios;

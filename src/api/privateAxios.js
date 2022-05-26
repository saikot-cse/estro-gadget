import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://afternoon-escarpment-12190.herokuapp.com/",
});

export default fetcher;

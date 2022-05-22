import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:6060",
});

export default fetcher;
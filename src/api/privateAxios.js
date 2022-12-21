import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://estro-gadget-server.vercel.app/",
});

export default fetcher;

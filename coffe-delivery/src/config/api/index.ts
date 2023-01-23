import axios from "axios";

const baseURL = "http://127.0.0.1:5173/api";
const api = axios.create({
  baseURL,
});

export { api };

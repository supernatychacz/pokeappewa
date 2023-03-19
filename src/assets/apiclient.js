import axios from "axios";

const client = axios.create({
  baseURL: "https://pikapika.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    // "Authorisation":
  },
  withCredentials: true,
});

export default client;

import axios from "axios";

const client = axios.create({
  baseURL: "https://pokemonfastapi-sj1x.onrender.com",
  headers: {
    "Content-Type": "application/json",
    // "Authorisation":
  },
  withCredentials: true,
});

export default client;

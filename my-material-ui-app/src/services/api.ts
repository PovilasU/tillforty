import axios from "axios";

const instance = axios.create({
  baseURL: "/api/auth/", // Replace with your backend's URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

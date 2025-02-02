import axios from "axios";

const instance = axios.create({
  // baseURL: "https://localhost:5003/api/auth", // Replace with your backend's URL
  baseURL: "http://localhost:5003/api/auth/", // Replace with your backend's URL
  //baseURL: "http://localhost:5000/api", // Replace with your backend's URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

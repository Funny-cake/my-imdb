import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api", //TODO: move to .env
  headers: {
    "Content-type": "application/json"
  }
});
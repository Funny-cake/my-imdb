import axios from "axios";

export default axios.create({
  baseURL: "/api", //TODO: move to .env
  headers: {
    "Content-type": "application/json"
  }
});
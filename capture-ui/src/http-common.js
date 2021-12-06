import axios from "axios";

export default axios.create({
  baseURL: "/api/documentunderstanding/",
  headers: {
    "Content-type": "application/json"
  }
});

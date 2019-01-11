import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 608621ada5caa3da7bd6638db0daade04821f54515298d94b16cec405ba5fbb7"
  }
});

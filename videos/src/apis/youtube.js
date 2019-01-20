import axios from "axios";

const KEY = "AIzaSyAzEFsAC7GvXJGSX7wkf0qFoqTt5K1Gw4Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

import axios from "axios";

export default axios.create({
  params: {
    key: "7c93f394435e4addab7dec43434b12a9",
  },
  baseURL: "https://api.rawg.io/api",
});

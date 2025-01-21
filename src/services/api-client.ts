import axios from "axios";

const url: string = import.meta.env.VITE_API_URL;
const key: string = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: url,
  params: {
    key: key,
  },
});

import axios from "axios";

const url: string = import.meta.env.VITE_API_URL;
const key: string = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: url,
  params: {
    key: key,
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (param: object = {}) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, {
        params: param,
      })
      .then((res) => res.data);
  get = (id: number | string) =>
    axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}

export default ApiClient;

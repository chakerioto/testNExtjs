import { API_KEYS } from "../constants";
import axios from "axios";

const myApi = axios.create({
  baseURL: process.env.API_URL,

  headers: {
    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    Accept: "application/json, text/plain, */*,",
  },
});

myApi.interceptors.request.use(
  (config) => {
    const tmpConfig = { ...config };
    tmpConfig.headers = {
      "Content-type": "application/json; charset=utf-8",
    };
    tmpConfig.headers.Authorization = `Bearer ${API_KEYS}`;
    return tmpConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Add a response interceptor
myApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default myApi;

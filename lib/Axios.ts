import Axios from "axios";

let API_URL = process.env.NEXT_PUBLIC_USER_API_URL;

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

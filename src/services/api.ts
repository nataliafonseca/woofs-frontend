import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const jsonServerURL = import.meta.env.VITE_JSON_API_URL;

const token = localStorage.getItem("woofs.token");
const api = token
  ? axios.create({
      baseURL,
      headers: { Authorization: `Bearer ${token}` },
    })
  : axios.create({
      baseURL,
    });

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("woofs.token");

    if (token)
      config.headers = {
        Authorization: `Bearer ${token}`,
      };

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

const jsonServer = axios.create({
  baseURL: jsonServerURL,
});

export { api, jsonServer };

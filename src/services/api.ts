import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("woofs.token");

  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

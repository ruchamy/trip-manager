import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

export const api = axios.create({
  baseURL: "http:" + BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
});
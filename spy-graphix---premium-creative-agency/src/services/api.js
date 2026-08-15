import axios from "axios";
const API_BASE_URL = "/api";
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("spygraphix_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("spygraphix_refresh_token");
        if (refreshToken) {
          const res = await axios.post("/api/auth/refresh-token", { refreshToken });
          if (res.data.accessToken) {
            localStorage.setItem("spygraphix_token", res.data.accessToken);
            originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
            return api(originalRequest);
          }
        }
      } catch (err) {
        localStorage.removeItem("spygraphix_token");
        localStorage.removeItem("spygraphix_refresh_token");
      }
    }
    return Promise.reject(error);
  }
);

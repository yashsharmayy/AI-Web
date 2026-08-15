import { api } from "./api";
export const authService = {
  login: async (credentials) => {
    const res = await api.post("/auth/login", credentials);
    if (res.data.accessToken) {
      localStorage.setItem("spygraphix_token", res.data.accessToken);
    }
    if (res.data.refreshToken) {
      localStorage.setItem("spygraphix_refresh_token", res.data.refreshToken);
    }
    return res.data;
  },
  register: async (userData) => {
    const res = await api.post("/auth/register", userData);
    return res.data;
  },
  logout: async () => {
    const res = await api.post("/auth/logout");
    localStorage.removeItem("spygraphix_token");
    localStorage.removeItem("spygraphix_refresh_token");
    return res.data;
  },
  getMe: async () => {
    const res = await api.get("/auth/me");
    return res.data;
  },
  forgotPassword: async (email) => {
    const res = await api.post("/auth/forgot-password", { email });
    return res.data;
  },
  resetPassword: async (data) => {
    const res = await api.post("/auth/reset-password", data);
    return res.data;
  }
};

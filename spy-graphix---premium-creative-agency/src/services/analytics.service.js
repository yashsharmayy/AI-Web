import { api } from "./api";
export const analyticsService = {
  get: async () => {
    const res = await api.get("/analytics");
    return res.data;
  }
};

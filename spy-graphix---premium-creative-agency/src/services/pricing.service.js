import { api } from "./api";
export const pricingService = {
  getAll: async () => {
    const res = await api.get("/pricing");
    return res.data;
  },
  create: async (data) => {
    const res = await api.post("/pricing", data);
    return res.data;
  },
  update: async (id, data) => {
    const res = await api.put(`/pricing/${id}`, data);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/pricing/${id}`);
    return res.data;
  }
};

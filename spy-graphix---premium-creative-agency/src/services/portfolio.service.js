import { api } from "./api";
export const portfolioService = {
  getAll: async (category) => {
    const res = await api.get("/portfolio", { params: { category } });
    return res.data;
  },
  getBySlug: async (slug) => {
    const res = await api.get(`/portfolio/${slug}`);
    return res.data;
  },
  create: async (data) => {
    const res = await api.post("/portfolio", data);
    return res.data;
  },
  update: async (id, data) => {
    const res = await api.put(`/portfolio/${id}`, data);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/portfolio/${id}`);
    return res.data;
  }
};

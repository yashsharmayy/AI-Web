import { api } from "./api";
export const categoryService = {
  getAll: async (type) => {
    const res = await api.get("/categories", { params: { type } });
    return res.data;
  },
  create: async (data) => {
    const res = await api.post("/categories", data);
    return res.data;
  },
  update: async (id, data) => {
    const res = await api.put(`/categories/${id}`, data);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/categories/${id}`);
    return res.data;
  }
};

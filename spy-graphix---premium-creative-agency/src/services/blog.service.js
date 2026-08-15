import { api } from "./api";
export const blogService = {
  getAll: async () => {
    const res = await api.get("/blogs");
    return res.data;
  },
  getBySlug: async (slug) => {
    const res = await api.get(`/blogs/${slug}`);
    return res.data;
  },
  create: async (data) => {
    const res = await api.post("/blogs", data);
    return res.data;
  },
  update: async (id, data) => {
    const res = await api.put(`/blogs/${id}`, data);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/blogs/${id}`);
    return res.data;
  }
};

import { api } from "./api";
export const faqService = {
  getAll: async () => {
    const res = await api.get("/faqs");
    return res.data;
  },
  create: async (data) => {
    const res = await api.post("/faqs", data);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/faqs/${id}`);
    return res.data;
  }
};

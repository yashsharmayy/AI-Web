import { api } from "./api";
export const testimonialService = {
  getAll: async () => {
    const res = await api.get("/testimonials");
    return res.data;
  },
  create: async (data) => {
    const res = await api.post("/testimonials", data);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/testimonials/${id}`);
    return res.data;
  }
};

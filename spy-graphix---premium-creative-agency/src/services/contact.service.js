import { api } from "./api";
export const contactService = {
  submit: async (messageData) => {
    const res = await api.post("/contact", messageData);
    return res.data;
  },
  getAll: async () => {
    const res = await api.get("/contact");
    return res.data;
  },
  updateStatus: async (id, status) => {
    const res = await api.put(`/contact/${id}/status`, { status });
    return res.data;
  },
  reply: async (id, replyText) => {
    const res = await api.post(`/contact/${id}/reply`, { replyText });
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/contact/${id}`);
    return res.data;
  }
};

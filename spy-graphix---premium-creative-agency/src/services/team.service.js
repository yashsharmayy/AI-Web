import { api } from "./api";
export const teamService = {
  getAll: async () => {
    const res = await api.get("/team");
    return res.data;
  },
  create: async (data) => {
    const res = await api.post("/team", data);
    return res.data;
  },
  update: async (id, data) => {
    const res = await api.put(`/team/${id}`, data);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/team/${id}`);
    return res.data;
  }
};

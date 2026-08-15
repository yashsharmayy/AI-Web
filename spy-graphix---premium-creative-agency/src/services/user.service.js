import { api } from "./api";
export const userService = {
  getUsers: async () => {
    const res = await api.get("/users");
    return res.data;
  },
  createUser: async (userData) => {
    const res = await api.post("/users", userData);
    return res.data;
  },
  updateUser: async (id, userData) => {
    const res = await api.put(`/users/${id}`, userData);
    return res.data;
  },
  deleteUser: async (id) => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  },
  getProfile: async () => {
    const res = await api.get("/users/profile");
    return res.data;
  },
  updateProfile: async (data) => {
    const res = await api.put("/users/profile", data);
    return res.data;
  },
  changePassword: async (data) => {
    const res = await api.post("/users/change-password", data);
    return res.data;
  },
  deleteAccount: async () => {
    const res = await api.delete("/users/profile");
    return res.data;
  }
};

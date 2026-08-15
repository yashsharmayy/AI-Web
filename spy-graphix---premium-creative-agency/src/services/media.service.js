import { api } from "./api";
export const mediaService = {
  getAll: async () => {
    const res = await api.get("/media");
    return res.data;
  },
  upload: async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const res = await api.post("/media/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data;
  },
  update: async (id, data) => {
    const res = await api.put(`/media/${id}`, data);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/media/${id}`);
    return res.data;
  }
};

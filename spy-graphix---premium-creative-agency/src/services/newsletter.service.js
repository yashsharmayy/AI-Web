import { api } from "./api";
export const newsletterService = {
  subscribe: async (email) => {
    const res = await api.post("/newsletter", { email });
    return res.data;
  },
  getAll: async () => {
    const res = await api.get("/newsletter");
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/newsletter/${id}`);
    return res.data;
  },
  exportCSV: async () => {
    const res = await api.get("/newsletter/export-csv", { responseType: "blob" });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "spygraphix_subscribers.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
};

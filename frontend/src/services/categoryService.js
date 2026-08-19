import api from "./api";

const API = "https://shayari-world-production.up.railway.app/categories";

export const getCategories = async () => api.get(API);

export const createCategory = async (data) => api.post(API, data);

export const updateCategory = async (id, data) => api.put(`${API}/${id}`, data);

export const deleteCategory = async (id) => api.delete(`${API}/${id}`);

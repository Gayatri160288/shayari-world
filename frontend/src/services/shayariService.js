import api from "./api";

export const getAllShayaris = async () => {
  const response = await api.get("/shayaris");
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const createShayari = async (data) => {
  const response = await api.post("/shayaris", data);
  return response.data;
};

export const updateShayari = async (id, data) => {
  const response = await api.put(`/shayaris/${id}`, data);
  return response.data;
};

export const deleteShayari = async (id) => {
  const response = await api.delete(`/shayaris/${id}`);
  return response.data;
};

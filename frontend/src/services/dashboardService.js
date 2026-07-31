import api from "./api";

export const getDashboardStats = async () => {
  const response = await api.get("/dashboard/stats");
  return response.data;
};

export const getRecentShayaris = async () => {
  const response = await api.get("/dashboard/recent");

  return response.data;
};

export const getCategoryStats = async () => {
  const response = await api.get("/dashboard/category-stats");
  return response.data;
};

import api from "./api";

export const generateAIShayari = async (data) => {
  const response = await api.post("/ai/generate", data);
  return response.data;
};

import axios from "axios";

const API_URL = "http://localhost:5000/auth";

export const loginAdmin = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });

  return response.data;
};

// Save token after successful login
export const saveAuth = (data) => {
  localStorage.setItem("adminToken", data.token);
  localStorage.setItem("admin", JSON.stringify(data.admin));
};

// Get token
export const getToken = () => {
  return localStorage.getItem("adminToken");
};

// Get logged-in admin
export const getAdmin = () => {
  const admin = localStorage.getItem("admin");

  return admin ? JSON.parse(admin) : null;
};

// Check if logged in
export const isAuthenticated = () => {
  return !!getToken();
};

// Logout
export const logout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("admin");
};

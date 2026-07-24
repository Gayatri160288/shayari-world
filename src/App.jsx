import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import Categories from "./admin/pages/Categories";
import Shayaris from "./admin/pages/Shayaris";

function App() {
  return (
    <>
      <Routes>
        {/* Public Website */}
        <Route path="/" element={<Home />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/about" element={<About />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/shayaris" element={<Shayaris />} />
      </Routes>
    </>
  );
}

export default App;

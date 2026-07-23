import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";

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
      </Routes>
    </>
  );
}

export default App;

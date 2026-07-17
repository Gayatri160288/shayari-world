import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

function MainLayout({ children }) {
  return (
    <div
      className={`min-h-screen flex flex-col ${useTheme().darkMode ? "bg-gradient-to-br from-gray-900 via-purple-900 to-black" : "bg-gradient-to-br from-pink-100 via-white to-purple-100"}`}
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 py-8">{children}</main>

      <footer className="border-t border-gray-700 mt-10 py-6 text-center text-gray-400">
        © 2026 Shayari World ❤️ Made with React
      </footer>
    </div>
  );
}

export default MainLayout;

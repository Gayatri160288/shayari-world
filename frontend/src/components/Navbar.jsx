import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition-all duration-300 px-4 py-2 rounded-full font-medium ${
      isActive
        ? "bg-pink-500 text-white shadow-md"
        : "text-gray-700 hover:bg-pink-100 hover:text-pink-600 dark:text-gray-200 dark:hover:bg-slate-700 dark:hover:text-pink-400"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          ❤️ Shayari World
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          <NavLink to="/" className={linkClass}>
            🏠 Home
          </NavLink>

          <NavLink to="/favorites" className={linkClass}>
            ❤️ Favorites
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            ℹ️ About
          </NavLink>

          <div className="ml-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "text-pink-400 font-semibold" : "hover:text-pink-400";

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-pink-500">
          ❤️ Shayari World 🌸
        </h1>

        <div className="flex gap-6 text-white">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/favorites" className={linkClass}>
            Favorites
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

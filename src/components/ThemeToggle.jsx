import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-pink-600 px-4 py-2 rounded-lg text-white hover:bg-pink-700 transition"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;

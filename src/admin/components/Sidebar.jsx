import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "🏠",
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: "📂",
    },
    {
      name: "Shayaris",
      path: "/admin/shayaris",
      icon: "📝",
    },
  ];

  return (
    <div className="w-72 bg-gradient-to-b from-purple-900 to-pink-700 text-white shadow-2xl">
      <div className="text-center py-8 border-b border-white/20">
        <h1 className="text-3xl font-bold">❤️ Shayari</h1>

        <p className="text-sm mt-2 text-pink-200">Admin Panel</p>
      </div>

      <div className="p-4">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 rounded-xl mb-3 transition ${
                isActive
                  ? "bg-white text-purple-700 font-bold"
                  : "hover:bg-white/20"
              }`
            }
          >
            <span>{item.icon}</span>

            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

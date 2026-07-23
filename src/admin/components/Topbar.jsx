import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");

    localStorage.removeItem("admin");

    navigate("/admin/login");
  };

  return (
    <div className="bg-white shadow-md h-20 flex justify-between items-center px-8">
      <h2 className="text-3xl font-bold text-purple-700">Dashboard</h2>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white"
      >
        Logout
      </button>
    </div>
  );
}

export default Topbar;

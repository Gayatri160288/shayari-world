import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";
import Swal from "sweetalert2";
function Topbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "Do you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
    });

    if (!result.isConfirmed) return;

    logout();

    navigate("/admin/login");
  };

  return (
    <div className="bg-white shadow-md h-20 flex justify-between items-center px-8">
      <h2 className="text-3xl font-bold text-purple-700">Dashboard</h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white"
      >
        Logout
      </button>
    </div>
  );
}

export default Topbar;

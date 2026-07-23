import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { loginAdmin } from "../../services/authService";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginAdmin(email, password);

      if (data.success) {
        localStorage.setItem("adminToken", data.token);

        localStorage.setItem("admin", JSON.stringify(data.admin));

        toast.success("Welcome Admin ❤️");

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-purple-900
      via-pink-700
      to-purple-950
      p-5
      "
    >
      <div
        className="
        w-full
        max-w-md
        bg-white/20
        backdrop-blur-xl
        rounded-3xl
        shadow-2xl
        p-8
        border
        border-white/30
        "
      >
        <div className="text-center mb-8">
          <h1
            className="
            text-4xl
            font-extrabold
            text-white
            "
          >
            ❤️ Shayari World
          </h1>

          <p
            className="
            text-pink-100
            mt-3
            "
          >
            Admin Login
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-white">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@shayari.com"
              className="
              w-full
              mt-2
              px-4
              py-3
              rounded-xl
              bg-white
              text-gray-800
              outline-none
              "
            />
          </div>

          <div>
            <label className="text-white">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                className="
                w-full
                mt-2
                px-4
                py-3
                rounded-xl
                bg-white
                text-gray-800
                outline-none
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                absolute
                right-3
                top-5
                text-sm
                text-pink-600
                "
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            disabled={loading}
            className="
            w-full
            py-3
            rounded-xl
            bg-pink-500
            hover:bg-pink-600
            text-white
            font-bold
            transition
            "
          >
            {loading ? "Logging in..." : "Login ❤️"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

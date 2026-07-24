import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import StatCard from "../components/StatCard";
import { getDashboardStats } from "../../services/dashboardService";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalShayaris: 0,
    totalCategories: 0,
    totalAdmins: 0,
  });

  const loadStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome 👋</h1>

        <p className="text-gray-500 mt-2">
          Manage your Shayari World from one place.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <StatCard
          title="Total Shayaris"
          value={stats.totalShayaris}
          color="text-pink-500"
        />

        <StatCard
          title="Categories"
          value={stats.totalCategories}
          color="text-blue-500"
        />

        <StatCard
          title="Admins"
          value={stats.totalAdmins}
          color="text-green-500"
        />
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;

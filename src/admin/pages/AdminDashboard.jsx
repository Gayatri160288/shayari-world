import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import StatCard from "../components/StatCard";
import CategoryChart from "../components/CategoryChart";

import {
  getDashboardStats,
  getRecentShayaris,
  getCategoryStats,
} from "../../services/dashboardService";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalShayaris: 0,
    totalCategories: 0,
    totalAdmins: 0,
  });

  const [recent, setRecent] = useState([]);
  const [categoryStats, setCategoryStats] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const statsResponse = await getDashboardStats();

      const recentResponse = await getRecentShayaris();
      const categoryResponse = await getCategoryStats();

      setCategoryStats(categoryResponse);

      console.log("Stats:", statsResponse);
      console.log("Recent:", recentResponse);

      setStats(statsResponse);

      setRecent(recentResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome 👋</h1>

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

      {/* Recent Shayaris */}

      <div className="mt-12 bg-white rounded-3xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-5">Recent Shayaris</h2>

        <table className="w-full">
          <thead>
            <tr className="bg-purple-700 text-white">
              <th className="p-3 text-left">Title</th>

              <th className="p-3 text-left">Category</th>

              <th className="p-3 text-left">Author</th>
            </tr>
          </thead>

          <tbody>
            {recent.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.title}</td>

                <td className="p-3">{item.category?.name}</td>

                <td className="p-3">{item.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10 bg-white rounded-3xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Shayaris by Category</h2>

        <div className="h-[350px]">
          <CategoryChart data={categoryStats} />
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;

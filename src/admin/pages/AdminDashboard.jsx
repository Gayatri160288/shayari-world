import AdminLayout from "../layouts/AdminLayout";
import StatCard from "../components/StatCard";

function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="grid md:grid-cols-3 gap-8">
        <StatCard title="Total Shayaris" value="0" color="text-pink-500" />

        <StatCard title="Categories" value="0" color="text-blue-500" />

        <StatCard title="Admins" value="1" color="text-green-500" />
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;

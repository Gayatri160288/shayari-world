import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;

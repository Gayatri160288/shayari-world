function StatCard({ title, value, color }) {
  return (
    <div className="rounded-3xl bg-white shadow-lg p-6">
      <p className="text-gray-500">{title}</p>

      <h1 className={`text-5xl font-bold mt-4 ${color}`}>{value}</h1>
    </div>
  );
}

export default StatCard;

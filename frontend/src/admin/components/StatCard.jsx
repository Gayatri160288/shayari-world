function StatCard({ title, value, color }) {
  const getIcon = () => {
    switch (title) {
      case "Total Shayaris":
        return "📜";
      case "Categories":
        return "📂";
      case "Admins":
        return "👤";
      default:
        return "📊";
    }
  };

  const getGradient = () => {
    switch (title) {
      case "Total Shayaris":
        return "from-pink-500 to-rose-500";
      case "Categories":
        return "from-blue-500 to-cyan-500";
      case "Admins":
        return "from-green-500 to-emerald-500";
      default:
        return "from-purple-500 to-indigo-500";
    }
  };

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-xl
      border
      border-gray-100
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
    >
      {/* Background Decoration */}
      <div
        className={`
          absolute
          -top-10
          -right-10
          w-32
          h-32
          rounded-full
          opacity-10
          bg-gradient-to-br
          ${getGradient()}
        `}
      ></div>

      <div className="relative z-10 flex justify-between items-start">
        <div>
          <p className="text-gray-500 font-medium">{title}</p>

          <h2 className={`text-5xl font-extrabold mt-4 ${color}`}>{value}</h2>

          <p className="text-gray-400 text-sm mt-3">Live from database</p>
        </div>

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            text-3xl
            text-white
            bg-gradient-to-br
            ${getGradient()}
            shadow-lg
          `}
        >
          {getIcon()}
        </div>
      </div>
    </div>
  );
}

export default StatCard;

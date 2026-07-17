const categories = [
  { name: "All", icon: "🌍" },
  { name: "Love", icon: "❤️" },
  { name: "Sad", icon: "😢" },
  { name: "Friendship", icon: "🤝" },
  { name: "Motivation", icon: "💪" },
];

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="flex flex-wrap gap-3 my-8">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => setCategory(cat.name)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            category === cat.name
              ? "bg-pink-600 text-white shadow-lg"
              : "bg-gray-700 text-white hover:bg-pink-500"
          }`}
        >
          {cat.icon} {cat.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

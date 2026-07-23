function CategoryFilter({ categories, category, setCategory }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-5 py-2 rounded-full transition ${
            category === cat
              ? "bg-pink-500 text-white"
              : "bg-gray-200 dark:bg-slate-700 dark:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

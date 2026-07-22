import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <Search
        size={22}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-500"
      />

      <input
        type="text"
        placeholder="Search your favorite Shayari..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          pl-14
          pr-6
          py-5
          rounded-2xl
          bg-white/90
          dark:bg-slate-800
          text-gray-800
          dark:text-white
          border
          border-pink-300
          dark:border-slate-700
          shadow-xl
          backdrop-blur-md
          transition-all
          duration-300
          focus:outline-none
          focus:ring-4
          focus:ring-pink-300
          focus:scale-[1.01]
        "
      />
    </div>
  );
}

export default SearchBar;

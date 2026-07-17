function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search Shayari..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full
        p-5
        rounded-full
        bg-white
        text-black
        shadow-2xl
        border-2
        border-pink-500
        focus:outline-none
        focus:ring-4
        focus:ring-pink-400
      "
    />
  );
}

export default SearchBar;

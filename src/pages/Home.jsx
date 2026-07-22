import { useState } from "react";
import shayaris from "../data/shayaris";

import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ShayariGrid from "../components/ShayariGrid";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Love", "Sad", "Friendship", "Motivation"];

  const filteredShayaris = shayaris.filter((item) => {
    const matchesSearch =
      item.text.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-5">
        <Hero />

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="rounded-3xl bg-white dark:bg-slate-800 shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-pink-500">
              {shayaris.length}
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Total Shayaris
            </p>
          </div>

          <div className="rounded-3xl bg-white dark:bg-slate-800 shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-purple-500">
              {categories.length - 1}
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">Categories</p>
          </div>

          <div className="rounded-3xl bg-white dark:bg-slate-800 shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-green-500">❤️</h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Share Your Feelings
            </p>
          </div>
        </div>

        {/* Search */}

        <div className="mb-8">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/* Categories */}

        <div className="mb-10">
          <CategoryFilter category={category} setCategory={setCategory} />
        </div>

        {/* Results */}

        <div className="mb-5">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Showing {filteredShayaris.length} Shayaris
          </h2>
        </div>

        <ShayariGrid shayaris={filteredShayaris} />
      </div>
    </MainLayout>
  );
}

export default Home;

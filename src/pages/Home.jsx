import { useEffect, useMemo, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ShayariGrid from "../components/ShayariGrid";

import { getAllShayaris, getCategories } from "../services/shayariService";

function Home() {
  const [shayaris, setShayaris] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const shayariData = await getAllShayaris();
      const categoryData = await getCategories();

      setShayaris(shayariData);
      setCategories(categoryData);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredShayaris = useMemo(() => {
    return shayaris.filter((item) => {
      const categoryName = item.category?.name || "";

      const matchesSearch =
        item.text.toLowerCase().includes(search.toLowerCase()) ||
        categoryName.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === "All" || categoryName === category;

      return matchesSearch && matchesCategory;
    });
  }, [shayaris, search, category]);

  const categoryList = ["All", ...categories.map((c) => c.name)];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-5">
        <Hero />

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
              {categories.length}
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

        <div className="mb-8">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <div className="mb-10">
          <CategoryFilter
            categories={categoryList}
            category={category}
            setCategory={setCategory}
          />
        </div>

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

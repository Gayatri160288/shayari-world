import { useState } from "react";
import shayaris from "../data/shayaris";
import ShayariCard from "../components/ShayariCard";
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
      <Hero />

      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <ShayariGrid shayaris={filteredShayaris} />
    </MainLayout>
  );
}

export default Home;

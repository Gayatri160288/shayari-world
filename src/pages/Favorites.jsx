import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import ShayariCard from "../components/ShayariCard";
import shayaris from "../data/shayaris";
import { getFavorites } from "../utils/favorites";
import { toast } from "react-hot-toast";

const Favorites = () => {
  const [favoriteShayaris, setFavoriteShayaris] = useState([]);

  useEffect(() => {
    const favorites = getFavorites();

    const filtered = shayaris.filter(
      (shayari) => favorites.includes(shayari.id),
      toast.success("Shayari copied to clipboard!"),
    );

    setFavoriteShayaris(filtered);
  }, []);

  const loadFavorites = () => {
    const favorites = getFavorites();

    const filtered = shayaris.filter((shayari) =>
      favorites.includes(shayari.id),
    );

    setFavoriteShayaris(filtered);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">❤️ My Favorite Shayaris</h1>

      {favoriteShayaris.length === 0 ? (
        <p className="text-gray-500">No favorite shayaris yet.</p>
      ) : (
        <div className="grid gap-6">
          {favoriteShayaris.map((shayari) => (
            <ShayariCard
              key={shayari.id}
              id={shayari.id}
              text={shayari.text}
              category={shayari.category}
              onFavoriteChange={loadFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

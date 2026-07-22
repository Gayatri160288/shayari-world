import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ShayariCard from "../components/ShayariCard";
import shayaris from "../data/shayaris";
import { getFavorites } from "../utils/favorites";

function Favorites() {
  const [favoriteShayaris, setFavoriteShayaris] = useState([]);

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
    <MainLayout>
      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* Heading */}

        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
            ❤️ My Favorite Shayaris
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Your personal collection of beautiful Shayaris.
          </p>
        </div>

        {/* Empty State */}

        {favoriteShayaris.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-12 text-center">
            <h2 className="text-6xl mb-4">💔</h2>

            <h3 className="text-2xl font-bold text-gray-700 dark:text-white">
              No Favorites Yet
            </h3>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Start adding your favorite Shayaris ❤️
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Total Favorites:{" "}
                <span className="font-bold text-pink-500">
                  {favoriteShayaris.length}
                </span>
              </p>
            </div>

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
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default Favorites;

import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ShayariCard from "../components/ShayariCard";

import { getFavorites } from "../utils/favorites";
import { getAllShayaris } from "../services/shayariService";

function Favorites() {
  const [favoriteShayaris, setFavoriteShayaris] = useState([]);

  const loadFavorites = async () => {
    try {
      const ids = getFavorites();

      const allShayaris = await getAllShayaris();

      const filtered = allShayaris.filter((shayari) =>
        ids.includes(shayari.id),
      );

      setFavoriteShayaris(filtered);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold">❤️ My Favorite Shayaris</h1>

          <p className="mt-3 text-gray-500">Your personal collection</p>
        </div>

        {favoriteShayaris.length === 0 ? (
          <div className="text-center bg-white rounded-3xl shadow-lg p-12">
            <h2 className="text-6xl">💔</h2>

            <h3 className="text-2xl font-bold mt-4">No Favorites Yet</h3>
          </div>
        ) : (
          <>
            <p className="mb-8 text-lg">
              Total Favorites :
              <span className="font-bold text-pink-600">
                {" "}
                {favoriteShayaris.length}
              </span>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteShayaris.map((shayari) => (
                <ShayariCard
                  key={shayari.id}
                  id={shayari.id}
                  title={shayari.title}
                  text={shayari.text}
                  author={shayari.author}
                  category={shayari.category?.name}
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

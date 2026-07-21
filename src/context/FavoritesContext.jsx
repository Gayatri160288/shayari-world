import { createContext, useContext, useEffect, useState } from "react";
import { getFavorites, toggleFavorite } from "../utils/favorites";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleToggleFavorite = (id) => {
    const updated = toggleFavorite(id);
    setFavorites(updated);
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite: handleToggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);

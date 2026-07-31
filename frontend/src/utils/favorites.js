export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");

  return favorites ? JSON.parse(favorites) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const toggleFavorite = (id) => {
  const favorites = getFavorites();

  if (favorites.includes(id)) {
    const updated = favorites.filter((item) => item !== id);

    saveFavorites(updated);

    return updated;
  }

  const updated = [...favorites, id];

  saveFavorites(updated);

  return updated;
};

import React, { useState, useEffect } from "react";
import { toPng } from "html-to-image";
import { useRef } from "react";
import { getFavorites, toggleFavorite } from "../utils/favorites";
import { toast } from "react-hot-toast";
function ShayariCard({ id, text, category, onFavoriteChange }) {
  const [copied, setCopied] = useState(false);
  const cardRef = React.useRef(null);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    setIsFav(favorites.includes(id));
  }, [id]);

  const handleFavorite = () => {
    const updatedFavorites = toggleFavorite(id);

    setIsFav(updatedFavorites.includes(id));

    if (onFavoriteChange) {
      onFavoriteChange();
    }
  };

  const copyShayari = () => {
    navigator.clipboard.writeText(text);
    toast.success("Shayari copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadImage = async () => {
    const dataUrl = await toPng(cardRef.current);

    const link = document.createElement("a");

    link.download = `${category}-shayari.png`;

    link.href = dataUrl;

    link.click();
  };

  const shareOnWhatsApp = () => {
    const message = `${text}

❤️ Shared from Shayari World`;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div
      ref={cardRef}
      className="
      bg-white/10
      backdrop-blur-lg
      border
      border-white/20
      rounded-3xl 
      p-6
      shadow-xl
      "
    >
      <span
        className="inline-block
          bg-pink-100
          text-pink-700
          px-4
          py-1
          rounded-full
          text-sm
          font-semibold"
      >
        {category}
      </span>

      <p className="text-gray-100 text-lg leading-8 mt-4 font-medium">{text}</p>
      <div className="flex flex-wrap gap-3 mt-5">
        <button
          onClick={handleFavorite}
          className="px-4
        py-2
        rounded-xl
        font-medium
        transition
        duration-200 bg-red-500 hover:bg-red-600"
        >
          {isFav ? "❤️ Favorited" : "🤍 Favorite"}
        </button>

        <button
          onClick={copyShayari}
          className="px-4
        py-2
        rounded-xl
        font-medium
        transition
        duration-200 bg-blue-500 hover:bg-blue-600"
        >
          {copied ? "Copied ✅" : "Copy 📋"}
        </button>

        <button
          onClick={downloadImage}
          className="px-4
        py-2
        rounded-xl
        font-medium
        transition
        duration-200 bg-green-500 hover:bg-green-600"
        >
          📸 Download
        </button>

        <button
          onClick={shareOnWhatsApp}
          className="px-4
        py-2
        rounded-xl
        font-medium
        transition
        duration-200 bg-emerald-500 hover:bg-emerald-600 "
        >
          📱 WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ShayariCard;

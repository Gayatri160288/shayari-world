import React, { useState, useEffect } from "react";
import { toPng } from "html-to-image";
import { toast } from "react-hot-toast";
import { Heart, Copy, Download, MessageCircle } from "lucide-react";

import { getFavorites, toggleFavorite } from "../utils/favorites";

function ShayariCard({ id, text, category, onFavoriteChange }) {
  const cardRef = React.useRef(null);

  const [copied, setCopied] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(getFavorites().includes(id));
  }, [id]);

  const handleFavorite = () => {
    const updatedFavorites = toggleFavorite(id);

    const favorite = updatedFavorites.includes(id);

    setIsFav(favorite);

    if (favorite) {
      toast.success("Added to Favorites ❤️");
    } else {
      toast("Removed from Favorites");
    }

    if (onFavoriteChange) {
      onFavoriteChange();
    }
  };

  const copyShayari = () => {
    navigator.clipboard.writeText(text);

    setCopied(true);

    toast.success("Shayari copied!");

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const downloadImage = async () => {
    try {
      const dataUrl = await toPng(cardRef.current);

      const link = document.createElement("a");

      link.download = `${category}-shayari.png`;

      link.href = dataUrl;

      link.click();

      toast.success("Image downloaded!");
    } catch (error) {
      toast.error("Download failed!");
    }
  };

  const shareOnWhatsApp = () => {
    toast.success("Opening WhatsApp...");

    const message = `${text}

❤️ Shared from Shayari World`;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div
      ref={cardRef}
      className="
        bg-white/80
        dark:bg-slate-800/80
        backdrop-blur-xl

        border
        border-pink-100
        dark:border-slate-700

        rounded-3xl
        p-7

        shadow-lg
        hover:shadow-pink-500/20
        hover:-translate-y-2
        hover:scale-[1.02]

        transition-all
        duration-300
      "
    >
      {/* Category */}
      <span
        className="
          inline-flex
          items-center
          rounded-full

          bg-gradient-to-r
          from-pink-500
          to-fuchsia-500

          text-white

          px-4
          py-1.5

          text-sm
          font-semibold

          shadow-md
        "
      >
        {category}
      </span>

      {/* Shayari */}
      <p
        className="
          mt-5
          text-lg
          leading-8
          font-medium

          text-gray-800
          dark:text-gray-100
        "
      >
        {text}
      </p>

      <hr className="my-6 border-gray-200 dark:border-slate-700" />

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleFavorite}
          className="
            flex
            items-center
            justify-center
            gap-2

            rounded-xl
            py-3

            bg-pink-500
            hover:bg-pink-600

            text-white
            font-semibold

            shadow-md
            hover:shadow-lg

            transition-all
            duration-200
          "
        >
          <Heart size={18} fill={isFav ? "white" : "none"} />

          {isFav ? "Favorited" : "Favorite"}
        </button>

        <button
          onClick={copyShayari}
          className="
            flex
            items-center
            justify-center
            gap-2

            rounded-xl
            py-3

            bg-indigo-500
            hover:bg-indigo-600

            text-white
            font-semibold

            shadow-md
            hover:shadow-lg

            transition-all
            duration-200
          "
        >
          <Copy size={18} />

          {copied ? "Copied" : "Copy"}
        </button>

        <button
          onClick={downloadImage}
          className="
            flex
            items-center
            justify-center
            gap-2

            rounded-xl
            py-3

            bg-emerald-500
            hover:bg-emerald-600

            text-white
            font-semibold

            shadow-md
            hover:shadow-lg

            transition-all
            duration-200
          "
        >
          <Download size={18} />
          Download
        </button>

        <button
          onClick={shareOnWhatsApp}
          className="
            flex
            items-center
            justify-center
            gap-2

            rounded-xl
            py-3

            bg-green-500
            hover:bg-green-600

            text-white
            font-semibold

            shadow-md
            hover:shadow-lg

            transition-all
            duration-200
          "
        >
          <MessageCircle size={18} />
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ShayariCard;

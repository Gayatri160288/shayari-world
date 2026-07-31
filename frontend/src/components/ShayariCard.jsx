import React, { useState, useEffect } from "react";
import { toPng } from "html-to-image";
import { toast } from "react-hot-toast";
import {
  Heart,
  Copy,
  Download,
  MessageCircle,
  ImageIcon,
  Tag,
} from "lucide-react";

import { getFavorites, toggleFavorite } from "../utils/favorites";
import { motion } from "framer-motion";

function ShayariCard({
  id,
  title,
  text,
  author,
  category,
  onFavoriteChange,
  onImageClick,
}) {
  const cardRef = React.useRef(null);

  const [copied, setCopied] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      ref={cardRef}
      className="
        h-full
        min-h-[560px]
    flex
    flex-col

    bg-white/80
    dark:bg-slate-800/80
    backdrop-blur-xl
    border border-pink-100
    dark:border-slate-700
    rounded-3xl
    p-7
    shadow-lg
    hover:shadow-pink-500/20
    hover:-translate-y-3
hover:shadow-2xl
hover:shadow-pink-500/20
    transition-all
    duration-300
      "
    >
      {/* Category */}
      <span
        className="
          inline-flex
          items-center
          gap-2
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
        <Tag size={16} />
        {category}
      </span>
      {title && (
        <h3 className="text-xl font-bold text-pink-600 dark:text-pink-300 mt-4">
          {title}
        </h3>
      )}
      <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
      {/* Shayari */}
      <div className="relative mt-5">
        <p
          className={`text-lg leading-8 font-medium text-gray-800 dark:text-gray-100 whitespace-pre-line ${
            !expanded ? "line-clamp-5" : ""
          }`}
        >
          {text}
        </p>

        {!expanded && text.length > 180 && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white dark:from-slate-800 to-transparent pointer-events-none"></div>
        )}
      </div>
      {text.length > 180 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-pink-600 font-semibold hover:text-pink-700 transition"
        >
          {expanded ? "▲ Read Less" : "▼ Read More"}
        </button>
      )}
      {author && (
        <p className="mt-4 text-right italic text-gray-500 dark:text-gray-300">
          — {author}
        </p>
      )}
      <hr className="my-6 border-gray-200 dark:border-slate-700" />

      {/* Buttons */}
      <div className="mt-auto">
        <hr className="my-6 border-gray-200 dark:border-slate-700" />
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
          <button
            onClick={() =>
              onImageClick({
                title,
                text,
                author,
              })
            }
            className="
      col-span-2
      flex
      items-center
      justify-center
      gap-2
      rounded-xl
      py-3
      bg-purple-600
      hover:bg-purple-700
      text-white
      font-semibold
      transition-all
    "
          >
            <ImageIcon size={18} />
            Generate Image
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ShayariCard;

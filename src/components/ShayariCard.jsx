import React, { useState } from "react";
import { toPng } from "html-to-image";
import { useRef } from "react";
function ShayariCard({ id, text, category, addFavorite }) {
  const [copied, setCopied] = useState(false);
  const cardRef = React.useRef(null);

  const copyShayari = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadImage = async () => {
    const dataUrl = await toPng(cardRef.current);

    const link = document.createElement("a");

    link.download = `${category}-shayari.png`;

    link.href = dataUrl;

    link.click();
  };

  return (
    <div
      ref={cardRef}
      className="
      bg-gray-800
      rounded-3xl
      p-6
      border
      border-gray-700
      shadow-xl
      hover:shadow-pink-500/30
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
        {category}
      </span>

      <p className="text-white text-lg mt-4">{text}</p>

      <button
        onClick={() =>
          addFavorite({
            id,
            text,
            category,
          })
        }
        className="mt-5 mr-3 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
      >
        ❤️ Favorite
      </button>

      <button
        onClick={copyShayari}
        className="mt-5 bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600"
      >
        {copied ? "Copied ✅" : "Copy 📋"}
      </button>

      <button
        onClick={downloadImage}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
      >
        📸 Download
      </button>
    </div>
  );
}

export default ShayariCard;

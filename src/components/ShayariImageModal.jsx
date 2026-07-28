import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { imageThemes } from "../utils/imageThemes";

function ShayariImageModal({ open, onClose, title, text, author }) {
  const cardRef = useRef(null);

  const [theme, setTheme] = useState(imageThemes[0]);

  useEffect(() => {
    if (open) {
      setTheme(imageThemes[0]);
    }
  }, [open, title]);

  if (!open) return null;

  const downloadImage = async () => {
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
      });

      const link = document.createElement("a");

      link.download = `${title}.png`;

      link.href = dataUrl;

      link.click();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl p-6 w-[700px]">
        <h2 className="text-2xl font-bold mb-5">Preview Shayari Image</h2>

        <div
          ref={cardRef}
          className={`bg-gradient-to-br ${theme.gradient}
          rounded-3xl
          p-12
          text-white
          min-h-[600px]
          flex
          flex-col
          justify-center`}
        >
          <h1 className="text-4xl font-bold text-center mb-8">
            ❤️ Shayari World ❤️
          </h1>

          <h2 className="text-3xl font-semibold text-center mb-10">{title}</h2>

          <p className="text-2xl leading-10 whitespace-pre-line text-center">
            {text}
          </p>

          <p className="mt-12 text-xl text-center italic">— {author}</p>
        </div>

        <div className="flex gap-3 mt-6 flex-wrap">
          {imageThemes.map((item) => (
            <button
              key={item.id}
              onClick={() => setTheme(item)}
              className={`px-4 py-2 rounded-xl bg-gradient-to-r ${item.gradient} text-white`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="bg-gray-300 px-6 py-3 rounded-xl"
          >
            Close
          </button>

          <button
            onClick={downloadImage}
            className="bg-pink-600 text-white px-6 py-3 rounded-xl"
          >
            Download PNG
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShayariImageModal;

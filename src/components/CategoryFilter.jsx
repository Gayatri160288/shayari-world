import { Globe, Heart, Frown, Handshake, Dumbbell } from "lucide-react";

const categories = [
  {
    name: "All",
    icon: <Globe size={18} />,
  },
  {
    name: "Love",
    icon: <Heart size={18} />,
  },
  {
    name: "Sad",
    icon: <Frown size={18} />,
  },
  {
    name: "Friendship",
    icon: <Handshake size={18} />,
  },
  {
    name: "Motivation",
    icon: <Dumbbell size={18} />,
  },
];

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-10">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => setCategory(cat.name)}
          className={`
            flex
            items-center
            gap-2

            px-6
            py-3

            rounded-full
            font-semibold

            transition-all
            duration-300

            shadow-md

            ${
              category === cat.name
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-105 shadow-xl"
                : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-slate-700 hover:scale-105"
            }
          `}
        >
          {cat.icon}
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

function RandomButton({ onRandom }) {
  return (
    <button
      onClick={onRandom}
      className="
            bg-gradient-to-r
            from-pink-500
            to-purple-500
            text-white
            px-6
            py-3
            rounded-full
            font-semibold
            shadow-lg
            hover:scale-105
            transition
            "
    >
      🎲 Surprise Me
    </button>
  );
}

export default RandomButton;

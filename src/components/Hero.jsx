function Hero() {
  return (
    <section className="relative overflow-hidden py-20 text-center">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      {/* Small Badge */}
      <div className="inline-block rounded-full bg-pink-500/20 border border-pink-400 px-5 py-2 text-pink-300 text-sm mb-8">
        ✨ India's Beautiful Shayari Collection
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        <span className="text-white">Feel Every </span>

        <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
          Emotion
        </span>

        <br />

        <span className="text-white">Through Shayari ❤️</span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-8">
        Explore thousands of beautiful Hindi Shayaris about Love, Friendship,
        Sadness, Motivation and Life.
      </p>

      {/* Stats */}
      <div className="mt-14 flex flex-wrap justify-center gap-10">
        <div>
          <h2 className="text-3xl font-bold text-pink-400">1000+</h2>
          <p className="text-gray-400">Shayaris</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-pink-400">4</h2>
          <p className="text-gray-400">Categories</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-pink-400">∞</h2>
          <p className="text-gray-400">Emotions</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

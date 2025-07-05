export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <img src="/logo.png" alt="Run The Loop Logo" className="h-12" />
        <nav className="space-x-6 text-white font-semibold text-lg">
          <a href="#" className="hover:text-[#00B28A]">Elite Races</a>
          <a href="#" className="hover:text-[#00B28A]">Seeded Races</a>
          <a href="#" className="hover:text-[#00B28A]">2025 Highlights</a>
          <a href="#" className="hover:text-[#00B28A]">Results</a>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 text-white text-center pt-32 px-4">
        <p className="text-sm md:text-lg font-semibold tracking-widest bg-white bg-opacity-20 inline-block px-4 py-2 rounded">
          FRIDAY 16TH JANUARY 2026
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-6 max-w-3xl mx-auto leading-tight">
          Start 2026 on the right foot with an official time around Adelaide's legendary Uni Loop!
        </h1>
        <a
          href="https://www.revolutionise.com.au/auac/run-the-loop"
          className="inline-block mt-8 bg-[#00B28A] hover:bg-[#009e7a] text-white font-bold py-4 px-8 rounded-lg text-lg"
        >
          Sign Up Here
        </a>
      </main>
    </div>
  );
}

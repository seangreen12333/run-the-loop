// components/Header.js
export default function Header() {
  return (
    <header className="bg-[#102A43] text-white flex items-center justify-between px-6 py-4">
      <a href="https://www.runtheloop.org/">
        <img src="/logo_white.png" alt="Run The Loop Logo" className="h-12 hover:opacity-80 transition-opacity duration-200" />
      </a>
      <nav className="space-x-6 text-white font-semibold text-lg">
        <a href="#">Elite Races</a>
        <a href="#">Seeded Races</a>
        <a href="#">Masters Race</a>
        <a href="#">Junior Race</a>
        <a href="#">2025 Highlights</a>
        <a href="/results">Results</a>
      </nav>
    </header>
  );
}

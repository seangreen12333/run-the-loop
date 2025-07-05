// components/Header.js

export default function Header() {
  return (
    <header className="bg-[#102A43] text-white flex items-center justify-between px-6 py-4">
      <a href="https://www.runtheloop.org/">
        <img src="/logo_white.png" alt="Run The Loop Logo" className="h-12" />
      </a>
      <nav className="space-x-6 text-white font-semibold text-lg">
        <a href="/elite" className="hover:text-[#00B28A]">Elite Races</a>
        <a href="#" className="hover:text-[#00B28A]">Seeded Races</a>
        <a href="#" className="hover:text-[#00B28A]">Masters Race</a>
        <a href="#" className="hover:text-[#00B28A]">Junior Race</a>
        <a href="#" className="hover:text-[#00B28A]">2025 Highlights</a>
        <a href="/results" className="hover:text-[#00B28A]">Results</a>
      </nav>
    </header>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#102A43] text-white px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <a href="https://www.runtheloop.org/" className="flex items-center">
        <img src="/logo_white.png" alt="Run The Loop Logo" className="h-12" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-white font-semibold text-lg">
        <Link href="/elite"><span className="hover:text-[#00B28A]">Elite Races</span></Link>
        <Link href="/seeded"><span className="hover:text-[#00B28A]">Seeded Races</span></Link>
        <Link href="/masters"><span className="hover:text-[#00B28A]">Masters Race</span></Link>
        <Link href="/junior"><span className="hover:text-[#00B28A]">Junior Race</span></Link>
        <Link href="/results"><span className="hover:text-[#00B28A]">Results</span></Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#102A43] shadow-md md:hidden flex flex-col space-y-4 p-6 text-lg font-semibold z-40">
          <Link href="/elite" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Elite Races</span></Link>
          <Link href="/seeded" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Seeded Races</span></Link>
          <Link href="/masters" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Masters Race</span></Link>
          <Link href="/junior" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Junior Race</span></Link>
          <Link href="/results" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Results</span></Link>
        </div>
      )}
    </header>
  );
}

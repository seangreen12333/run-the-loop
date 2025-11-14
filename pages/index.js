'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-[#102A43] text-white px-6 py-4 flex items-center justify-between relative z-50 h-16 md:h-20">
        <a href="https://www.runtheloop.org/" className="flex items-center h-full">
          <img
            src="/logo_white.png"
            alt="Run The Loop Logo"
            className="h-full w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold text-lg items-center">
          <Link href="/elite"><span className="hover:text-[#00B28A]">Elite Races</span></Link>
          <Link href="/seeded"><span className="hover:text-[#00B28A]">Seeded Races</span></Link>
          <Link href="/masters"><span className="hover:text-[#00B28A]">Masters Race</span></Link>
          <Link href="/junior"><span className="hover:text-[#00B28A]">Junior Race</span></Link>
          <Link href="/results"><span className="hover:text-[#00B28A]">Results</span></Link>
          <a
            href="https://www.revolutionise.com.au/auac/events/303529"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#00B28A] text-[#00B28A] hover:bg-[#00B28A] hover:text-white font-bold py-2 px-4 rounded-lg text-center transition-colors duration-200 shadow-sm"
          >
            Enter Here
          </a>
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
            <a
              href="https://www.revolutionise.com.au/auac/events/303529"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#00B28A] text-[#00B28A] hover:bg-[#00B28A] hover:text-white font-bold py-2 px-4 rounded-lg text-center transition-colors duration-200 shadow-sm"
            >
              Enter Here
            </a>
            <Link href="/elite" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Elite Races</span></Link>
            <Link href="/seeded" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Seeded Races</span></Link>
            <Link href="/masters" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Masters Race</span></Link>
            <Link href="/junior" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Junior Race</span></Link>
            <Link href="/results" onClick={() => setIsOpen(false)}><span className="hover:text-[#00B28A]">Results</span></Link>
          </div>
        )}
      </header>
{/* Main Hero Section */}
<div
  className="relative min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/background.jpg')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Hero content */}
  <main className="relative z-10 text-white text-center pt-32 px-4">
    <p className="text-sm md:text-lg font-semibold tracking-widest bg-white bg-opacity-20 inline-block px-4 py-2 rounded">
      FRIDAY 16 JANUARY 2026 · 6:30 PM · Adelaide Uni Loop
    </p>
    <h1 className="text-3xl md:text-5xl font-extrabold mt-6 max-w-3xl mx-auto leading-tight">
      Kickstart 2026 with an official time on the iconic Uni Loop – The heart of Adelaide’s Running Legacy!
    </h1>
    <a
      href="https://www.revolutionise.com.au/auac/events/303529"
      className="inline-block mt-8 bg-[#00B28A] hover:bg-[#009e7a] text-white font-bold py-4 px-8 rounded-lg text-lg"
    >
      Sign Up Here
    </a>
  </main>

<div className="absolute bottom-6 right-6">
  <a
    href="https://www.bridging-barriers.com.au/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/BB LOGO WHITE (3).png"
      alt="Bridging Barriers Logo"
      className="h-14 md:h-20 hover:opacity-90 transition-opacity duration-200"
    />
  </a>
</div>

</div>



      {/* UNI LOOP SECTION */}
  <section className="bg-white py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
  <div className="md:w-1/2">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-10 border-b-4 border-lime-500 inline-block">The Uni Loop</h2>
    <p className="text-lg mb-4">
      The Uni Loop - Adelaide's iconic Uni Loop sits just north of the River Torrens, surrounding Park 10 — a popular training ground for elite athletes, fun runners, and university students alike. It's fast, flat, and scenic — the perfect spot to test yourself over an uninterrupted 2.2 kilometre loop.
    </p>
    <p className="text-lg mb-4">
      The Uni Loop run is a 'frypan-shaped' loop of 2.2km around Warnpangga (Park 10), incorporating both flat straights and gentle bends.
    </p>
    <p className="text-lg mb-4">
      The run starts at the 0 marker on Mackinnon Parade and heads west towards Adelaide Oval for 600m. The loop then arcs left towards Adelaide Zoo, before turning left again and winding back to run parallel with War Memorial Drive. At the 1200-metre mark, there’s a gradual 200m downhill followed by a 200m climb. From this point, the final 600m is flat — perfect for those fast finishers. The race finishes exactly where it starts — with chip timing and official results to lock in your Uni Loop PB.
    </p>
  </div>
  <div className="md:w-1/2">
    <img src="/uni-loop-map.jpg" alt="Uni Loop Course Map" className="w-full rounded-lg shadow-lg" />
  </div>
</section>


      {/* HOW IT WORKS SECTION */}
      <section className="bg-white py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
        <div className="md:w-1/2 flex justify-center md:justify-start pr-6 lg:pl-20">
          <img src="/how-it-works.jpg" alt="How It Works Visual" className="w-[80%] md:w-[70%] lg:w-[65%] rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-6 relative inline-block">
            <span className="relative z-10">How Does It Work?</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 z-0 rounded"></span>
          </h2>
          <ul className="space-y-4 text-lg text-gray-800 list-disc list-inside">
            <li>Get an official time around Adelaide’s iconic Uni Loop! Timing is provided by SA Road Runners Club & City-Bay Fun Run.</li>
            <li>Runners are seeded into heats of ~10 athletes based on seed times.</li>
            <li>Each heat runs individually — one finishes before the next begins.</li>
            <li>The two fastest heats will be designated as the elite races.</li>
            <li>All finishers receive a custom finisher pin.</li>
            <li>With prizes awarded to:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Top 3 male and female elite athletes</li>
                <li>Fastest male and female athlete to the 1000 m mark</li>
                <li>Top 3 U18 male and female athletes</li>
                <li>Top masters athletes (Specifics TBD)</li>
              </ul>
            </li>
            <li>For a full breakdown of prize categories, see the links above.</li>
          </ul>
        </div>
      </section>

      {/* WHERE & WHEN SECTION */}
      <section className="bg-gray-50 py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-8 relative inline-block">
          <span className="relative z-10">Where & When?</span>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 z-0 rounded"></span>
        </h2>
        <p className="text-lg text-gray-800 mb-4"><strong>Where:</strong> Adelaide Uni Loop — starting at the 0-metre mark on the eastern corner of Mackinnon Parade.</p>
        <p className="text-lg text-gray-800 mb-4"><strong>When:</strong> Friday 16th January 2026</p>
        <p className="text-lg text-gray-800"><strong>Time:</strong> First race starts at 6:30 PM</p>
        <a href="https://maps.app.goo.gl/tkZvpiswwU1qNcp1A" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-[#00B28A] hover:bg-[#009e7a] text-white font-bold py-3 px-6 rounded-lg text-md">Location</a>
      </section>

      {/* COURSE RECORDS */}
      <section className="bg-white py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] border-b-4 border-lime-500 inline-block pb-2 mb-10">Course Records</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src="/record1.jpg" alt="Female Record" className="w-1/2 mx-auto rounded shadow-md" />
          <img src="/record2.jpg" alt="Male Record" className="w-1/2 mx-auto rounded shadow-md" />
        </div>
      </section>

      {/* MAJOR SPONSOR */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-8 relative inline-block">
              <span className="relative z-10">Major Sponsor</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 z-0 rounded"></span>
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              <strong>Bridging Barriers</strong> is your trusted NDIS partner, empowering you to live with choice,
              confidence and freedom.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              They are a dedicated disability support provider offering personalised NDIS services, including
              Support Work, Support Coordination, Specialist Support Coordination, and Recovery Coaching. Their
              person-centred, compassionate approach ensures every participant receives tailored care, guidance,
              and opportunities that reflect their unique needs and aspirations.
            </p>
            <a
              href="https://www.bridging-barriers.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#00B28A] font-semibold hover:underline"
            >
              Learn more at bridging-barriers.com.au
            </a>
          </div>

          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a
              href="https://www.bridging-barriers.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/BB LOGO DARK BLUE (3).png"
                alt="Bridging Barriers Logo"
                className="w-56 max-w-full hover:opacity-90 transition-opacity duration-200"
              />
            </a>
          </div>
        </div>
      </section>

    

    {/* SPONSORS */}
<section className="bg-[#102A43] py-20 px-6 overflow-hidden">
  <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 border-b-4 border-lime-500 inline-block">
    Sponsors & Partners
  </h2>

  {/* Scrolling marquee */}
  <div className="relative w-full overflow-hidden">
    <div className="animate-scroll inline-flex w-max items-center gap-16 will-change-transform">
      {/* duplicate set for seamless loop */}
      {[...Array(2)].map((_, i) => (
        <div key={i} className="inline-flex items-center gap-16">
          <a href="https://www.athleticssa.com.au" target="_blank" rel="noreferrer">
            <img src="/sponsor1.png" alt="Athletics SA"
                 className="h-24 md:h-28 w-auto object-contain shrink-0" />
          </a>

          <a href="https://www.adelaideunisport.com.au" target="_blank" rel="noreferrer">
            <img src="/sponsor2.png" alt="Adelaide Uni Sport"
                 className="h-24 md:h-28 w-auto object-contain shrink-0" />
          </a>

          <a href="https://www.rundna.com.au" target="_blank" rel="noreferrer">
            <img src="/rundna.png" alt="RunDNA"
                 className="h-20 md:h-24 w-auto object-contain shrink-0" />
          </a>

          <a href="https://revolutionise.com.au/auathletics" target="_blank" rel="noreferrer">
            <img src="/sponsor3.png" alt="Adelaide University Athletics Club"
                 className="h-24 md:h-28 w-auto object-contain shrink-0" />
          </a>

          <a href="https://www.runningsa.com.au" target="_blank" rel="noreferrer">
            <img src="/sponsor4.png" alt="Running SA"
                 className="h-24 md:h-28 w-auto object-contain shrink-0" />
          </a>

          <a href="https://oxenberry.com/" target="_blank" rel="noreferrer">
            <img src="/ox.jpg" alt="Oxenberry Farm Wines"
                 className="h-24 md:h-28 w-auto object-contain shrink-0" />
          </a>

          <a href="https://www.samastersathletics.org.au" target="_blank" rel="noreferrer">
            <img src="/sponsor5.png" alt="SA Masters Athletics"
                 className="h-24 md:h-28 w-auto object-contain shrink-0" />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* FOOTER */}
      <footer className="bg-[#102A43] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="flex justify-center md:justify-start">
            <img src="/logo_white.png" alt="Run The Loop Logo" className="h-20" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lime-400 text-xl font-bold mb-2">Contact Us</h3>
            <p>athletics@adelaideunisport.com.au</p>
            <p>0497 563 990</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61572122634418" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-icon.png" alt="Facebook" className="h-8" />
            </a>
            <a href="https://www.instagram.com/run_the_loop/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" className="h-8" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

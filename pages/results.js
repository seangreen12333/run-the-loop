// pages/results.js

import Footer from '../components/Footer'; // Reusable footer
import Image from 'next/image';

export default function ResultsPage() {
  return (
    <>
      {/* Header with nav */}
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

      {/* HERO IMAGE */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/results-banner.jpg')" }}
      >
        <h1 className="text-5xl font-extrabold bg-black bg-opacity-60 px-4 py-2 rounded">
          Results
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43]">
        {/* Top 10 Males */}
        <h2 className="text-3xl font-bold mb-6">Top 10 All-Time Male</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="pb-2">Rank</th><th>Name</th><th>Time</th><th>Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1', 'Jonathan Harris', '05:59', '2025'],
                ['2', 'Adrian Potter', '06:01', '2025'],
                ['3', 'Cooper Giles', '06:04', '2025'],
                ['4', 'Lachlan Hall', '06:07', '2025'],
                ['5', 'Thomas Dowd', '06:10', '2025'],
                ['6', 'Max Spurling', '06:14', '2025'],
                ['7', 'Torben Roberts', '06:16', '2025'],
                ['7', 'Alex Rawley', '06:16', '2025'],
                ['9', 'Bailey Giles', '06:21', '2025'],
                ['10', 'Tom Kavanagh', '06:24', '2025'],
              ].map(([rank, name, time, year], i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td>{rank}</td><td>{name}</td><td>{time}</td><td>{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Male Excel Download */}
        <a
          href="/male-rankings.xlsx"
          download
          className="inline-block bg-[#00B28A] hover:bg-[#009e7a] text-white font-bold py-2 px-4 rounded-lg"
        >
          Download Full Male Rankings (Excel)
        </a>

        {/* Top 10 Females */}
        <h2 className="text-3xl font-bold mt-16 mb-6">Top 10 All-Time Female</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="pb-2">Rank</th><th>Name</th><th>Time</th><th>Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1', 'Caitlin Adams', '06:47', '2025'],
                ['2', 'Amelia Sheridan', '06:52', '2025'],
                ['3', 'Hannah Tourneur', '07:09', '2025'],
                ['4', 'Eva Flint', '07:18', '2025'],
                ['5', 'Emma Henkel', '07:21', '2025'],
                ['6', 'Monique Hollick', '07:23', '2025'],
                ['7', 'Leni Knowles', '07:33', '2025'],
                ['7', 'Sofia Heyward', '07:36', '2025'],
                ['9', 'Gracie Sheridan', '07:37', '2025'],
                ['10', 'Zoe Sheridan', '07:40', '2025'],
              ].map(([rank, name, time, year], i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td>{rank}</td><td>{name}</td><td>{time}</td><td>{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Female Excel Download */}
        <a
          href="/female-rankings.xlsx"
          download
          className="inline-block bg-[#00B28A] hover:bg-[#009e7a] text-white font-bold py-2 px-4 rounded-lg"
        >
          Download Full Female Rankings (Excel)
        </a>

        {/* Previous Years */}
        <h2 className="text-3xl font-bold mt-16 mb-6">Previous Years</h2>
        <a
          href="https://sarrc.asn.au/Race_Results/showCB?Race=auac%20run%20the%20loop%202025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#102A43] hover:bg-[#0c1d33] text-white font-bold py-2 px-6 rounded-lg"
        >
          2025 Results
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

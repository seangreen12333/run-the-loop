// pages/results.js

import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';

export default function ResultsPage() {
  return (
    <>
      {/* Reusable Header */}
      <Header />

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
                ['1', 'Matthew Clarke', '05:52', '2026'],
                ['2', 'Adrian Potter', '05:58', '2026'],
                ['3', 'Jonathan Harris', '05:59', '2025'],
                ['4', 'Arron Nitschke', '06:03', '2026'],
                ['5', 'Cooper Giles', '06:04', '2025'],
                ['6', 'Lachlan Hall', '06:07', '2025'],
                ['7', 'Casey Atkinson', '06:08', '2026'],
                ['8', 'Thomas Dowd', '06:10', '2025'],
                ['9', 'Joe Cross', '06:14', '2026'],
                ['9', 'Max Spurling', '06:14', '2025'],
              
              ].map(([rank, name, time, year], i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td>{rank}</td><td>{name}</td><td>{time}</td><td>{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
                ['2', 'Amelia Sheridan', '06:48', '2026'],
                ['3', 'Hannah Tourneur', '06:50', '2026'],
                ['4', 'Tilly Williams', '06:51', '2026'],
                ['5', 'Eva Flint', '06:56', '2026'],
                ['6', 'Brooke Hines', '07:11', '2026'],
                ['7', 'Gracie Sheridan', '07:12', '2026'],
                ['8', 'Monique Hollick', '07:16', '2026'],
                ['9', 'Emma Henkel', '07:21', '2025'],
                ['10', 'Sofia Heyward', '07:28', '2026'],
              ].map(([rank, name, time, year], i) => (
                <tr key={i} className="border-t border-gray-100">
                  <td>{rank}</td><td>{name}</td><td>{time}</td><td>{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

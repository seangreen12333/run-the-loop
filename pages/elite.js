import Footer from '../components/Footer';
import Header from '../components/Header';

export default function EliteRacesPage() {
  return (
    <>
      <Header />

      {/* HERO IMAGE */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/elite-banner.jpg')" }} // Upload an appropriate image as elite-banner.jpg
      >
        <h1 className="text-5xl font-extrabold bg-black bg-opacity-60 px-4 py-2 rounded">
          Elite Races
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] space-y-6 text-lg">
        <p>
          Come and see the best of Adelaide's distance runners battle it out for glory on the Uni Loop!
        </p>

        <p>
          Two showpiece events — one male, one female — feature the fastest runners around. These elite fields will race for cash, trophies, and the prestigious title of <strong>Uni Loop Champion</strong>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-2 text-[#00B28A]">Prize Money</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>1st place:</strong> $500</li>
          <li><strong>2nd place:</strong> $350</li>
          <li><strong>3rd place:</strong> $150</li>
        </ul>

     <h2 className="text-2xl font-bold mt-10 mb-2 text-[#00B28A]">RunDNA 1K</h2>
      <p>
        The first athlete through the 1km mark in each elite race takes home a <strong>$150</strong> RunDNA Voucher <sup>*</sup>.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-2 text-[#00B28A]">Course Record Bonus</h2>
      <p>
        A <strong>$100</strong> bonus is awarded to the <em>first</em> athlete in each elite race to break the course record<sup>*</sup>.
      </p>

      <p className="mt-10">
        Think you've got what it takes? Time to Conquer the loop.
      </p>
      </section>

      <p className="text-sm italic text-gray-600 mt-2">
        <sup>*</sup> Athletes must complete the race with a bona fide effort to be eligible for bonuses. Only the first athlete to break the course record in each race receives the Course Record Bonus. Bonuses may be awarded in the form of vouchers of equivalent value.
      </p>

      <Footer />

        </>
  );
}

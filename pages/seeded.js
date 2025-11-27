// pages/seeded.js
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function SeededRacesPage() {
  return (
    <>
      <Header />

      {/* HERO IMAGE */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/seeded-banner.jpg')" }}
      >
        <h1 className="text-5xl font-extrabold bg-black/60 px-4 py-2 rounded">
          Seeded Races
        </h1>
      </section>

      {/* MAIN COPY */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] text-lg">
        <p className="mb-4 text-center">
          Start the new year with a lap of the legendary Uni Loop.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          <p>
            The Seeded Races are designed to give you the best possible chance to run fast in a supportive
            and competitive environment.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Waves of roughly 10 runners based on seed time.</li>
            <li>Racing alongside runners of similar ability.</li>
            <li>Ideal setting for a strong hit out or a new personal best.</li>
            <li>Every finisher receives a <strong>Run the Loop finisher pin</strong>.</li>
          </ul>

          <p>
            The Loop is as much about community as it is about racing. Bring family and friends to cheer, or stay around
            and support others chasing their own goals.
          </p>
        </div>
      </section>

      {/* RANDOM GIVEAWAYS & PARTNERS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-8 text-center relative inline-block mx-auto">
            <span className="relative z-10">Random Giveaways</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 z-0 rounded"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Text column */}
            <div className="space-y-6 text-[#102A43] text-lg">
              {/* RunDNA Giveaway */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-teal-700">
                  RunDNA Shoe Giveaway
                </h3>
                <p className="text-slate-800">
                  A random entrant in the seeded races will win a voucher for a pair of
                  New Balance shoes valued up to <span className="font-bold">$330 RRP</span>
                  <sup>*</sup>.
                </p>
              </div>

              {/* Oxenberry Farm Giveaway */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-teal-700">
                  Oxenberry Farm Wine Giveaway
                </h3>
                <p className="text-slate-800 mb-1">
                  Thanks to <strong>Oxenberry Farm</strong>, we also have six bottles of wine
                  to give away as random prizes.
                </p>
                <p className="text-sm text-slate-600 italic">
                  Recipients must be 18+.
                </p>
              </div>

              {/* Refreshments */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-teal-700">
                  On-the-day Refreshments
                </h3>
                <p className="text-slate-800">
                  Refreshments will be available, including fresh fruit, a BBQ{' '}
                  <span className="italic">(pending fire restrictions)</span>, and everyone&apos;s
                  favourite chocolate milk.
                </p>
              </div>

              <p className="text-slate-800">
                After your race, you can stay to watch the elite athletes go head to head in their quest
                for Uni Loop honours. It is a great way to finish a Friday evening at the track.
              </p>
            </div>

            {/* Logos column */}
            <div className="flex flex-col items-center gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  Proudly partnered with:
                </h4>
                <div className="flex flex-col items-center gap-6">
                  <img
                    src="/rundna.png"
                    alt="RunDNA"
                    className="h-24 w-auto"
                  />
                  <img
                    src="/ox.jpg"
                    alt="Oxenberry Farm"
                    className="h-20 w-auto rounded-md object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-slate-500 italic mt-2 self-start">
                *Excludes the New FuelCell SC Elite v5.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-[#102A43] mb-4">
              Ready to begin 2026 the right way?
            </p>
            <a
              href="https://www.revolutionise.com.au/auac/events/303529"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00B28A] hover:bg-[#00926f] text-white font-bold py-3 px-8 rounded-lg text-lg"
            >
              Enter now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

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
      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] space-y-6 text-lg">
        <p>Start the new year with a lap of the legendary Uni Loop!</p>

        <p>
          Runners will be placed into waves of roughly 10 participants based on your
          seed time. This means you’ll be racing shoulder-to-shoulder with others of
          similar ability — the perfect environment to push for a strong finish or a
          brand new personal best.
        </p>

        <p>
          Whether you’re chasing down a goal, building back fitness, or just want to
          kick off 2026 with a great vibe, this event is for you.
        </p>

        <p>
          Many participants use this as a launchpad for their New Year fitness
          resolutions — and there’s no better motivation than a timed race with great
          energy!
        </p>

        <p>
          Everyone who completes their lap receives a <strong>Run the Loop finisher pin</strong> — a perfect
          memento to mark the first race of the year.
        </p>

        <p>
          The Loop isn’t just about the race — it’s about the people. Bring your
          family and friends to cheer you on, or stick around and support others
          chasing their own goals.
        </p>

        <p>
          Stay around afterward to watch the elite athletes go head-to-head in their
          quest for Uni Loop glory. It’s a Friday afternoon well spent — fast laps,
          fresh goals, and a whole lot of heart.
        </p>
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
                <p className="text-slate-800">
                  Thanks to <strong>Oxenberry Farm</strong>, we also have four bottles of wine
                  to give away as random prizes among participants. It&apos;s a small thank you
                  for starting your year with Run the Loop.
                </p>
              </div>

              {/* Refreshments */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-teal-700">
                  On-the-day Refreshments
                </h3>
                <p className="text-slate-800">
                  Refreshments will be provided, including fresh fruit, a BBQ{' '}
                  <span className="italic">(pending fire restrictions)</span>, and everyone&apos;s
                  favourite chocolate milk!
                </p>
              </div>
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

          <p className="mt-10 text-center text-lg font-semibold text-[#102A43]">
            Ready to kick off 2026 the right way? Let&apos;s conquer the Loop.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

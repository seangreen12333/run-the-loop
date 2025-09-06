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
          Whether you're chasing down a goal, building back fitness, or just want to
          kick off 2026 with a great vibe, this event is for you.
        </p>

        <p>
          Many participants use this as a launchpad for their New Year fitness
          resolutions — and there's no better motivation than a timed race with great
          energy!
        </p>

        <p>
          Everyone who completes their lap receives a <strong>Run the Loop finisher pin</strong> — a perfect
          memento to mark the first race of the year.
        </p>

        <p>
          The Loop isn't just about the race — it's about the people. Bring your
          family and friends to cheer you on, or stick around and support others
          chasing their own goals.
        </p>

        <p>
          Stick around afterward to watch the elite athletes go head-to-head in their
          quest for Uni Loop glory. It’s a Friday afternoon well spent — fast laps,
          fresh goals, and a whole lot of heart.
        </p>

        {/* RunDNA Giveaway block */}
        <section className="text-center my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-600 mb-4">
            RunDNA Giveaway
          </h2>

          <p className="text-lg text-slate-800 mb-6">
            A random entrant will win a voucher for a pair of New Balance shoes
            valued up to <span className="font-bold">$330 RRP</span><sup>*</sup>.
          </p>

          <p className="mt-10 font-semibold">
            Ready to kick off 2026 right? Let’s conquer the Loop.
          </p>

         
        </section>
      </section> {/* ✅ close the outer content section */}


              {/* Partner Section */}
<section className="my-12 text-center">
  <h2 className="text-xl font-semibold text-slate-800 mb-4">
    Proudly partnered with:
  </h2>
  <div className="flex flex-col items-center">
    <img
      src="/RunDNA.png"
      alt="RunDNA"
      className="h-24 w-auto mb-2"
    />
    <p className="text-sm text-slate-500 italic self-start">
      *Excludes the New FuelCell SC Elite v5.
    </p>
  </div>
</section>

      <Footer />
    </>
  );
}

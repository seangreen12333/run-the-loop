export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        <header className="relative z-10 flex items-center justify-between px-6 py-4">
          <img src="/logo.png" alt="Run The Loop Logo" className="h-12" />
          <nav className="space-x-6 text-white font-semibold text-lg">
            <a href="#" className="hover:text-[#00B28A]">Elite Races</a>
            <a href="#" className="hover:text-[#00B28A]">Seeded Races</a>
            <a href="#" className="hover:text-[#00B28A]">2025 Highlights</a>
            <a href="#" className="hover:text-[#00B28A]">Results</a>
          </nav>
        </header>

        <main className="relative z-10 text-white text-center pt-32 px-4">
          <p className="text-sm md:text-lg font-semibold tracking-widest bg-white bg-opacity-20 inline-block px-4 py-2 rounded">
            FRIDAY 16TH JANUARY 2026
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 max-w-3xl mx-auto leading-tight">
            Start 2026 on the right foot with an official time around Adelaide's legendary Uni Loop!
          </h1>
          <a
            href="https://www.revolutionise.com.au/auac/run-the-loop"
            className="inline-block mt-8 bg-[#00B28A] hover:bg-[#009e7a] text-white font-bold py-4 px-8 rounded-lg text-lg"
          >
            Sign Up Here
          </a>
        </main>
      </div>

      {/* UNI LOOP SECTION */}
      <section className="bg-white py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-6">The Uni Loop</h2>
          <p className="text-lg mb-4">
            Adelaide's iconic Uni Loop sits just north of the River Torrens, surrounding Park 10. It features a mostly flat 2.2km unsealed, tree-lined loop with distance markers every 200 metres. The Uni Loop serves as a training ground for some of Australia's most elite distance athletes, as well as a popular destination for the general public.
          </p>
          <p className="text-lg">
            Athletes will start at the 0m mark, heading west towards Frome Road for 600m. The loop then winds back, running parallel to War Memorial Drive. At the 1200-metre mark, there’s a gradual 200m downhill followed by a 200m uphill. The final 600m is flat, perfect for those fast finishers.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/uni-loop-map.jpg"
            alt="Uni Loop Course Map"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-gray-50 py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-10 text-center">
          How Does It Work?
        </h2>
        <ul className="space-y-6 text-lg text-gray-800 list-disc list-inside">
          <li>
            Get an official time around Adelaide’s iconic Uni Loop! Timing will be provided by our friends at the SA Road Runners Club.
          </li>
          <li>
            Runners will be seeded into heats of approximately 10 athletes based on self-submitted seed times during registration.
          </li>
          <li>
            Each heat runs individually — one finishes before the next begins.
          </li>
          <li>
            The two fastest heats will be designated as the elite races: one male, one female.
          </li>
          <li>
            All finishers receive a custom finisher pin and go in the draw to win 1× $100 or 2× $50 RunDNA vouchers.
          </li>
          <li>
            Elite athletes will compete for prize money, with trophies awarded to:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Top 3 male and female finishers in the elite races</li>
              <li>First U18 male and first U18 female finisher overall</li>
            </ul>
          </li>
          <li>
            For full prize details, see the <span className="text-[#00B28A] font-semibold">Elite Races</span> and <span className="text-[#00B28A] font-semibold">Seeded Races</span> sections above.
          </li>
        </ul>
      </section>

      {/* WHERE & WHEN SECTION */}
      <section className="bg-white py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-8">Where & When?</h2>
        <p className="text-lg text-gray-800 mb-4">
          <strong>Where:</strong> Adelaide Uni Loop, starting at the 0-metre mark on the eastern corner of Mackinnon Parade.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          <strong>When:</strong> Friday 16th January 2026
        </p>
        <p className="text-lg text-gray-800">
          <strong>Time:</strong> First race starts at 6:30 PM
        </p>
      </section>
    </>
  );
}

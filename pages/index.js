export default function Home() {
  return (
    <>
      <section className="bg-[#102A43] text-white py-16 px-4 text-center">
        <img src="/logo.png" alt="Run The Loop Logo" className="mx-auto mb-6 h-20" />
        <h2 className="text-2xl md:text-3xl font-light">Start your 2026 fitness goals off right at the Adelaide Uni Loop</h2>
        <a href="https://www.revolutionise.com.au/auac/run-the-loop" className="inline-block mt-6 bg-[#00B28A] hover:bg-[#009e7a] text-white font-semibold py-3 px-6 rounded-lg text-lg">
          Enter Now
        </a>
      </section>

      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102A43]">About the Event</h2>
          <p className="mt-4 text-lg text-gray-700">
            Run The Loop is Adelaide’s most iconic loop race. Whether you're a junior, a masters athlete, or racing for the prize money – there’s a place for you.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-[#102A43]">2024 Highlights</h2>
        <p className="mt-2 text-gray-600">Check out some moments from last year’s event!</p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <img src="/highlight1.jpg" alt="2024 race highlight 1" className="w-72 h-auto rounded-lg shadow-md" />
          <img src="/highlight2.jpg" alt="2024 race highlight 2" className="w-72 h-auto rounded-lg shadow-md" />
          <img src="/highlight3.jpg" alt="2024 race highlight 3" className="w-72 h-auto rounded-lg shadow-md" />
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2026 Run The Loop | Powered by Adelaide University Athletics Club
      </footer>
    </>
  )
}
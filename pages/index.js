export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#102A43] text-white py-16 px-4 text-center">
        <img
          src="/run-the-loop-logo.png"
          alt="Run The Loop Logo"
          style={{ width: '200px', height: 'auto' }}
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl md:text-3xl font-light">
          Start your 2026 fitness goals off right at the Adelaide Uni Loop
        </h2>
        <a
          href="https://www.revolutionise.com.au/auac/run-the-loop"
          className="inline-block mt-6 bg-[#00B28A] hover:bg-[#009e7a] text-white font-semibold py-3 px-6 rounded-lg text-lg"
        >
          Enter Now
        </a>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About the Event</h2>
          <p className="text-lg text-gray-700">
            Run The Loop is Adelaide’s most iconic loop race. Whether you're a junior, a masters athlete, or racing for the prize money – there’s a place for you.
          </p>
        </div>
      </section>

      {/* 2024 Highlights Section */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">2024 Highlights</h2>
          <p className="text-lg text-gray-700 mb-6">
            Check out some moments from last year’s event!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="/highlight1.jpg" alt="2024 race highlight 1" className="w-64 rounded shadow" />
            <img src="/highlight2.jpg" alt="2024 race highlight 2" className="w-64 rounded shadow" />
            <img src="/highlight3.jpg" alt="2024 race highlight 3" className="w-64 rounded shadow" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102A43] text-white text-center py-6">
        <p>&copy; 2026 Run The Loop | Powered by Adelaide University Athletics Club</p>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <main className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src="/logo-placeholder.png" alt="Run The Loop Logo" className="h-12" />
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="text-gray-700 hover:text-[#00B28A]">About</a>
            <a href="#register" className="text-gray-700 hover:text-[#00B28A]">Register</a>
            <a href="#gallery" className="text-gray-700 hover:text-[#00B28A]">Gallery</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/hero-bg-placeholder.jpg')" }}>
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-md">Run The Loop 2026</h1>
        <p className="mt-4 text-xl md:text-2xl drop-shadow">Conquer the Loop. Start your fitness goals right.</p>
        <a href="https://www.revolutionise.com.au/auac/run-the-loop" target="_blank" rel="noopener noreferrer"
           className="mt-8 bg-[#00B28A] hover:bg-[#009e7a] text-white py-3 px-8 rounded-lg text-lg font-semibold">
          Enter Now
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#102A43]">About the Event</h2>
          <p className="mt-6 text-lg text-gray-700">
            Run The Loop is Adelaide’s most iconic loop race – a fast, scenic circuit open to all levels. 
            Whether you’re chasing prize money, racing with your age group, or just getting started, there’s a spot for you.
          </p>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <img src="/icon-prize.png" alt="Prize Icon" className="h-12 mx-auto mb-2" />
            <p className="text-[#102A43] font-semibold">Prize Money</p>
          </div>
          <div>
            <img src="/icon-scenery.png" alt="Scenic Icon" className="h-12 mx-auto mb-2" />
            <p className="text-[#102A43] font-semibold">Scenic Uni Loop</p>
          </div>
          <div>
            <img src="/icon-age.png" alt="Age Icon" className="h-12 mx-auto mb-2" />
            <p className="text-[#102A43] font-semibold">Age Categories</p>
          </div>
          <div>
            <img src="/icon-fast.png" alt="Fast Icon" className="h-12 mx-auto mb-2" />
            <p className="text-[#102A43] font-semibold">PB Friendly</p>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="bg-[#102A43] text-white text-center py-20 px-4">
        <h2 className="text-3xl font-bold">Ready to Run?</h2>
        <p className="mt-4 text-lg">Join the race and take on the challenge.</p>
        <a href="https://www.revolutionise.com.au/auac/run-the-loop" target="_blank" rel="noopener noreferrer"
           className="mt-6 inline-block bg-[#00B28A] hover:bg-[#009e7a] text-white py-3 px-8 rounded-lg text-lg font-semibold">
          Register Now
        </a>

        {/* Sponsor Logos */}
        <div className="flex justify-center flex-wrap gap-6 mt-12">
          <img src="/sponsor1.png" alt="Sponsor 1" className="h-10" />
          <img src="/sponsor2.png" alt="Sponsor 2" className="h-10" />
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#102A43]">2024 Highlights</h2>
        <p className="text-gray-600 mt-2">Scenes from last year’s event</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          <img src="/highlight1.jpg" alt="Highlight 1" className="rounded shadow" />
          <img src="/highlight2.jpg" alt="Highlight 2" className="rounded shadow" />
          <img src="/highlight3.jpg" alt="Highlight 3" className="rounded shadow" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102A43] text-white text-center py-6 text-sm">
        <p>© 2026 Run The Loop | Hosted by Adelaide University Athletics Club</p>
      </footer>
    </main>
  )
}

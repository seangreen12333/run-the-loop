export default function Home() {
  return (
    <>
     {/* HERO SECTION */}
<div
  className="relative min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/background.jpg')" }}
>
  {/* Overlay for contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Navbar */}
  <header className="relative z-10 flex items-center justify-between px-6 py-4">
    <img src="/logo_white.png" alt="Run The Loop Logo" className="h-12" />
    <nav className="space-x-6 text-white font-semibold text-lg">
      <a href="/elite" className="hover:text-[#00B28A]">Elite Races</a>
      <a href="/seeded" className="hover:text-[#00B28A]">Seeded Races</a>
      <a href="/masters" className="hover:text-[#00B28A]">Masters Race</a>
      <a href="#" className="hover:text-[#00B28A]">Junior Race</a>
      <a href="/results" className="hover:text-[#00B28A]">Results</a>
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
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-10 border-b-4 border-lime-500 inline-block">
      The Uni Loop
    </h2>
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
<section className="bg-white py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
  {/* Image Section */}
<div className="md:w-1/2 flex justify-center md:justify-start pr-6 lg:pl-20">
  <img
    src="/how-it-works.jpg"
    alt="How It Works Visual"
    className="w-[80%] md:w-[70%] lg:w-[65%] rounded-lg shadow-lg"
  />
</div>


  {/* Text Section */}
  <div className="md:w-1/2">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-6 relative inline-block">
      <span className="relative z-10">How Does It Work?</span>
      <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 z-0 rounded"></span>
    </h2>
    <ul className="space-y-4 text-lg text-gray-800 list-disc list-inside">
      <li>
        Get an official time around Adelaide’s iconic Uni Loop! Timing is provided by SA Road Runners Club & City-Bay Fun Run.
      </li>
      <li>
        Runners are seeded into heats of ~10 athletes based on seed times submitted during registration.
      </li>
      <li>
        Each heat runs individually — one finishes before the next begins.
      </li>
      <li>
        The two fastest heats will be designated as the elite races: one male, one female.
      </li>
      <li>
        All finishers receive a custom finisher pin.
      </li>
      <li>
        Elite athletes compete for prize money, with trophies awarded to:
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Top 3 male and female elite finishers</li>
          <li>Top U18 athletes</li>
          <li>Top masters athletes</li>
        </ul>
      </li>
      <li>
        For a full breakdown of prize categories, see the <span className="text-[#00B28A] font-semibold">Elite Races</span> and <span className="text-[#00B28A] font-semibold">Seeded Races</span> above.
      </li>
    </ul>
  </div>
        
</section>


{/* WHERE & WHEN SECTION */}
<section className="bg-gray-50 py-20 px-6 max-w-5xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-8 relative inline-block">
    <span className="relative z-10">Where & When?</span>
    <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 z-0 rounded"></span>
  </h2>
  <p className="text-lg text-gray-800 mb-4">
    <strong>Where:</strong> Adelaide Uni Loop — starting at the 0-metre mark on the eastern corner of Mackinnon Parade.
  </p>
  <p className="text-lg text-gray-800 mb-4">
    <strong>When:</strong> Friday 16th January 2026
  </p>
  <p className="text-lg text-gray-800">
    <strong>Time:</strong> First race starts at 6:30 PM
  </p>

  {/* CTA Button */}
    <a
  href="https://maps.app.goo.gl/tkZvpiswwU1qNcp1A"  // Replace with your actual URL
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 bg-[#00B28A] hover:bg-[#009e7a] text-white font-bold py-3 px-6 rounded-lg text-md"
>
  Location
</a>

</section>

  {/* Course Records Section */}
<section className="bg-white py-20 px-6 max-w-7xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] border-b-4 border-lime-500 inline-block pb-2 mb-10">
    Course Records
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <img src="/record1.jpg" alt="Female Record" className="w-1/2 mx-auto rounded shadow-md" />
    <img src="/record2.jpg" alt="Male Record" className="w-1/2 mx-auto rounded shadow-md" />

  </div>
</section>


{/* Sponsors & Partners Section */}

<section className="bg-[#102A43] py-20 px-6">
  <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10 border-b-4 border-lime-500 inline-block">
    Sponsors & Partners
  </h2>
  
  <div className="w-full max-w-screen-xl mx-auto flex flex-wrap justify-between items-center gap-y-12">
    <img src="/sponsor1.png" alt="Sponsor 1" className="h-20 w-auto mx-6" />
    <img src="/sponsor2.png" alt="Sponsor 2" className="h-20 w-auto mx-6" />
    <img src="/sponsor3.png" alt="Sponsor 3" className="h-20 w-auto mx-6" />
    <img src="/sponsor4.png" alt="Sponsor 4" className="h-20 w-auto mx-6" />
    <img src="/sponsor5.png" alt="Sponsor 5" className="h-20 w-auto mx-6" />
  </div>
</section>




  {/* Footer */}
<footer className="bg-[#102A43] text-white py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
    
    {/* Logo */}
    <div className="flex justify-center md:justify-start">
      <img src="/logo_white.png" alt="Run The Loop Logo" className="h-20" />
    </div>

    {/* Contact Info */}
    <div className="text-center md:text-left">
      <h3 className="text-lime-400 text-xl font-bold mb-2">Contact Us</h3>
      <p>athletics@adelaideunisport.com.au</p>
      <p>0497 563 990</p>
    </div>

    {/* Social Links */}
    <div className="flex justify-center md:justify-end space-x-6">
      <a href="https://www.facebook.com/profile.php?id=61572122634418" target="_blank" rel="noopener noreferrer">
        <img src="/facebook-icon.png" alt="Facebook" className="h-8" />
      </a>
      <a href="https://www.instagram.com/run_the_loop/" target="_blank" rel="noopener noreferrer">
        <img src="/instagram-icon.png" alt="Instagram" className="h-8" />
      </a>
    </div>
  </div>
</footer>

    </>
  );
}

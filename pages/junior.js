import Footer from '../components/Footer';
import Header from '../components/Header';

export default function JuniorRacePage() {
  return (
    <>
      <Header />

      {/* HERO IMAGE */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/junior-banner.jpg')" }}
      >
        <h1 className="text-5xl font-extrabold bg-black bg-opacity-60 px-4 py-2 rounded">
          Junior Race
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] space-y-6 text-lg">
        <p>
          The Junior Race is your chance to take on the Uni Loop and see how you stack up against other young athletes in Adelaide. Whether you're chasing a personal best or just want to be part of the fun, this is the perfect way to kick off your year.
        </p>

        <p>
          All junior athletes must be <strong>under 18 at the time of competition</strong>.
        </p>

        <p>
          Junior athletes will compete within the open seeded races — this means you'll be placed with athletes of similar ability to ensure fast and competitive racing. Junior results will be extracted from official chip times.
        </p>

        {/* U18 PRIZES SPLIT SECTION */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT: TEXT */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-[#00B28A]">
              U18 Prizes (Male & Female)
            </h2>

            <ul className="list-disc list-inside space-y-2">
              <li><strong>1st place:</strong> $100<sup>*</sup></li>
              <li className="list-none pl-6 text-base text-[#102A43]">
                <span className="font-semibold">Plus:</span> 1st place gets to design their own custom One Running singlet.
              </li>
              <li><strong>2nd place:</strong> $50<sup>*</sup></li>
              <li><strong>3rd place:</strong> $30<sup>*</sup></li>
            </ul>

            <p className="text-sm italic text-gray-600 mt-3">
              <sup>*</sup> Prizes may be awarded in the form of vouchers of equivalent value.
            </p>
          </div>

          {/* RIGHT: LOGO */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-sm flex items-center justify-center">
              <img
                src="/OneRunningLogo.png"
                alt="One Running Logo"
                className="max-h-40 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <p className="mt-10">
          Whether you’re a rising star or just want to be part of the excitement, we’d love to see you out there. Bring your energy, your teammates, and your supporters — it's going to be a great afternoon.
        </p>
      </section>

      <Footer />
    </>
  );
}

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MastersRacePage() {
  return (
    <>
      <Header />

      {/* HERO IMAGE */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/masters-banner.jpg')" }} // Upload as masters-banner.jpg
      >
        <h1 className="text-5xl font-extrabold bg-black bg-opacity-60 px-4 py-2 rounded">
          Masters Race
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] space-y-8 text-lg">
        <p>
          Kick off 2026 with purpose and pace. This year, we're excited to be teaming up with{' '}
          <strong>SA Masters Athletics</strong> to offer special categories for <strong>Over 35</strong> athletes.
        </p>

        <p className="bg-[#E6FFFA] p-4 border-l-4 border-[#00B28A] rounded">
          <strong>South Australian Masters Athletics members receive free entry</strong> to the Masters races.
          Please contact <a href="https://www.samastersathletics.org.au" className="underline" target="_blank" rel="noreferrer">
            SA Masters Athletics
          </a>{' '}
          to obtain your discount code before registering.
        </p>

        <p>
          Whether you're chasing a time, setting a goal, or simply enjoying the thrill of racing around Adelaide’s most
          iconic loop, this is the event for you. It’s a celebration of experience, fitness, and community.
        </p>

        <p className="bg-[#E6FFFA] p-4 border-l-4 border-[#00B28A] rounded">
          When entering, be sure to select <strong>O35</strong> if you’d like to compete in the dedicated Masters category.
          If you’d prefer to race in the Open waves based on seed time, you’re welcome to select Open instead.
        </p>

        {/* MASTERS PRIZES SECTION */}
        <section className="pt-4 border-t border-gray-200">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3">Masters Prizes</h2>
              <p className="mb-3">
                The winning male and female in each of the <strong>O35</strong> and <strong>O55</strong> categories will receive:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>A trophy</li>
                <li>
                  A bottle of wine provided by{' '}
                  <a
                    href="https://oxenberry.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Oxenberry Farm
                  </a>
                </li>
                <li>
                  Chocolates provided by{' '}
                  <a
                    href="https://www.samastersathletics.org.au"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    South Australian Masters Athletics
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <img
                src="/ox.jpg" // Upload this as ox.jpg
                alt="Oxenberry Farm Logo"
                className="h-32 md:h-40 object-contain"
              />
            </div>
          </div>
        </section>

        {/* SAMA MEMBERS PRIZES SECTION */}
        <section className="pt-8 border-t border-gray-200">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                South Australian Masters Athletics Members Prizes
              </h2>
              <p className="mb-3">
                Thanks to{' '}
                <a
                  href="https://exurbia.com.au/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Exurbia
                </a>
                , each 10-year age category <strong>SAMA</strong> winner
                (35–44, 45–54, 55–64, 65–74, 75–84) will receive a{' '}
                <strong>$25 Exurbia gift voucher</strong>.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/Exurbia+tag_pos_RGB.png" // Upload this as Exurbia+tag_pos_RGB.png
                alt="Exurbia Logo"
                className="h-24 md:h-32 object-contain"
              />
            </div>
          </div>
        </section>

        <p className="pt-4">
          Stick around after your race to cheer on others, watch the elite fields fly, and soak up the summer racing vibe.
        </p>

        {/* SA MASTERS LOGO */}
        <div className="mt-12 text-center">
          <p className="mb-4 font-semibold text-xl">Proudly partnered with:</p>
          <img
            src="/sa-masters-logo.png" // Upload this as sa-masters-logo.png
            alt="SA Masters Athletics Logo"
            className="mx-auto h-24 md:h-32"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

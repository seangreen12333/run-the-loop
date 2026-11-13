
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function LittleAthleticsPage() {
  const registrationsOpen = false;

  return (
    <>
      <Header />

      {/* HERO IMAGE */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/little-athletics-banner.jpg')",
          backgroundPosition: 'center 35%',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-black bg-opacity-60 px-4 py-2 rounded text-center">
          Little Athletics Races
        </h1>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] space-y-8 text-lg">

        <p>
          Run The Loop is excited to be teaming up with{' '}
          <strong>Little Athletics South Australia</strong> to bring
          two dedicated races for younger runners to the Uni Loop
          in January 2027!
        </p>

        <p>
          Whether it's their first running event or they're looking
          to challenge themselves over the full loop, there's an
          opportunity for Little Athletics members of all abilities
          to get involved.
        </p>

        {/* RACE CATEGORIES */}
        <section className="pt-4 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">
            Little Athletics Races
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {/* 1KM RACE */}
            <div className="bg-[#E6FFFA] p-6 rounded-lg border-l-4 border-[#00B28A]">
              <h3 className="text-2xl font-bold mb-2">
                1km Race
              </h3>

              <p className="font-semibold mb-3">
                Ages 8–11
              </p>

              <p>
                A shorter 1km race designed for our youngest
                runners! Participants will start 1km from the
                finish line and make their way around the Uni Loop
                to the official finish.
              </p>

              <p className="mt-3">
                Parents are welcome to run alongside their
                children and share in the experience.
              </p>
            </div>

            {/* 2.2KM RACE */}
            <div className="bg-[#E6FFFA] p-6 rounded-lg border-l-4 border-[#00B28A]">
              <h3 className="text-2xl font-bold mb-2">
                2.2km Race
              </h3>

              <p className="font-semibold mb-3">
                Ages 12+
              </p>

              <p>
                Take on the full 2.2km Uni Loop in a dedicated
                race for older Little Athletics members!
              </p>

              <p className="mt-3">
                A great opportunity to test yourself over
                Adelaide's iconic running loop alongside
                fellow Little Athletics competitors.
              </p>
            </div>
          </div>
        </section>

        
{/* PARTICIPANT INCLUSIONS */}
<section className="pt-8 border-t border-gray-200">
  <h2 className="text-2xl font-bold mb-4">
    Every Participant Receives
  </h2>

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

    {/* PARTICIPANT BENEFITS */}
    <ul className="list-disc list-inside space-y-2 flex-1">
      <li>An official chip-timed result</li>
      <li>A Run The Loop finisher pin</li>
      <li>A free sausage in bread from the BBQ</li>
      <li>Juice provided by Nippy's</li>
    </ul>

    {/* NIPPY'S LOGO */}
    <div className="flex justify-center md:justify-end md:w-1/3">
      <img
        src="/Nippy.jpg"
        alt="Nippy's Logo"
        className="w-40 md:w-52 max-h-36 object-contain"
      />
    </div>

  </div>
</section>


        {/* PRIZES */}
        <section className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">
            Race Prizes
          </h2>

          <p>
            The <strong>first male and first female</strong> finisher
            in each of the 1km and 2.2km races will receive
            a <strong>Run The Loop medal</strong>.
          </p>

          <p className="mt-3">
            Every participant will also receive a finisher pin
            to celebrate their achievement!
          </p>
        </section>

        {/* REGISTRATION */}
        <section className="pt-8 border-t border-gray-200 text-center">
          <h2 className="text-2xl font-bold mb-4">
            How to Enter
          </h2>

          <p className="mb-4">
            Registrations for the Little Athletics races will
            be managed through <strong>Little Athletics SA</strong>{' '}
            using ResultsHQ.
          </p>

          {!registrationsOpen && (
            <p className="font-semibold text-[#007F68] mb-4">
              Registrations opening soon!
            </p>
          )}

          {registrationsOpen ? (
            <a
              href="https://resultshq.com.au/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00B28A] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#008F70] transition"
            >
              Register via ResultsHQ
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-block bg-gray-400 text-white font-bold px-8 py-4 rounded-lg cursor-not-allowed"
            >
              Register via ResultsHQ — Coming Soon
            </span>
          )}

          <p className="text-sm text-gray-600 mt-4">
            Entries will be available through the
            Little Athletics SA registration system.
          </p>
        </section>

        {/* EVENT ATMOSPHERE */}
        <p className="pt-4">
          Stick around after your race to cheer on the other
          runners, watch Adelaide's elite athletes in action,
          and enjoy a great evening of athletics for all ages!
        </p>

        {/* LITTLE ATHLETICS SA LOGO */}
        <div className="mt-12 text-center">
          <p className="mb-4 font-semibold text-xl">
            Proudly partnered with:
          </p>

          <img
            src="/little-athletics-sa-logo.png"
            alt="Little Athletics South Australia Logo"
            className="mx-auto h-24 md:h-32 object-contain"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

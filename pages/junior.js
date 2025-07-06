import Footer from '../components/Footer';
import Header from '../components/Header';

export default function JuniorRacePage() {
  return (
    <>
      <Header />

      {/* HERO IMAGE */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/junior-banner.jpg')" }} // Make sure you have this image in public folder
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

        <h2 className="text-2xl font-bold mt-10 mb-2 text-[#00B28A]">U18 Prize Money</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>1st place (Male & Female):</strong> $100</li>
          <li><strong>2nd place:</strong> $50</li>
          <li><strong>3rd place:</strong> $30</li>
        </ul>

        <p className="mt-10">
          Whether you’re a rising star or just want to be part of the excitement, we’d love to see you out there. Bring your energy, your teammates, and your supporters — it's going to be a great afternoon.
        </p>
      </section>

      <Footer />
    </>
  );
}

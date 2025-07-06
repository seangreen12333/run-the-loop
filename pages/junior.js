import Footer from '../components/Footer';
import Header from '../components/Header';

export default function JuniorRacePage() {
  return (
    <>
      <Header />

      {/* HERO IMAGE */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/junior-banner.jpg')" }} // Upload a banner named junior-banner.jpg
      >
        <h1 className="text-5xl font-extrabold bg-black bg-opacity-60 px-4 py-2 rounded">
          Junior Race
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] space-y-6 text-lg">
        <p>
          The Junior Race is your chance to take on the Uni Loop and see how you stack up against other young athletes in Adelaide. Whether you're chasing a personal best or just want to be part of the fun, this is the perfect event to test your speed and enjoy the atmosphere.
        </p>

        <p>
          The race is open to <strong>Under 18 male and female</strong> competitors and will be part of the seeded races. That means you'll be placed with others of a similar ability for a smooth and competitive experience.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-2 text-[#00B28A]">Prize Money (U18)</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>1st place:</strong> $100</li>
          <li><strong>2nd place:</strong> $50</li>
          <li><strong>3rd place:</strong> $30</li>
        </ul>

        <p className="mt-6">
          All junior finishers will receive a special <strong>finisher pin</strong> as a memento of the day. Stick around after your race to cheer on the elite fields and enjoy a Friday afternoon of running, racing, and community.
        </p>

        <p>
          Whether you're an aspiring champion or just love to run, this is your chance to be part of a unique and inspiring event. Let's see what you've got!
        </p>
      </section>

      <Footer />
    </>
  );
}

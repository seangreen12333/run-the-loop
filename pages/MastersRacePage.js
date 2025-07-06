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

      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] space-y-6 text-lg">
        <p>
          Kick off 2026 with purpose — and pace! This year, we're excited to be teaming up with <strong>SA Masters Athletics</strong> to offer special categories for <strong>Over 35</strong> and <strong>Over 55</strong> athletes.
        </p>

        <p>
          Whether you're chasing a time, setting a goal, or simply enjoying the thrill of racing around Adelaide’s most iconic loop — this is the event for you. It’s a celebration of experience, fitness, and community.
        </p>

        <p className="bg-[#E6FFFA] p-4 border-l-4 border-[#00B28A] rounded">
          When entering, be sure to select <strong>O35</strong> or <strong>O55</strong> if you’d like to compete in the dedicated Masters categories. If you’d prefer to race in the Open waves based on seed time, you’re welcome to select Open instead.
        </p>

        <p>
          Prizes for the top Masters finishers are proudly provided by SA Masters — more details to come!
        </p>

        <p>
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

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StartList2026() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/startlist-banner.jpg')" }}
      >
        <h1 className="text-5xl font-extrabold bg-black bg-opacity-60 px-4 py-2 rounded">
          2026 Start List
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] space-y-6 text-lg">
        <p>
          The provisional start list for Run The Loop 2026 will be published here.
        </p>

        <p>
          Start lists are subject to change. Final seeding will be confirmed closer
          to race day.
        </p>
      </section>

      <Footer />
    </>
  );
}

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
          The Junior Race is your chance to take on the Uni Loop and see how you stack up against other young athletes in Adelaide. Whether you're chasing a personal best or just want to be part of the fun,

export default function Home() {
  return (
    <>
      <section className="bg-[#102A43] text-white py-16 px-4 text-center">
        <img
          src="/logo.png"
          alt="Run The Loop Logo"
          style={{ width: '200px', height: 'auto' }}
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl md:text-3xl font-light">
          Start your 2026 fitness goals off right at the Adelaide Uni Loop
        </h2>
        <a
          href="https://www.revolutionise.com.au/auac/run-the-loop"
          className="inline-block mt-6 bg-[#00B28A] hover:bg-[#009e7a] text-white font-semibold py-3 px-6 rounded-lg text-lg"
        >
          Enter Now
        </a>
      </section>
    </>
  );
}

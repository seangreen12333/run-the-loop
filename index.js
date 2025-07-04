import Head from 'next/head'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 md:px-20">
      <Head>
        <title>Run the Loop 2026</title>
      </Head>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Run the Loop 2026</h1>
        <p className="text-xl md:text-2xl mb-6">
          Fast. Flat. Fierce. January 10, 2026 • Adelaide Uni Loop
        </p>
        <button className="bg-black text-white text-lg px-6 py-3 rounded-2xl shadow-lg">
          Register Now
        </button>
      </section>

      {/* Info Cards */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="border p-6 flex items-center gap-4">
          <div>
            <h3 className="font-semibold text-lg">Date</h3>
            <p>Saturday, January 10, 2026</p>
          </div>
        </div>
        <div className="border p-6 flex items-center gap-4">
          <div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p>Adelaide Uni Loop, North Terrace</p>
          </div>
        </div>
        <div className="border p-6 flex items-center gap-4">
          <div>
            <h3 className="font-semibold text-lg">Start Time</h3>
            <p>First race from 6:00 PM</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What is Run the Loop?</h2>
        <p className="text-lg mb-4">
          Run the Loop is Adelaide's showcase 5k event – a fast, flat race around the iconic Uni Loop.
          With elite heats, under-18 categories, masters divisions and prize money for every level,
          it's where competition meets community.
        </p>
        <p className="text-lg">
          Whether you're chasing a PB or soaking in the atmosphere, Run the Loop is the place to be this summer.
        </p>
      </section>
    </main>
  )
}
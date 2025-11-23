import Footer from '../components/Footer';
import Header from '../components/Header';

export default function EliteRacesPage() {
  return (
    <>
      <Header />

      {/* HERO IMAGE */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/elite-banner.jpg')" }}
      >
        <h1 className="text-5xl font-extrabold bg-black bg-opacity-60 px-4 py-2 rounded">
          Elite Races
        </h1>
      </section>

      {/* ELITE INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-[#102A43] text-lg text-center">
        <p className="mb-4">
          Come and see the best of Adelaide&apos;s distance runners battle it out for glory on the Uni Loop!
        </p>
        <p>
          Our showcase events! Two elite races that will feature Adelaide&apos;s fastest runners. These elite fields will race
          for cash, trophies, and the prestigious title of <strong>Uni Loop Champion</strong>.
        </p>
      </section>

      {/* PRIZE MONEY */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text - left */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-6 relative inline-block">
              <span className="relative z-10 text-[#102A43]">Prize Money</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 z-0 rounded"></span>
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              Thanks to <strong>Bridging Barriers</strong>, Run The Loop will once again offer up{' '}
              <strong>$2,000</strong> in prize money to be split between podium finishers.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
              <li>
                <strong>1st place:</strong> $500
              </li>
              <li>
                <strong>2nd place:</strong> $350
              </li>
              <li>
                <strong>3rd place:</strong> $150
              </li>
            </ul>
          </div>

          {/* Bridging Barriers logo - right */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/BB LOGO DARK BLUE (3).png"
              alt="Bridging Barriers logo"
              className="max-h-40 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* RUNDNA 1K */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* RunDNA logo - left */}
          <div className="md:w-1/2 flex justify-center order-1">
            <img src="/rundna.png" alt="RunDNA logo" className="max-h-40 w-auto object-contain" />
          </div>

          {/* Text - right */}
          <div className="md:w-1/2 text-left md:text-right order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-6 relative inline-block md:ml-auto">
              <span className="relative z-10">RunDNA 1K</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 z-0 rounded"></span>
            </h2>
            <p className="text-lg text-gray-800 mb-3">
              New for 2026, the first male and female elite athletes to pass the 1&nbsp;km mark in their race will each
              receive a <strong>$150</strong> RunDNA voucher.
            </p>
            <p className="text-xs md:text-sm text-gray-700 leading-snug">
              If two or more athletes cannot be separated at the 1&nbsp;km mark, the RunDNA 1K bonus will be awarded to
              the athlete who finishes highest among the tied group at the finish line.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE RECORD BONUS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text - left */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102A43] mb-6 relative inline-block">
              <span className="relative z-10">Course Record Bonus</span>
              <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-500 z-0 rounded"></span>
            </h2>
            <p className="text-lg text-gray-800 mb-3">
              The current women&apos;s record is held by <strong>Caitlin Adams</strong> in a time of{' '}
              <strong>6:47</strong>, and the men&apos;s record is held by <strong>Jonathan Harris</strong> in a time of{' '}
              <strong>5:59</strong>.
            </p>
            <p className="text-lg text-gray-800">
              Breaking one of these records will result in an extra <strong>$100</strong> bonus for
             the first athlete who goes under the existing mark.
            </p>
          </div>

          {/* Record images - right */}
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/record1.jpg"
                alt="Female course record holder"
                className="w-full rounded shadow-md object-cover"
              />
              <img
                src="/record2.jpg"
                alt="Male course record holder"
                className="w-full rounded shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="max-w-6xl mx-auto px-4 pb-10 pt-6 text-center text-[#102A43]">
        <p className="text-lg mt-4">Think you&apos;ve got what it takes? Time to conquer the Loop.</p>
      </section>


      <Footer />
    </>
  );
}

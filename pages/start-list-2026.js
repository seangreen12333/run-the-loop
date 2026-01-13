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

        {/* START LIST / LIVE RESULTS BUTTON */}
<section className="bg-[#F5F7FA] py-6">
  <div className="max-w-6xl mx-auto px-4 flex justify-center">
    <a
      href="https://sarrc.asn.au/Race_Results/showCB?Race=auac%20run%20the%20loop%202026"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#00B28A] hover:bg-[#009A77] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-md transition-colors duration-200"
    >
      Start List &amp; Live Results Here
    </a>
  </div>
</section>

{/* TIMETABLE */}
<h2 className="text-3xl font-bold mt-12">
  Timetable
</h2>

<ul className="space-y-2 text-lg">
  <li>Master (O35 and O55) women – 6:15</li>
  <li>Masters (O35 and O55) Men – 6:35</li>
  <li>Open C Race – 6:55</li>
  <li>Open B Race – 7:15</li>
  <li>Open A Race – 7:30</li>
  <li>Elite Women – 7:40</li>
  <li>Elite Men – 7:50</li>
</ul>


        {/* SUBHEADING */}
<h2 className="text-3xl font-bold">
  Men's Elite Race Preview
</h2>

<p>
  With prizes on offer at the 1 km mark as well as the finish, this year’s men’s elite race is going to be a fascinating tactical battle. 
  Early leaders may be chasing the RunDNA 1km prize which will force the contenders to make a decision: 
  go with the surge and risk paying for it late or sit back and trust their finish over the final few hundred metres.
  So who are our top contenders:

  <br />
  So who are our top contenders:
</p>

<p>
  Headlining the men’s elite field is Matt Clarke. The four-time national champion
  and two-time Olympic steeplechaser has called the Uni Loop his home since 2020.
  The Western Athletic athlete will be the man to beat as he looks retain the title
  for Team Tempo and to find out just how fast he can Run The Loop.
</p>

<p>
  Adrian Potter returns after a runner-up finish in 6:01 last year. With the defending
  record holder absent, the Adelaide Harriers athlete will be eyeing the 5:59 course
  record, though alone in this race, the gravel of the Uni Loop is not his home turf
  and presents a different challenge to his usual home of the southern parklands.
</p>

<p>
  Third in 2025, Cooper Giles will look to improve his 6:04 PB. Whether he’s better
  known for his love of Dairy Farmers chocolate milk or his devastating kick is up
  for debate; but one thing’s certain, if the Adelaide Uni athlete is still there with
  200 m to go, the rest of the field may start to worry.
</p>

<p>
  Expect Arron Nitschke to make it an honest race from the front. The Australian
  duathlete brings a huge aerobic engine, and while this is his first official Loop
  race, he knows the course well and we will wait for the moment he decides to roll
  the dice.
</p>

<p>
  U18 standouts Josh Kavanagh and Tristan Kidd will go head-to-head for junior honours.
  The only two U18s in this race, they were separated by just three seconds last year
  and will toe the line knowing exactly what’s required after the rest of the U18
  field has already raced earlier in the evening.
</p>

<p>
  Rounding out our elite field are James McManus, Harry McGregor, Casey Atkinson,
  Joe Cross, Harrison Wade, Zac Connell, and Bailey Giles, all capable of upsetting the favourites
  and claiming the Uni Loop crown.
</p>

      </section>

    {/* REGULATIONS / PRIZES */}
<section className="max-w-6xl mx-auto px-4 pb-12 text-sm text-[#627D98]">
  <p>
    Technical and prize regulations apply. Full details can be found in the{' '}
    <a
      href="/Run_The_loop_prizes.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-[#00B28A]"
    >
      Run The Loop prize regulations
    </a>.
  </p>
</section>

      <Footer />
    </>
  );
}

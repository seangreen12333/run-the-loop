import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Run The Loop</title>
        <meta name="description" content="Conquer the Loop – Start your 2026 fitness goals off right." />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <Image src="/run-the-loop-logo.png" alt="Run The Loop Logo" width={240} height={60} />
          <h1>Conquer the Loop</h1>
          <p>Start your 2026 fitness goals off right at the Adelaide Uni Loop.</p>
          <a className={styles.cta} href="https://www.revolutionise.com.au/auac/run-the-loop/">Enter Now</a>
        </header>
        <section className={styles.about}>
          <h2>About the Event</h2>
          <p>Run The Loop is Adelaide’s most iconic loop race. Whether you're a junior, a masters athlete, or racing for the prize money – there’s a place for you.</p>
        </section>
        <section className={styles.photos}>
          <h2>2024 Highlights</h2>
          <p>Check out some moments from last year’s event!</p>
          <div className={styles.gallery}>
            <Image src="/photo1.jpg" alt="2024 race highlight 1" width={300} height={200} />
            <Image src="/photo2.jpg" alt="2024 race highlight 2" width={300} height={200} />
            <Image src="/photo3.jpg" alt="2024 race highlight 3" width={300} height={200} />
          </div>
        </section>
        <footer className={styles.footer}>
          <p>Supported by Adelaide University Athletics Club | Proudly sponsored by our partners</p>
        </footer>
      </main>
    </>
  );
}

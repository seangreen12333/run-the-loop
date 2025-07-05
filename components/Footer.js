// components/Footer.js
const Footer = () => (
  <footer className="bg-[#102A43] text-white py-12 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <img src="/logo.png" alt="Run The Loop Logo" className="h-12 mx-auto mb-4" />
      <p>Contact: <a href="mailto:athletics@adelaideunisport.com.au" className="underline">athletics@adelaideunisport.com.au</a> | 0000000000</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://www.facebook.com/profile.php?id=61572122634418" target="_self">
          <img src="/facebook-icon.png" alt="Facebook" className="h-6" />
        </a>
        <a href="https://www.instagram.com/run_the_loop/" target="_self">
          <img src="/instagram-icon.png" alt="Instagram" className="h-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

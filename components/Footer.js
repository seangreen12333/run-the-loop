// components/Footer.js
// components/Footer.js
const Footer = () => (
  <footer className="bg-[#102A43] text-white py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
      
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <img src="/logo_white.png" alt="Run The Loop Logo" className="h-20" />
      </div>

      {/* Contact Info */}
      <div className="text-center md:text-left">
        <h3 className="text-lime-400 text-xl font-bold mb-2">Contact Us</h3>
        <p>athletics@adelaideunisport.com.au</p>
        <p>0497 563 990</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center md:justify-end space-x-6">
        <a href="https://www.facebook.com/profile.php?id=61572122634418" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-icon.png" alt="Facebook" className="h-8" />
        </a>
        <a href="https://www.instagram.com/run_the_loop/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-icon.png" alt="Instagram" className="h-8" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;


export default Footer;

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-black font-manrope text-sm">
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] w-full px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          {/* Logo */}
          <div className="mb-10 sm:mb-12">
            <img
              src="/supreme_logo.png"
              alt="Supreme Group Logo"
              className="h-8 sm:h-10"
            />
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 sm:gap-x-16 lg:gap-x-20 gap-y-10">
            <div className="min-w-[10rem]">
              <h4 className="text-xs font-bold uppercase mb-4 tracking-wide">Applications</h4>
              <ul className="space-y-2 sm:space-y-3 font-normal text-gray-600">
                <li><Link href="/applications/apparel">Apparel</Link></li>
                <li><Link href="/applications/automotive">Automotive</Link></li>
                <li><Link href="/applications/filtration">Filtration</Link></li>
                <li><Link href="/applications/customised-solutions">Customised Solutions</Link></li>
              </ul>
            </div>

            <div className="min-w-[10rem]">
              <h4 className="text-xs font-bold uppercase mb-4 tracking-wide">Company</h4>
              <ul className="space-y-2 sm:space-y-3 font-normal text-gray-600">
                <li><Link href="/company/innovation">Innovation</Link></li>
                <li><Link href="/company/global-competency">Global Competency</Link></li>
                <li><Link href="/company/about-us">About Us</Link></li>
                <li><Link href="/company/contact-us">Contact Us</Link></li>
              </ul>
            </div>

            <div className="min-w-[10rem]">
              <h4 className="text-xs font-bold uppercase mb-4 tracking-wide">More</h4>
              <ul className="space-y-2 sm:space-y-3 font-normal text-gray-600">
                <li><Link href="/more/careers">Careers</Link></li>
                <li><Link href="/more/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/more/terms-and-conditions">Terms and Conditions</Link></li>
              </ul>
            </div>

            <div className="min-w-[10rem]">
              <h4 className="text-xs font-bold uppercase mb-4 tracking-wide">Follow Us</h4>
              <ul className="space-y-2 sm:space-y-3 font-normal text-gray-600">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://medium.com" target="_blank" rel="noopener noreferrer">Medium</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="border-t border-gray-200 mt-10 pt-4 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 leading-relaxed">
            <p>© {new Date().getFullYear()}. All Rights Reserved.</p>
            <p>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              Luxury Minimal is a curated portfolio of five automotive masterpieces, each representing the pinnacle of minimalist design and exceptional performance.
            </p>
          </div>

          {/* Models */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Models</h3>
            <ul className="space-y-3">
              <li>
                <a href="/models/aurora" className="text-sm hover:text-white transition-colors">
                  Aurora
                </a>
              </li>
              <li>
                <a href="/models/elysian" className="text-sm hover:text-white transition-colors">
                  Elysian
                </a>
              </li>
              <li>
                <a href="/models/nocturne" className="text-sm hover:text-white transition-colors">
                  Nocturne
                </a>
              </li>
              <li>
                <a href="/models/solstice" className="text-sm hover:text-white transition-colors">
                  Solstice
                </a>
              </li>
              <li>
                <a href="/models/veritas" className="text-sm hover:text-white transition-colors">
                  Veritas
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Ownership
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@luxuryminimal.com" className="hover:text-white transition-colors">
                  hello@luxuryminimal.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-gray-500">New York, USA</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {currentYear} Luxury Minimal. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  const logo = "https://i.ibb.co/v4qfB40Y/plant5-modified.png";

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex gap-2 items-center mb-3">
            <img src={logo} alt="TreePlant Logo" className="w-8 h-8 rounded-full" />
            <h2 className="text-2xl font-bold text-white">TreePlant</h2>
          </div>
          <p className="text-sm text-gray-400">
            Grow your green space with ease. We deliver healthy plants and expert care tips.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +88 (01) 794356532
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> smnahidh040@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} PlantTree Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

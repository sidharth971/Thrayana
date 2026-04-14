import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-3 sm:py-4">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 sm:w-14 sm:h-12 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center shadow-lg">
                <img src="/assets/brand/Thrayana.jpg" alt="Thrayana Logo" className="h-full w-auto object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Thrayana PRIVATE LIMITED</h3>
                <p className="text-base text-gray-300 font-medium">Premium Export Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Leading Banana Fiber, Indian spices, processed food & tea exporter connecting global markets with premium quality products. 
              We specialize in authentic Indian flavors and traditional handicrafts.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://x.com/Thrayana_pvtltd" target="_blank" rel="noopener noreferrer" className="text-white transition-all bg-black p-2.5 rounded-full hover:scale-110 hover:ring-2 hover:ring-white/20 shadow-sm" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="https://www.facebook.com/people/Thrayana-Private-Limited/61573359263495" target="_blank" rel="noopener noreferrer" className="text-white transition-all bg-[#1877F2] p-2.5 rounded-full hover:opacity-90 hover:scale-110 shadow-sm" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/thrayana_private_limited/" target="_blank" rel="noopener noreferrer" className="text-white transition-all bg-gradient-to-tr from-[#f09433] to-[#bc1888] p-2.5 rounded-full hover:opacity-90 hover:scale-110 shadow-sm" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/108383527/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-white transition-all bg-[#0A66C2] p-2.5 rounded-full hover:opacity-90 hover:scale-110 shadow-sm" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-1.5 text-base">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-primary transition-colors font-medium">Products</Link></li>
              <li><Link to="/certificates" className="text-gray-300 hover:text-primary transition-colors font-medium">Certificates</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-white">Our Products</h4>
            <ul className="space-y-1.5 text-base">
              <li><Link to="/products/Turmeric-Powder" className="text-gray-300 hover:text-primary transition-colors font-medium">Turmeric Powder</Link></li>
              <li><Link to="/products/Moringa-Powder" className="text-gray-300 hover:text-primary transition-colors font-medium">Moringa Powder</Link></li>
              <li><Link to="/products/Banana-Powder" className="text-gray-300 hover:text-primary transition-colors font-medium">Banana Powder</Link></li>
              <li><Link to="/products/Guntur-Red-Chilli-Powder" className="text-gray-300 hover:text-primary transition-colors font-medium">Red Chilli Powder</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-white">Contact Us</h4>
            <div className="space-y-2 text-base">
              <div className="flex items-center gap-2">
                <span className="text-primary">📞</span>
                <span className="text-gray-300 font-medium">+91 9160040202</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">📞</span>
                <span className="text-gray-300 font-medium">+91 8310439092</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✉️</span>
                <span className="text-gray-300 font-medium">sales@thrayana.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">🌐</span>
                <span className="text-gray-300 font-medium">thrayana.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-3 sm:mt-4 pt-2 sm:pt-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-base text-gray-400 font-medium">
              © THRAYANA PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
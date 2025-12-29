import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-white text-primary p-1.5 rounded-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">STEELCRAFT</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Precision-engineered stainless steel equipment for commercial kitchens, industrial facilities, and laboratories. Built to last a lifetime.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wide text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-accent transition-colors text-sm">Our Products</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors text-sm">Contact Us</Link>
              </li>
              <li>
                <span className="text-gray-500 text-sm cursor-not-allowed">Careers (Coming Soon)</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wide text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>123 Industrial Ave, Sector 4<br />Steel City, PA 15201</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>sales@steelcraft.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wide text-white">Business Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-accent">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SteelCraft Manufacturing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

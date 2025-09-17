import React from 'react';
import { Cross, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cross className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">Grace Community Church</span>
            </div>
            <p className="text-blue-200 leading-relaxed mb-4">
              A place where people can meet Jesus, engage in life-giving community, 
              and everyone is welcome. Join us as we grow in faith and serve others together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors duration-300">Service Times</a></li>
              <li><a href="#events" className="hover:text-yellow-400 transition-colors duration-300">Events</a></li>
              <li><a href="#staff" className="hover:text-yellow-400 transition-colors duration-300">Our Staff</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-blue-200">
              <p>123 Faith Street</p>
              <p>Hope Valley, CA 12345</p>
              <p className="mt-4">(555) 123-4567</p>
              <p>info@gracecommunity.org</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-2 text-red-400" /> for our community
            <span className="mx-2">•</span>
            © 2024 Grace Community Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
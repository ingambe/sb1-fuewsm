import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Real Estate</h3>
            <p className="text-sm">Revolutionizing the way you find and book your dream property with AI-powered insights.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-primary">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
              <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
              <li><a href="/terms" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/buy" className="hover:text-primary">Buy Property</a></li>
              <li><a href="/rent" className="hover:text-primary">Rent Property</a></li>
              <li><a href="/sell" className="hover:text-primary">Sell Property</a></li>
              <li><a href="/ai-valuation" className="hover:text-primary">AI Property Valuation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; 2024 AI Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-heading text-2xl font-bold text-gray-text">AlgoMonkx</a>

          <nav className="hidden md:flex items-center space-x-1">
            <a href="#course" className="px-4 py-3 text-base text-gray-text hover:text-primary transition">Courses</a>
            <a href="#about" className="px-4 py-3 text-base text-gray-text hover:text-primary transition">About</a>
            <a href="#service" className="px-4 py-3 text-base text-gray-text hover:text-primary transition">Service</a>
            <a href="#events" className="px-4 py-3 text-base text-gray-text hover:text-primary transition">Events</a>
            <a href="#blog" className="px-4 py-3 text-base text-gray-text hover:text-primary transition">Blog</a>
          </nav>

          <a href="#" className="hidden md:inline-block px-10 py-2.5 border border-primary text-primary font-heading text-sm font-semibold rounded-md hover:bg-primary hover:text-white transition">Start Free</a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            <a href="#course" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-gray-text hover:bg-gray-50 rounded">Courses</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-gray-text hover:bg-gray-50 rounded">About</a>
            <a href="#service" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-gray-text hover:bg-gray-50 rounded">Service</a>
            <a href="#events" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-gray-text hover:bg-gray-50 rounded">Events</a>
            <a href="#blog" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-gray-text hover:bg-gray-50 rounded">Blog</a>
            <a href="#" className="block px-4 py-3 text-base text-primary font-semibold">Start Free</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Menu, X, Cross } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Cross className="h-8 w-8 text-blue-700" />
            <span className="text-2xl font-bold text-blue-700">Grace Community Church</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('events')} className="nav-link">Events</button>
            <button onClick={() => scrollToSection('staff')} className="nav-link">Staff</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-blue-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="nav-link text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="nav-link text-left">Services</button>
              <button onClick={() => scrollToSection('events')} className="nav-link text-left">Events</button>
              <button onClick={() => scrollToSection('staff')} className="nav-link text-left">Staff</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
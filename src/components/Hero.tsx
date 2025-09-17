import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome Home
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Join our loving community as we grow in faith, serve others, and experience God's grace together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Us This Sunday
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
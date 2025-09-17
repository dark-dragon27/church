import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Events from './components/Events';
import Staff from './components/Staff';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Events />
      <Staff />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
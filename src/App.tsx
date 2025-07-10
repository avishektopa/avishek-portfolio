import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <Education />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
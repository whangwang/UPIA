import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { FocusAreas } from './components/FocusAreas';
import { Membership } from './components/Membership';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-200 selection:bg-pacific-500 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <FocusAreas />
        <Membership />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
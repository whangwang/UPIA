import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { FocusAreas } from './components/FocusAreas';
import { Membership } from './components/Membership';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-200 selection:bg-pacific-500 selection:text-white font-sans">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Mission />
        <FocusAreas />
        <Membership onOpenModal={() => setIsModalOpen(true)} />
        <Team />
      </main>
      <Footer />
      <AnimatePresence>
        {isModalOpen && <ApplyModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
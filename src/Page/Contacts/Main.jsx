// ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ElegantHero from './Components/ElegantHero';
import ContactIntro from './Components/ContactIntro';
import LuxuryContactGrid from './Components/LuxuryContactGrid';
import MinimalContactForm from './Components/MinimalContactForm';
import ReservationWizard from './Components/ReservationWizard';
import FloatingChat from './Components/FloatingChat';
import CelebrationSection from './Components/CelebrationSection';
import InteractiveMap from './Components/InteractiveMap';
import ContactFooter from './Components/ContactFooter';
import GoldenParticles from './Components/GoldenParticles';

const Main = () => {
  const [activeWizard, setActiveWizard] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-cream via-white to-metallic-gold/5 relative overflow-hidden">
      <GoldenParticles />
      <FloatingChat />
      
      <ElegantHero onReservationClick={() => setActiveWizard(true)} />
      
      <div className="relative z-10">
        <ContactIntro />
        <LuxuryContactGrid />
        
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid xl:grid-cols-2 gap-16 items-start">
            <MinimalContactForm />
            <ReservationWizard 
              isOpen={activeWizard}
              onClose={() => setActiveWizard(false)}
            />
          </div>
        </div>
        
        <CelebrationSection />
        <InteractiveMap />
        {/* <ContactFooter /> */}
      </div>
    </div>
  );
};

export default Main;
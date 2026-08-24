import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Highlights from '../components/Highlights/Highlights';
import Events from '../components/Events/Events';
import Merchandise from '../components/Merchandise/Merchandise';
import Footer from '../components/Footer/Footer';
import RegistrationModal from '../components/common/RegistrationModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleOpenRegister = (itemTitle: string = 'ALL ACCESS PASS') => {
    setSelectedItem(itemTitle);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-[#030304] text-white selection:bg-cyan-500 selection:text-black font-body overflow-x-hidden">
      <main>
        <Hero onOpenRegister={() => handleOpenRegister('HERO PASS')} />
        <About />
        <Highlights onSelectCard={(item) => handleOpenRegister(item.title)} />
        <Events onSelectCard={(item) => handleOpenRegister(item.title)} />
        <Merchandise onOpenBuy={() => handleOpenRegister("TESLA '26 OFFICIAL T-SHIRT")} />
      </main>

      <Footer />

      <RegistrationModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        initialItem={selectedItem} 
      />
    </div>
  );
}

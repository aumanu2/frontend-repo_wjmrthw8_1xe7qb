import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Models from './components/Models';
import Services from './components/Services';
import AboutPakistan from './components/AboutPakistan';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar lang={lang} onToggleLang={() => setLang(lang === 'en' ? 'ur' : 'en')} />
      <main>
        <Hero />
        <Models />
        <Services />
        <AboutPakistan />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

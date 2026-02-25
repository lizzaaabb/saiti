import React from 'react';
import Header from './components/Header';

import HeroSection from './components/HeroSection';
import Brands from './components/Brands'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Cta from './components/Cta'


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Brands/>
      <Projects/>
      <Pricing/>
      <Cta/>
    </div>
  );
}

export default App;
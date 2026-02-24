import React from 'react';
import Header from './components/Header';

import HeroSection from './components/HeroSection';
import Brands from './components/Brands'


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Brands/>
    </div>
  );
}

export default App;
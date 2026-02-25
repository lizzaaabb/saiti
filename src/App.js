import React from 'react';
import Header from './components/Header';

import HeroSection from './components/HeroSection';
import Brands from './components/Brands'
import Projects from './components/Projects'


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Brands/>
      <Projects/>
    </div>
  );
}

export default App;
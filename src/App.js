import {React, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Brands from './components/Brands';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Fasebi from './components/Fasebi'
import ProjectsPage from './components/ProjectsPage'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <Brands />
      <Projects />
      <Pricing />
      <Cta />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fasebi" element={<Fasebi />} />
          <Route path="/projects" element={<ProjectsPage />} />


        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
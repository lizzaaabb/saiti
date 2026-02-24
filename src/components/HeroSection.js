import React from 'react'
import '../styles/HeroSection.css'

const blur1 = process.env.PUBLIC_URL + '/pics/blur.png'
const web   = process.env.PUBLIC_URL + '/pics/web3.png'

function HeroSection() {
  return (
    <div className='hero-section-container'>

      <img src={blur1} alt="" className="hs-blur1" aria-hidden="true" />

      <div className="hero-content">
        <h1 className="hero-title">საიტის აწყობა</h1>
        <h1 className="hero-title2">ვებ გვერდების დამზადება</h1>
        <p className="hero-subtitle">ვებ საიტის დამზადება მარტივად და სწრაფად</p>
        <a href="#contact" className="hero-cta">დაგვიკავშირდით</a>
      </div>

      <div className="hs-web">
        <img src={web} alt="" className="hs-blur2" aria-hidden="true" />
        <div className="hs-web-fade" />
      </div>

    </div>
  )
}

export default HeroSection
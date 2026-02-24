import React from 'react'
import '../styles/HeroSection.css'

const blur1   = process.env.PUBLIC_URL + '/pics/blur.png'
const blur2   = process.env.PUBLIC_URL + '/pics/blur2.png'
const circles = process.env.PUBLIC_URL + '/pics/circles-background.png'
const web     = process.env.PUBLIC_URL + '/pics/web3.png'

function HeroSection() {
  return (
    <div className='hero-section-container'>
      <div className="hs-images">
        <img src={blur1}   alt="" className="hs-blur1"   aria-hidden="true" />
      </div>
     <div className="hs-web">
  <img src={web} alt="" className="hs-blur2" aria-hidden="true" />
  <div className="hs-web-fade" />
</div>
    </div>
  )
}

export default HeroSection
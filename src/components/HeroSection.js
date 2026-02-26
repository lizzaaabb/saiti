import React from 'react'
import '../styles/HeroSection.css'

const blur1 = process.env.PUBLIC_URL + '/pics/blur.png'
const web   = process.env.PUBLIC_URL + '/pics/web3.png'

function HeroSection() {
  return (
    <section className='hero-section-container' aria-label="მთავარი სექცია" itemScope itemType="https://schema.org/WebPageElement">

      <img src={blur1} alt="" className="hs-blur1" aria-hidden="true" width="800" height="800" />

      <div className="hero-content">
        <h1 className="hero-title">საიტის აწყობა</h1>
        <p className="hero-title2">ვებ გვერდების დამზადება</p>
        <p className="hero-subtitle" itemProp="description">პრემიუმ ხარისხის ვებ გვერდების დამზადება</p>
        <a href="tel:+995574065469" className="hero-cta" aria-label="დაგვიკავშირდით — +995 574 06 54 69">დაგვიკავშირდი</a>
      </div>

      <div className="hs-web">
        <img
          src={web}
          alt="Apollo Creations-ის მიერ დამზადებული ვებ გვერდის მაგალითი"
          className="hs-blur2"
          width="1519"
          height="793"
          loading="eager"
        />
        <div className="hs-web-fade" aria-hidden="true" />
      </div>

    </section>
  )
}

export default HeroSection
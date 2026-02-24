import React from 'react'
import '../styles/Hero.css'

const text = [{
    title: 'საიტის აწყობა',
    title2: 'ვებ გვერდების დამზადება',
    subtitle: 'ვებ საიტის დამზადება მარტივად და სწრაფად',
}]

const contact = [{
    title: 'დაგვიკავშირდით',
    phone: '+995 555 123 456'
}]

function Hero() {
  return (
    <div className="hero">

        <div className="hero-content">
            <h1 className="hero-title">{text[0].title}</h1>
            <h1 className="hero-title2">{text[0].title2}</h1>
            <p className="hero-subtitle">{text[0].subtitle}</p>
            <a href="#contact" className="hero-cta">{contact[0].title}</a>
        </div>
         
      
    </div>
  )
}

export default Hero

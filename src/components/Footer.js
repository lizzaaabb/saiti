import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="ftr-container">
      <div className="ftr-inner">

        {/* Brand */}
        <div className="ftr-brand">
          <span className="ftr-logo">საიტის დამზადება</span>
          <p className="ftr-tagline">პრემიუმ ხარისხის ვებ გვერდების დამზადება</p>
        </div>

        {/* Nav columns */}
        <div className="ftr-cols">
          <div className="ftr-col">
            <h4 className="ftr-col-title">ნავიგაცია</h4>
            <Link to="/" className="ftr-link">მთავარი</Link>
            <a href="#work" className="ftr-link">პროექტები</a>
            <a href="#blog" className="ftr-link">საიტის ფასები</a>
            <Link to="/contact" className="ftr-link">კონტაქტი</Link>
          </div>

          <div className="ftr-col">
            <h4 className="ftr-col-title">კონტაქტი</h4>
            <a href="https://wa.me/995574065469" className="ftr-link" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="tel:+995574065469" className="ftr-link">+995 574 06 54 69</a>
            <a href="mailto:business@apollocreations.net" className="ftr-link">business@apollocreations.net</a>
          </div>

          <div className="ftr-col">
            <h4 className="ftr-col-title">სოც ქსელები</h4>
            <a href="https://instagram.com/apollocreations_net" className="ftr-link" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://tiktok.com/@apollocreations.net" className="ftr-link" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://facebook.com" className="ftr-link" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="ftr-divider" />

      {/* Bottom */}
      <div className="ftr-bottom">
        <span className="ftr-copy">© {new Date().getFullYear()} Apollo Creations. ყველა უფლება დაცულია.</span>
        <span className="ftr-location">თბილისი, საქართველო</span>
      </div>
    </footer>
  )
}

export default Footer
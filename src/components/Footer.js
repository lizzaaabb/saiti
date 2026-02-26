import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="ftr-container" role="contentinfo" itemScope itemType="https://schema.org/Organization">
      <div className="ftr-inner">

        {/* Brand */}
        <div className="ftr-brand">
          <span className="ftr-logo" itemProp="name">საიტის დამზადება</span>
          <p className="ftr-tagline" itemProp="description">პრემიუმ ხარისხის ვებ გვერდების დამზადება</p>
          <meta itemProp="url" content="https://apolloweb.netlify.app" />
          <meta itemProp="areaServed" content="Georgia" />
        </div>

        {/* Nav columns */}
        <div className="ftr-cols">
          <div className="ftr-col">
            <h4 className="ftr-col-title">ნავიგაცია</h4>
            <nav aria-label="Footer ნავიგაცია" >
              <Link to="/" className="ftr-link">მთავარი</Link>
              <a href="#work" className="ftr-link">პროექტები</a>
              <Link to="/fasebi" className="ftr-link">საიტის ფასები</Link>
              <Link to="/contact" className="ftr-link">კონტაქტი</Link>
            </nav>
          </div>

          <div className="ftr-col">
            <h4 className="ftr-col-title">კონტაქტი</h4>
            <a href="https://wa.me/995574065469" className="ftr-link" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp-ზე დაგვიკავშირდით">WhatsApp</a>
            <a href="tel:+995574065469" className="ftr-link" itemProp="telephone" aria-label="დარეკეთ +995 574 06 54 69">+995 574 06 54 69</a>
            <a href="mailto:business@apollocreations.net" className="ftr-link" itemProp="email" aria-label="მოგვწერეთ business@apollocreations.net">business@apollocreations.net</a>
          </div>

          <div className="ftr-col">
            <h4 className="ftr-col-title">სოც ქსელები</h4>
            <a href="https://instagram.com/apollocreations_net" className="ftr-link" target="_blank" rel="noreferrer noopener" aria-label="Apollo Creations Instagram">Instagram</a>
            <a href="https://tiktok.com/@apollocreations.net" className="ftr-link" target="_blank" rel="noreferrer noopener" aria-label="Apollo Creations TikTok">TikTok</a>
            <a href="https://facebook.com" className="ftr-link" target="_blank" rel="noreferrer noopener" aria-label="Apollo Creations Facebook">Facebook</a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="ftr-divider" aria-hidden="true" />

      {/* Bottom */}
      <div className="ftr-bottom">
        <span className="ftr-copy">© {new Date().getFullYear()} Apollo Creations. ყველა უფლება დაცულია.</span>
        <span className="ftr-location" itemProp="address">თბილისი, საქართველო</span>
      </div>

    </footer>
  )
}

export default Footer
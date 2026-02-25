import React, { useState } from 'react'
import '../styles/Header.css'

const Logo = process.env.PUBLIC_URL + '/pics/Logo.png';

const navLinks = [
  { label: 'მთავარი', href: '#home' },
  { label: 'პროექტები', href: '#work' },
  { label: 'საიტის ფასები', href: '#blog' },
  { label: 'კონტაქტი', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="hdr-outer">
      <nav className="hdr-inner">

        {/* Logo */}
        <a href="#home" className="hdr-logo-wrap">
          <img src={Logo} alt="Apollo Creations" className="hdr-logo" />
        </a>

        {/* Center nav — all links inside ONE bordered pill */}
        <ul className="hdr-nav">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a href={link.href} className="hdr-nav-link">{link.label}</a>
              {i < navLinks.length - 1 && <span className="hdr-nav-divider" />}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="hdr-cta">დაგვიკავშირდი</a>

        {/* Mobile hamburger */}
        <button
          className="hdr-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="menu"
        >
          <span className={`hdr-ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hdr-ham-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hdr-ham-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`hdr-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="hdr-drawer-close" onClick={() => setMenuOpen(false)}>✕</button>
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="hdr-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="hdr-mobile-cta" onClick={() => setMenuOpen(false)}>
          დაგვიკავშირდი
        </a>
      </div>
    </header>
  )
}

export default Header
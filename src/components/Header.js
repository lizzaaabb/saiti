import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Logo = process.env.PUBLIC_URL + '/pics/Logo.png';

const navLinks = [
  { label: 'მთავარი', to: '/' },
  { label: 'პროექტები', href: '#work' },
  { label: 'საიტის ფასები', href: '/fasebi' },
  { label: 'კონტაქტი', to: '/contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="hdr-outer">
      <nav className="hdr-inner">
        <Link to="/" className="hdr-logo-wrap">
          <img src={Logo} alt="Apollo Creations" className="hdr-logo" />
        </Link>

        <ul className="hdr-nav">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              {link.to
                ? <Link to={link.to} className="hdr-nav-link">{link.label}</Link>
                : <a href={link.href} className="hdr-nav-link">{link.label}</a>
              }
              {i < navLinks.length - 1 && <span className="hdr-nav-divider" />}
            </li>
          ))}
        </ul>

        <a href="#contact" className="hdr-cta">დაგვიკავშირდი</a>

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

      <div className={`hdr-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="hdr-drawer-close" onClick={() => setMenuOpen(false)}>✕</button>
        {navLinks.map(link => (
          link.to
            ? <Link key={link.label} to={link.to} className="hdr-mobile-link" onClick={() => setMenuOpen(false)}>{link.label}</Link>
            : <a key={link.label} href={link.href} className="hdr-mobile-link" onClick={() => setMenuOpen(false)}>{link.label}</a>
        ))}
        <a href="#contact" className="hdr-mobile-cta" onClick={() => setMenuOpen(false)}>
          დაგვიკავშირდი
        </a>
      </div>
    </header>
  )
}

export default Header
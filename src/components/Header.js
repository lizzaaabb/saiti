import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Logo = process.env.PUBLIC_URL + '/pics/Logo.png';

const navLinks = [
  { label: 'მთავარი', to: '/' },
  { label: 'პროექტები', to: '/projects' },
  { label: 'საიტის ფასები', to: '/fasebi' },
  { label: 'კონტაქტი', to: '/contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="hdr-outer" role="banner">
      <nav className="hdr-inner" aria-label="მთავარი ნავიგაცია">

        <Link to="/" className="hdr-logo-wrap" aria-label="Apollo Creations - მთავარ გვერდზე გადასვლა">
          <img
            src={Logo}
            alt="Apollo Creations ლოგო"
            className="hdr-logo"
            width="72"
            height="72"
            loading="eager"
          />
        </Link>

        <ul className="hdr-nav" role="list">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              {link.to
                ? <Link to={link.to} className="hdr-nav-link">{link.label}</Link>
                : <a href={link.href} className="hdr-nav-link">{link.label}</a>
              }
              {i < navLinks.length - 1 && <span className="hdr-nav-divider" aria-hidden="true" />}
            </li>
          ))}
        </ul>

        <a href="tel:+995574065469" className="hdr-cta" aria-label="დაგვიკავშირდი - +995 574 06 54 69">
          დაგვიკავშირდი
        </a>

        <button
          className="hdr-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'მენიუს დახურვა' : 'მენიუს გახსნა'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`hdr-ham-line ${menuOpen ? 'open' : ''}`} aria-hidden="true" />
          <span className={`hdr-ham-line ${menuOpen ? 'open' : ''}`} aria-hidden="true" />
          <span className={`hdr-ham-line ${menuOpen ? 'open' : ''}`} aria-hidden="true" />
        </button>

      </nav>

      <div
        id="mobile-menu"
        className={`hdr-mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="hdr-drawer-close"
          onClick={() => setMenuOpen(false)}
          aria-label="მენიუს დახურვა"
        >
          ✕
        </button>

        {navLinks.map(link => (
          link.to
            ? <Link key={link.label} to={link.to} className="hdr-mobile-link" onClick={() => setMenuOpen(false)}>{link.label}</Link>
            : <a key={link.label} href={link.href} className="hdr-mobile-link" onClick={() => setMenuOpen(false)}>{link.label}</a>
        ))}

        <a
          href="tel:+995574065469"
          className="hdr-mobile-cta"
          onClick={() => setMenuOpen(false)}
          aria-label="დაგვიკავშირდი - +995 574 06 54 69"
        >
          დაგვიკავშირდი
        </a>
      </div>
    </header>
  )
}

export default Header
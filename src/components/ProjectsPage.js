import React, { useRef, useEffect, useState } from 'react'
import '../styles/ProjectsPage.css'
import Cta from './Cta'

const blur = process.env.PUBLIC_URL + '/pics/blur.png'
const project1 = process.env.PUBLIC_URL + '/p1.png'
const project2 = process.env.PUBLIC_URL + '/p2.png'
const project3 = process.env.PUBLIC_URL + '/p3.png'
const project4 = process.env.PUBLIC_URL + '/p4.png'

const projects = [
  {
    id: '01',
    name: 'Apollo Creations',
    tag: 'ვებ დიზაინი',
    year: '2024',
    desc: 'კრეატიული სტუდიის სრული ბრენდინგი და ვებ გვერდი - ანიმაციები, 3D ელემენტები, პრემიუმ UX.',
    img: project1,
    href: 'https://apollocreations.net',
    color: '#a855f7',
  },
  {
    id: '02',
    name: 'Rent Car Geo',
    tag: 'მანქანების გაქირავება',
    year: '2024',
    desc: 'მანქანების დაჯავშნის პლატფორმა - ფილტრები, კალენდარი, ადმინ პანელი, მობილური ვერსია.',
    img: project2,
    href: 'https://rentcargeo.com',
    color: '#8C45FF',
  },
  {
    id: '03',
    name: 'Greenhall Capital',
    tag: 'კორპორატიული საიტი',
    year: '2025',
    desc: 'საერთაშორისო საინვესტიციო კომპანიის კორპორატიული პრეზენტაცია - მინიმალიზმი, ნდობა, სიზუსტე.',
    img: project3,
    href: 'https://greenhallcapital.com',
    color: '#c084fc',
  },
  {
    id: '04',
    name: 'Utopia VIP Travel',
    tag: 'ტურისტული სააგენტო',
    year: '2025',
    desc: 'VIP ტუროპერატორის ვიზუალური სამყარო - luxury feel, ტურების პაკეტები, ინტეგრირებული ჯავშნები.',
    img: project4,
    href: 'https://utopiaviptravel.com',
    color: '#7c3aed',
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function ProjectRow({ project, index }) {
  const [ref, visible] = useInView(0.1)
  const [hovered, setHovered] = useState(false)
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`pp-row ${visible ? 'pp-row--visible' : ''} ${hovered ? 'pp-row--hovered' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s`, '--accent': project.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="pp-ghost-num">{project.id}</span>

      <div className={`pp-row-inner ${isEven ? '' : 'pp-row-inner--rev'}`}>

        <div className="pp-text">
          <div className="pp-meta-row">
            <span className="pp-num">{project.id}</span>
            <span className="pp-divider-dot" />
            <span className="pp-tag">{project.tag}</span>
            <span className="pp-year">{project.year}</span>
          </div>
          <h2 className="pp-name">{project.name}</h2>
          <p className="pp-desc">{project.desc}</p>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pp-link"
          >
            <span>საიტის ნახვა</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="pp-img-wrap"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="pp-img-inner">
            <img src={project.img} alt={project.name} className="pp-img" />
            <div className="pp-img-overlay" />
          </div>
          <div className="pp-img-glow" />
        </a>

      </div>

      <div className="pp-row-line" />
    </div>
  )
}

function MarqueeStrip() {
  const items = ['ვებ დიზაინი', 'SEO', 'UI/UX', 'React', 'E-Commerce', 'Branding', 'Motion']
  const repeated = [...items, ...items, ...items]
  return (
    <div className="pp-marquee">
      <div className="pp-marquee-track">
        {repeated.map((t, i) => (
          <span key={i} className="pp-marquee-item">
            {t} <span className="pp-marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pp-page">

      {/* blur orbs — Fasebi სტილი */}
      <img src={blur} alt="" className="pp-blur-tl" aria-hidden="true" />
      <img src={blur} alt="" className="pp-blur-br" aria-hidden="true" />

      {/* ── HERO — Fasebi სტილი ── */}
      <section className="pp-hero">
        <p className="pp-eyebrow">ჩვენი პროექტები</p>
        <h1 className="pp-hero-title">
          ნამუშევრები
          <br />
          <span className="pp-hero-gradient">პორტფოლიო</span>
        </h1>
        <p className="pp-hero-desc">
          პრემიუმ ხარისხის ვებ გვერდების დამზადება. ვქმნით სწრაფ, თანამედროვე და
          SEO-ოპტიმიზებულ საიტებს — ყველა პროექტი ინდივიდუალური მიდგომით.
        </p>
        <div className="pp-hero-tags">
          <span className="pp-tag">ვებ დიზაინი</span>
          <span className="pp-tag">UI / UX</span>
          <span className="pp-tag">React Development</span>
          <span className="pp-tag">SEO ოპტიმიზაცია</span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeStrip />

      {/* ── PROJECTS ── */}
      <section className="pp-projects">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </section>

      {/* ── STATS ── */}
      <section className="pp-stats">
        {[
          { num: '20+', label: 'დასრულებული პროექტი' },
          { num: '100%', label: 'კლიენტის კმაყოფილება' },
          { num: '5+', label: 'წელი გამოცდილება' },
          { num: '24/7', label: 'მხარდაჭერა' },
        ].map((s, i) => (
          <div key={i} className="pp-stat">
            <span className="pp-stat-num">{s.num}</span>
            <span className="pp-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <Cta />

    </div>
  )
}

export default ProjectsPage
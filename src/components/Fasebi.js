import React, { useEffect, useRef } from 'react'
import '../styles/Fasebi.css'

import Faq from '../components/Faq'

const blur = process.env.PUBLIC_URL + '/pics/blur.png'

const plans = [
  {
    id: '01',
    name: 'მარტივი გვერდი',
    price: '500',
    description: 'ერთგვერდიანი საიტი მარტივი დიზაინით, იდეალური სწრაფი პრეზენტაციისთვის.',
    popular: false,
  },
  {
    id: '02',
    name: 'საინფორმაციო საიტი',
    price: '900',
    description: 'მრავალგვერდიანი საინფორმაციო საიტი ადმინ პანელით და კონტენტის მართვით.',
    popular: false,
  },
  {
    id: '03',
    name: 'ონლაინ მაღაზია',
    price: '2400',
    description: 'სრული ონლაინ შოფი გადახდის ინტეგრაციით, პროდუქტების მართვითა და ადმინ პანელით.',
    popular: true,
  },
  {
    id: '04',
    name: 'კორპორატიული',
    price: '1500',
    description: 'ინდივიდუალური გადაწყვეტილება თქვენი ბიზნესის სპეციფიკური მოთხოვნებისთვის.',
    popular: false,
  },
]

function PricingCard({ plan, index }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('fsb-card--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fsb-card ${plan.popular ? 'fsb-card--popular' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {plan.popular && <div className="fsb-card-badge">პოპულარული</div>}
      <div className="fsb-card-shine" />
      <div className="fsb-card-top">
        <span className="fsb-card-index">{plan.id}</span>
        <h3 className="fsb-card-name">{plan.name}</h3>
        <p className="fsb-card-desc">{plan.description}</p>
      </div>
      <div className="fsb-card-bottom">
        <div className="fsb-card-price">
          <span className="fsb-card-from">დან</span>
          <span className="fsb-card-amount">{plan.price}</span>
          <span className="fsb-card-currency">₾</span>
        </div>
        <a
          href={`https://wa.me/995574065469?text=${encodeURIComponent('გამარჯობა! მინდა შევუკვეთო: ' + plan.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fsb-card-cta"
        >
          დაწყება
        </a>
      </div>
    </div>
  )
}

function Fasebi() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="fsb-page">
      <img src={blur} alt="" className="fsb-blur-tl" aria-hidden="true" />
      <img src={blur} alt="" className="fsb-blur-br" aria-hidden="true" />

      {/* HERO */}
      <section className="fsb-hero">
        <p className="fsb-eyebrow">საიტის აწყობა</p>
        <h1 className="fsb-hero-title">
          საიტის
          <br />
          <span className="fsb-hero-gradient">დამზადება</span>
        </h1>
        <p className="fsb-hero-desc">
          პრემიუმ ხარისხის ვებ გვერდების დამზადება. ვქმნით სწრაფ, თანამედროვე და
          SEO-ოპტიმიზებულ საიტებს მცირე და საშუალო ბიზნესებისთვის.
        </p>
        <div className="fsb-hero-tags">
          <span className="fsb-tag">საიტის დამზადება</span>
          <span className="fsb-tag">ვებ გვერდის დამზადება</span>
          <span className="fsb-tag">საიტების აწყობა</span>
        </div>
      </section>

      {/* PRICING */}
      <section className="fsb-section">
        <div className="fsb-section-header">
          <span className="fsb-section-line fsb-section-line--left" />
          <h2 className="fsb-section-title">რა ჯდება საიტის აწყობა?</h2>
          <span className="fsb-section-line fsb-section-line--right" />
        </div>
        <p className="fsb-section-lead">
          საიტის აწყობის ფასი დამოკიდებულია პროექტის სირთულეზე, გვერდების რაოდენობაზე
          და საჭირო ფუნქციონალზე. ჩვენ გთავაზობთ 4 სტანდარტულ პაკეტს:
        </p>
        <div className="fsb-grid">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </section>

      <Faq/>

      {/* CTA */}
      <section className="fsb-cta-strip">
        <div className="fsb-cta-glow" />
        <p className="fsb-cta-label">მზად ხარ დასაწყებად?</p>
        <h2 className="fsb-cta-title">კონსულტაცია უფასოა</h2>
        <a
          href="https://wa.me/995574065469"
          target="_blank"
          rel="noopener noreferrer"
          className="fsb-cta-btn"
        >
          WhatsApp-ზე მოგვწერე
        </a>
      </section>
    </div>
  )
}

export default Fasebi
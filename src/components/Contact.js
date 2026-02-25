import React, { useEffect, useRef } from 'react'
import '../styles/Contact.css'

const blur = process.env.PUBLIC_URL + '/pics/blur.png'

const contacts = [
  {
    id: '01',
    category: 'სწრაფი კავშირი',
    items: [
      {
        label: 'WhatsApp',
        value: '+995 574 06 54 69',
        sub: 'მოგვწერე',
        href: 'https://wa.me/995574065469',
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.83L.057 23.5l5.806-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.667-.524-5.178-1.433l-.371-.22-3.844.952.982-3.738-.242-.385A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        ),
      },
      {
        label: 'ტელეფონი',
        value: '+995 574 06 54 69',
        sub: 'დარეკე პირდაპირ',
        href: 'tel:+995574065469',
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        ),
      },
      {
        label: 'მეილი',
        value: 'business@apollocreations.net',
        sub: 'კორპორატიული მეილი',
        href: 'mailto:business@apollocreations.net',
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        ),
      },
    ]
  },
  {
    id: '02',
    category: 'სოც ქსელები',
    items: [
      {
        label: 'Instagram',
        value: '@apollocreations_net',
        sub: 'გამოგვყევი',
        href: 'https://www.instagram.com/apollocreations_net',
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        ),
      },
      {
        label: 'TikTok',
        value: '@apollocreations.net',
        sub: 'ჩვენი ვიდეოები',
        href: 'https://www.tiktok.com/@apollocreations.net',
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.19 8.19 0 004.79 1.52V7.01a4.85 4.85 0 01-1.02-.32z"/>
          </svg>
        ),
      },
      {
        label: 'Facebook',
        value: 'Apollo Creations',
        sub: 'დაგვილაიქე',
        href: 'https://www.facebook.com/profile.php?id=61579611981687',
        icon: (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        ),
      },
    ]
  },
]

function ContactCard({ item, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => el.classList.add('cnt-card--visible'), index * 80)
  }, [index])

  return (
    <a
      ref={ref}
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="cnt-card"
    >
      <div className="cnt-card-shine" />
      <div className="cnt-card-glow" />
      <div className="cnt-card-icon">{item.icon}</div>
      <div className="cnt-card-text">
        <span className="cnt-card-label">{item.label}</span>
        <span className="cnt-card-value">{item.value}</span>
        <span className="cnt-card-sub">{item.sub}</span>
      </div>
      <div className="cnt-card-arrow">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  )
}

function Contact() {
  return (
    <div className="cnt-page">
      <img src={blur} alt="" className="cnt-blur-tl" aria-hidden="true" />
      <img src={blur} alt="" className="cnt-blur-br" aria-hidden="true" />

      {/* Left — hero text */}
      <div className="cnt-left">
        <p className="cnt-eyebrow">კონტაქტი</p>
        <h1 className="cnt-title">
          გავისაუბროთ<br />
          <span className="cnt-title-gradient">თქვენს პროექტზე</span>
        </h1>
        <p className="cnt-desc">
          გამოგვიგზავნე შეტყობინება ნებისმიერ პლატფორმაზე.
          ჩვენი გუნდი ძალიან მალე გიპასუხებთ და ერთად შევქმნით თქვენს ციფრულ სივრცეს.
        </p>
        <div className="cnt-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>თბილისი, საქართველო</span>
        </div>
      </div>

      {/* Right — contact groups */}
      <div className="cnt-right">
        {contacts.map((group) => (
          <div key={group.id} className="cnt-group">
            <p className="cnt-group-label">
              <span className="cnt-group-num">{group.id}</span>
              {group.category}
            </p>
            <div className="cnt-group-cards">
              {group.items.map((item, i) => (
                <ContactCard key={item.label} item={item} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Contact
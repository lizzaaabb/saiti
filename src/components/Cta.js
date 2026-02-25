import React from 'react'
import '../styles/Cta.css'

const blur = process.env.PUBLIC_URL + '/pics/blur.png'

function Cta() {
  return (
    <div className="cta-section" id="contact">

      {/* TOP */}
      <div className="cta-top">
        <img src={blur} alt="" className="cta-top-blur" aria-hidden="true" />
        <p className="cta-eyebrow">დაგვიკავშირდი</p>
        <h2 className="cta-heading">
          მზად ხარ ავაწყოთ<br />
          <span className="cta-heading-gradient">შენი ვებ გვერდი?</span>
        </h2>
        <p className="cta-sub">
          გამოგვიგზავნე შეტყობინება — გიპასუხებთ ნებისმიერ დროს და ერთად შევქმნით შენს ციფრულ სივრცეს.
        </p>
        <div className="cta-btns">
          <a href="https://wa.me/995574065469" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.83L.057 23.5l5.806-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.667-.524-5.178-1.433l-.371-.22-3.844.952.982-3.738-.242-.385A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp — მოგვწერე
          </a>
          <a href="tel:+995574065469" className="cta-btn cta-btn--secondary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            დარეკე პირდაპირ
          </a>
        </div>
      </div>

    </div>
  )
}

export default Cta
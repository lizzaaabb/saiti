import React from 'react'
import '../styles/Brands.css'

const brands = [
  { name: 'YOUR HOOD' },
  { name: 'GREENHALL CAPITAL' },
  { name: 'DAVSON' },
  { name: 'MEDIKIDS' },
  { name: 'ART GALLERY VAKE' },
  { name: 'UTOPIA VIP TRAVEL' },
  { name: 'PADEL ROCHA' },
]

function Brands() {
  return (
    <div className='brands-container'>
      <p className="brands-label">ჩვენ გვენდობიან</p>
      <div className="brands-track-wrapper">
        <div className="brands-track">
          {[...brands, ...brands].map((brand, i) => (
            <div className="brand-box" key={i}>
              <span className='brand-name'>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands
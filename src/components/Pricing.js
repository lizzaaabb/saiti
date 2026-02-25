import React from 'react'
import '../styles/Pricing.css'

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

function Pricing() {
  return (
    <div className="pricing-container" id="pricing">

      <h2 className="pricing-heading">
        <span className="pricing-heading-line pricing-heading-line--left" />
        საიტის აწყობის ფასები
        <span className="pricing-heading-line pricing-heading-line--right" />
      </h2>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}
          >
            {plan.popular && (
              <div className="pricing-badge">პოპულარული</div>
            )}

            <div className="pricing-glass-border" />

            <div className="pricing-top">
              <span className="pricing-index">{plan.id}</span>
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-desc">{plan.description}</p>
            </div>

            <div className="pricing-bottom">
              <div className="pricing-price">
                {plan.price
                  ? <><span className="pricing-from">დან</span><span className="pricing-amount">{plan.price}</span><span className="pricing-currency">₾</span></>
                  : <span className="pricing-custom">შეთანხმებით</span>
                }
              </div>
              <a href={`https://wa.me/995574065469?text=${encodeURIComponent('გამარჯობა! მინდა შევუკვეთო: ' + plan.name + ' (' + plan.price + '₾ დან)')}`} target="_blank" rel="noopener noreferrer" className="pricing-cta">დაიწყეთ</a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Pricing
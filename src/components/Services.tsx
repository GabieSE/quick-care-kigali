import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { X, Check } from 'lucide-react'

const bookingChannels = [
  { label: 'WhatsApp', emoji: '💬', color: '#25D366', href: (title: string) => `https://wa.me/250795628517?text=${encodeURIComponent(`Hi Quick Care Kigali! I'd like to book: ${title}. Please let me know your availability.`)}` },
  { label: 'Call', emoji: '📞', color: '#0D3F6B', href: (_title: string) => 'tel:+250795628517' },
  { label: 'Instagram', emoji: '📸', color: '#E1306C', href: (_title: string) => 'https://instagram.com/quickcarekigali' },
  { label: 'Email', emoji: '📧', color: '#F97316', href: (title: string) => `mailto:info@quickcarekigali.com?subject=Booking: ${title}` },
]

type ServiceSection = { heading: string; items: string[] }

type ServiceData = {
  id: string
  emoji: string
  image: string
  accentColor: string
  bgColor: string
  isEmergency?: boolean
  title: string
  tagline: string
  description: string
  sections: ServiceSection[]
  pricing: { label: string; price: string }[]
}

const servicesData: ServiceData[] = [
  {
    id: 'cleaning',
    emoji: '🧹',
    image: '/team/cleaning.jpg',
    accentColor: '#0D3F6B',
    bgColor: '#EEF6FF',
    title: 'Home Cleaning',
    tagline: 'Keep your home fresh and spotless every day',
    description: 'Home cleaning is the work of cleaning and organizing a house so it stays healthy.',
    sections: [
      {
        heading: '🛏️ Cleaning Rooms',
        items: ['Sweeping and mopping the floor', 'Dusting tables, chairs and shelves', 'Organizing items in the room'],
      },
      {
        heading: '🍳 Kitchen Cleaning',
        items: ['Washing dishes and utensils', 'Cleaning the stove and kitchen surfaces', 'Taking out garbage', 'Wiping cabinets and tables'],
      },
      {
        heading: '🚿 Bathroom Cleaning',
        items: ['Cleaning the toilet', 'Washing the sink and shower', 'Mopping the bathroom floor', 'Replacing towels and soap'],
      },
      {
        heading: '👕 Laundry',
        items: ['Washing clothes', 'Drying and folding them', 'Ironing clothes'],
      },
      {
        heading: '🏠 General House Care',
        items: ['Emptying trash bins', 'Cleaning windows', 'Arranging furniture and items'],
      },
    ],
    pricing: [
      { label: '1–2 Bedrooms', price: '40,000 RWF / visit' },
      { label: '3 Bedrooms', price: '60,000 RWF (~3 hours)' },
      { label: '4–5 Bedrooms', price: '100,000 RWF' },
      { label: 'Full Deep Cleaning', price: '150,000 RWF or more' },
    ],
  },
  {
    id: 'cooking',
    emoji: '👨‍🍳',
    image: '/team/cooking.jpg',
    accentColor: '#F97316',
    bgColor: '#FFF7ED',
    title: 'Cooking Assistance',
    tagline: 'Enjoy homemade meals prepared by trusted cooks',
    description: 'Cooking assistance is a service where someone helps you make meals in your home.',
    sections: [
      { heading: '🥗 Meal Preparation', items: ['Washing, cutting, and preparing ingredients'] },
      { heading: '🍽️ Cooking Meals', items: ['Helping cook breakfast, lunch, or dinner'] },
      { heading: '📋 Planning Meals', items: ['Deciding what food to cook during the week'] },
      { heading: '🛒 Grocery Shopping', items: ['Helping buy the ingredients needed for cooking'] },
      { heading: '🧼 Kitchen Cleaning', items: ['Cleaning dishes and the kitchen after cooking'] },
      { heading: '👩‍🏫 Teaching Cooking Skills', items: ['Showing you how to cook different recipes'] },
    ],
    pricing: [
      { label: 'Daily Help', price: '30,000 RWF / day' },
      { label: 'Monthly (Full-Time)', price: '80,000 RWF / month' },
      { label: 'Part-Time Cooking Help', price: '5,000 RWF' },
    ],
  },
  {
    id: 'shopping',
    emoji: '🛒',
    image: '/team/shopping.jpg',
    accentColor: '#4CAF50',
    bgColor: '#F0FFF4',
    title: 'Shopping Help',
    tagline: 'Let our helpers do your grocery or market shopping',
    description: "Shopping help is a service where someone helps a person or family buy the things they need, especially groceries, household items, or personal goods.",
    sections: [
      {
        heading: '✅ What\'s Included',
        items: [
          'Buying items for you (food, cleaning supplies, clothes)',
          'Going to the market or supermarket on your behalf',
          'Choosing good quality products',
          'Comparing prices to save money',
          'Delivering the items to your home',
          'Helping you make a shopping list',
        ],
      },
      {
        heading: '👥 Who Needs Shopping Help?',
        items: [
          'Busy families',
          'Elderly people',
          'People who are sick or unable to go out',
          'Workers with little time',
          'Visitors or foreigners who don\'t know local markets',
        ],
      },
    ],
    pricing: [
      { label: 'Simple Shopping (Nearby)', price: '5,000 RWF' },
      { label: 'Market or Supermarket', price: '10,000 RWF' },
      { label: 'Half Day', price: '30,000 RWF' },
      { label: 'Full Day', price: '60,000 RWF' },
      { label: 'Monthly (Full-Time)', price: '300,000 RWF' },
    ],
  },
  {
    id: 'babycare',
    emoji: '👶',
    image: '/team/babycare.jpg',
    accentColor: '#EC4899',
    bgColor: '#FDF2F8',
    title: 'Baby Care',
    tagline: 'Professional and caring support for your little ones',
    description: 'Baby care includes everything a caregiver (parent or helper) does to keep the baby comfortable and safe.',
    sections: [
      { heading: '🍼 Feeding', items: ['Giving breast milk or formula milk', 'Feeding the baby at the right times'] },
      { heading: '🛁 Hygiene', items: ['Bathing the baby', 'Changing diapers', 'Keeping the baby clean'] },
      { heading: '😴 Sleep', items: ['Making sure the baby sleeps enough', 'Creating a safe and comfortable sleeping place'] },
      { heading: '🏥 Health Care', items: ['Taking the baby for check-ups', 'Vaccinations', 'Watching for signs of illness'] },
      { heading: '🛡️ Comfort & Safety', items: ['Holding and soothing the baby when crying', 'Keeping the baby safe from danger'] },
      { heading: '🎓 Development', items: ['Talking, singing, and playing with the baby', 'Helping the baby learn and grow'] },
    ],
    pricing: [
      { label: 'Baby Sitter', price: '30,000 RWF' },
      { label: 'Full-Time Nanny', price: '350,000 RWF / month' },
    ],
  },
]

export default function Services() {
  const { t } = useLang()
  const [selected, setSelected] = useState<number | null>(null)
  const [booked, setBooked] = useState(false)

  const s = selected !== null ? servicesData[selected] : null

  const openModal = (i: number) => { setSelected(i); setBooked(false) }
  const closeModal = () => { setSelected(null); setBooked(false) }

  return (
    <section id="services" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(16px, 4vw, 28px)', background: '#FAFAFA' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', color: '#4CAF50', marginBottom: 14 }}>
            {t.services.tag}
          </p>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(34px,4vw,58px)', letterSpacing: '-0.04em', color: '#0D3F6B', marginBottom: 10 }}>
            {t.services.title}
          </h2>
          {/* Emergency Support temporarily - plain text matching Lovable */}
          <p style={{ fontFamily: 'Instrument Sans', fontSize: 16, color: '#6B7280', marginBottom: 16 }}>
            Emergency Support temporarily
          </p>
          <p style={{ fontFamily: 'Instrument Sans', color: '#9CA3AF', fontSize: 18, maxWidth: 500, margin: '0 auto' }}>
            {t.services.sub}
          </p>
        </div>

        {/* Cards grid */}
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
          {servicesData.map((sv, i) => (
            <div key={sv.id} className="reveal" onClick={() => openModal(i)}
              style={{
                background: '#fff', borderRadius: 28, overflow: 'hidden', cursor: 'pointer',
                boxShadow: sv.isEmergency ? '0 2px 16px rgba(239,68,68,0.12)' : '0 2px 16px rgba(13,63,107,0.06)',
                border: sv.isEmergency ? '1.5px solid rgba(239,68,68,0.25)' : '1px solid rgba(13,63,107,0.06)',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: `${(i % 2) * 0.08}s`,
                gridColumn: servicesData.length % 2 !== 0 && i === servicesData.length - 1 ? 'span 2' : undefined,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = sv.isEmergency ? '0 32px 72px rgba(239,68,68,0.15)' : '0 32px 72px rgba(13,63,107,0.13)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = sv.isEmergency ? '0 2px 16px rgba(239,68,68,0.12)' : '0 2px 16px rgba(13,63,107,0.06)' }}>

              {/* Card image */}
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <img src={sv.image} alt={sv.title}
                  style={{
                    width: '100%', height: '100%', display: 'block', transition: 'transform 0.6s ease',
                    objectFit: 'cover',
                    objectPosition: sv.id === 'shopping' ? 'center 30%' : 'center 20%',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', top: 18, left: 18, width: 50, height: 50, borderRadius: 18, background: sv.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
                  {sv.emoji}
                </div>
                <div style={{ position: 'absolute', bottom: 16, right: 16, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', borderRadius: 999, padding: '5px 14px', fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 12, color: sv.accentColor }}>
                  {sv.pricing[0].price}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '26px 28px 28px' }}>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 22, color: '#0D3F6B', letterSpacing: '-0.03em', marginBottom: 8 }}>{sv.title}</h3>
                <p style={{ fontFamily: 'Instrument Sans', color: '#9CA3AF', fontSize: 14, lineHeight: 1.7, marginBottom: 22 }}>{sv.tagline}</p>
                <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                  <a href={`https://wa.me/250795628517?text=${encodeURIComponent(`Hi! I'd like to book: ${sv.title}`)}`}
                    target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                    style={{ flex: 1, background: '#25D366', color: '#fff', padding: '12px 8px', borderRadius: 999, fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 13, textAlign: 'center', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                    💬 WhatsApp
                  </a>
                  <a href="tel:+250795628517" onClick={e => e.stopPropagation()}
                    style={{ flex: 1, background: '#0D3F6B', color: '#fff', padding: '12px 8px', borderRadius: 999, fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 13, textAlign: 'center', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                    📞 Call Now
                  </a>
                </div>
                <p style={{ fontFamily: 'Instrument Sans', fontSize: 12, color: sv.accentColor, fontWeight: 600, textAlign: 'center' }}>
                  Tap for full details & pricing →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== DETAIL MODAL ===== */}
      {s !== null && selected !== null && (
        <div onClick={closeModal} style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(7,31,53,0.82)', backdropFilter: 'blur(14px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#fff', borderRadius: 28, maxWidth: 520, width: '100%',
            boxShadow: '0 48px 120px rgba(0,0,0,0.45)',
            maxHeight: '92vh', overflowY: 'auto',
            display: 'flex', flexDirection: 'column',
          }}>

            {/* Modal image */}
            <div style={{ position: 'relative', height: 200, overflow: 'hidden', borderRadius: '28px 28px 0 0', flexShrink: 0 }}>
              <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.id === 'shopping' ? 'center 30%' : 'center 20%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 50%)' }} />
              <button onClick={closeModal} style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', border: 'none', borderRadius: 999, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                <X size={18} />
              </button>
              <div style={{ position: 'absolute', bottom: 18, left: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 26 }}>{s.emoji}</span>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 22, color: '#fff', letterSpacing: '-0.03em' }}>{s.title}</h3>
                </div>
              </div>
            </div>

            <div style={{ padding: '24px 24px 28px' }}>

              {/* Description */}
              <p style={{ fontFamily: 'Instrument Sans', color: '#6B7280', fontSize: 14, lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic' }}>
                {s.description}
              </p>

              {/* Sections with checklist items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 24 }}>
                {s.sections.map((section, si) => (
                  <div key={si}>
                    <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 14, color: '#0D3F6B', letterSpacing: '-0.01em', marginBottom: 10 }}>
                      {section.heading}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {section.items.map((item, ii) => (
                        <div key={ii} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <div style={{ width: 20, height: 20, borderRadius: 999, background: '#F0FFF4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                            <Check size={11} style={{ color: '#4CAF50' }} />
                          </div>
                          <span style={{ fontFamily: 'Instrument Sans', fontSize: 13, color: '#4B5563', lineHeight: 1.6 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div style={{ background: '#F8FAFB', borderRadius: 18, padding: '18px 20px', marginBottom: 22 }}>
                <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 15, color: '#0D3F6B', letterSpacing: '-0.02em', marginBottom: 14 }}>
                  💰 Service Price
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.pricing.map((p, pi) => (
                    <div key={pi} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                      <span style={{ fontFamily: 'Instrument Sans', fontSize: 13, color: '#6B7280' }}>{p.label}</span>
                      <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 14, color: s.accentColor, whiteSpace: 'nowrap' }}>{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(13,63,107,0.07)', marginBottom: 20 }} />

              {/* How to book */}
              <div style={{ background: booked ? '#F0FFF4' : 'linear-gradient(135deg, #071F35, #0D3F6B)', borderRadius: 20, padding: '20px', marginBottom: 4, transition: 'all 0.4s ease' }}>
                {!booked ? (
                  <>
                    <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                      📋 How to Book
                    </p>
                    <p style={{ fontFamily: 'Instrument Sans', fontSize: 12, color: 'rgba(255,255,255,0.65)', marginBottom: 16, lineHeight: 1.6 }}>
                      1. Choose a channel below → 2. Tell us the service + date → 3. We confirm & send a helper 🎉
                    </p>
                    <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      {bookingChannels.map((ch, i) => (
                        <a key={i} href={ch.href(s.title)}
                          target={ch.label !== 'Call' ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          onClick={() => setTimeout(() => setBooked(true), 300)}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: ch.color, color: '#fff', padding: '13px', borderRadius: 999, fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 14, textDecoration: 'none', letterSpacing: '-0.01em', boxShadow: `0 4px 16px ${ch.color}55`, transition: 'all 0.25s' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                          <span style={{ fontSize: 16 }}>{ch.emoji}</span> {ch.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '8px 0' }}>
                    <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
                    <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 17, color: '#0D3F6B', letterSpacing: '-0.02em', marginBottom: 4 }}>Booking Started!</p>
                    <p style={{ fontFamily: 'Instrument Sans', fontSize: 13, color: '#6B7280' }}>We'll confirm your booking shortly. Thank you!</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}

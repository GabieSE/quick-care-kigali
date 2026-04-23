import { Star } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

const colors = [
  { color: '#0D3F6B', bg: '#EEF6FF', initials: 'AK' },
  { color: '#4CAF50', bg: '#F0FFF4', initials: 'JP' },
  { color: '#F97316', bg: '#FFF7ED', initials: 'ST' },
]

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section id="testimonials" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(16px, 4vw, 28px)', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', color: '#4CAF50', marginBottom: 12 }}>{t.testimonials.tag}</p>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(34px,4vw,58px)', letterSpacing: '-0.04em', color: '#0D3F6B', marginBottom: 16 }}>{t.testimonials.title}</h2>
          <p style={{ fontFamily: 'Instrument Sans', color: '#9CA3AF', fontSize: 17, maxWidth: 420, margin: '0 auto' }}>{t.testimonials.sub}</p>
        </div>
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {(t.testimonials.list as Array<{name:string,location:string,quote:string}>).map((item, i) => (
            <div key={i} className="reveal" style={{ background: '#FAFAFA', borderRadius: 24, padding: '36px 32px', border: '1px solid rgba(13,63,107,0.06)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)', transitionDelay: `${i * 0.12}s` }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(13,63,107,0.10)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ position: 'absolute', top: 20, right: 24, fontFamily: 'Plus Jakarta Sans', fontSize: 72, color: 'rgba(13,63,107,0.06)', lineHeight: 1, fontWeight: 900, userSelect: 'none' }}>"</div>
              <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                {[...Array(5)].map((_, j) => <Star key={j} size={16} style={{ color: '#EAB308', fill: '#EAB308' }} />)}
              </div>
              <p style={{ fontFamily: 'Instrument Sans', fontSize: 15, color: '#4B5563', lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic' }}>"{item.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 46, height: 46, borderRadius: 999, background: colors[i].bg, color: colors[i].color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 14, border: `2px solid ${colors[i].color}20` }}>{colors[i].initials}</div>
                <div>
                  <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, color: '#0D3F6B', letterSpacing: '-0.02em' }}>{item.name}</p>
                  <p style={{ fontFamily: 'Instrument Sans', fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

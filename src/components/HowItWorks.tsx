import { useLang } from '../i18n/LangContext'

export default function HowItWorks() {
  const { t } = useLang()
  const h = t.howItWorks

  const steps = [
    { emoji: '📱', title: h.step1Title, desc: h.step1Desc, color: '#0D3F6B', bg: '#EEF6FF', num: '01' },
    { emoji: '🤝', title: h.step2Title, desc: h.step2Desc, color: '#F97316', bg: '#FFF7ED', num: '02' },
    { emoji: '✨', title: h.step3Title, desc: h.step3Desc, color: '#4CAF50', bg: '#F0FFF4', num: '03' },
  ]

  return (
    <section id="how-it-works" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(16px, 4vw, 28px)', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', color: '#4CAF50', marginBottom: 12 }}>{h.tag}</p>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(34px,4vw,58px)', letterSpacing: '-0.04em', color: '#0D3F6B', marginBottom: 16 }}>{h.title}</h2>
          <p style={{ fontFamily: 'Instrument Sans', color: '#9CA3AF', fontSize: 17, maxWidth: 400, margin: '0 auto' }}>{h.sub}</p>
        </div>

        <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, position: 'relative' }}>
          <div className="hidden md:block" style={{ position: 'absolute', top: 56, left: '20%', right: '20%', height: 2, background: 'linear-gradient(90deg, #0D3F6B, #4CAF50)', opacity: 0.2, zIndex: 0 }} />
          {steps.map((step, i) => (
            <div key={i} className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1, transitionDelay: `${i * 0.15}s` }}>
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <div style={{ width: 80, height: 80, borderRadius: 24, background: step.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(13,63,107,0.10)', fontSize: 36, transition: 'transform 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1) rotate(-5deg)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
                  {step.emoji}
                </div>
                <div style={{ position: 'absolute', top: -10, right: -10, background: step.color, color: '#fff', fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 11, width: 28, height: 28, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                  {step.num}
                </div>
              </div>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 20, color: '#0D3F6B', letterSpacing: '-0.02em', marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontFamily: 'Instrument Sans', color: '#9CA3AF', fontSize: 15, lineHeight: 1.75, maxWidth: 260 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal reveal cta-bar"  style={{ marginTop: 72, background: 'linear-gradient(135deg, #071F35, #0D3F6B)', borderRadius: 24, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, boxShadow: '0 24px 64px rgba(13,63,107,0.25)' }}>
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 24, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>{h.ctaTitle}</p>
            <p style={{ fontFamily: 'Instrument Sans', color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>{h.ctaSub}</p>
          </div>
          <a href="https://wa.me/250795628517" target="_blank" rel="noopener noreferrer" style={{ background: '#4CAF50', color: '#fff', padding: '16px 36px', borderRadius: 999, fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 28px rgba(76,175,80,0.4)', transition: 'all 0.25s', whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            {h.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  )
}

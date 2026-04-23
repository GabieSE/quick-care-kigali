import { useLang } from '../i18n/LangContext'

export default function WhyChooseUs() {
  const { t } = useLang()
  const w = t.why

  const features = [
    { emoji: '⚡', title: w.f1Title, desc: w.f1Desc, color: '#F97316', bg: '#FFF7ED' },
    { emoji: '🛡️', title: w.f2Title, desc: w.f2Desc, color: '#0D3F6B', bg: '#EEF6FF' },
    { emoji: '💰', title: w.f3Title, desc: w.f3Desc, color: '#4CAF50', bg: '#F0FFF4' },
    { emoji: '❤️', title: w.f4Title, desc: w.f4Desc, color: '#EC4899', bg: '#FDF2F8' },
    { emoji: '🌍', title: w.f5Title, desc: w.f5Desc, color: '#8B5CF6', bg: '#F5F3FF' },
  ]

  return (
    <section id="why-choose-us" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(16px, 4vw, 28px)', background: '#FAFAFA' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Section label + title centered */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', color: '#4CAF50', marginBottom: 12 }}>{w.tag}</p>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(34px,4vw,58px)', letterSpacing: '-0.04em', color: '#0D3F6B' }}>{w.title}</h2>
        </div>

        {/* Two-column: Image left, features right */}
        <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>

          {/* LEFT — image styled like hero card */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 32, overflow: 'hidden',
              boxShadow: '0 48px 96px rgba(13,63,107,0.22)',
              border: '2px solid rgba(13,63,107,0.08)',
              transform: 'perspective(1200px) rotateY(3deg) rotateX(-1deg)',
              transition: 'transform 0.6s ease',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'perspective(1200px) rotateY(3deg) rotateX(-1deg)')}>
              <img
                src="/team/whychoose.jpg"
                alt="Quick Care Kigali helper"
                style={{ width: '100%', height: 520, objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
              />
              {/* Gradient overlay at bottom like hero */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,63,107,0.55) 0%, transparent 55%)' }} />
              {/* Bottom text on image */}
              <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
                <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 20, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>
                  Caring for you, right where you are
                </p>
                <p style={{ fontFamily: 'Instrument Sans', fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
                  Kigali, Rwanda 🇷🇼
                </p>
              </div>
            </div>

            {/* Floating stat card — bottom left */}
            <div style={{
              position: 'absolute', bottom: -20, left: -20,
              background: '#fff', borderRadius: 20, padding: '14px 18px',
              boxShadow: '0 20px 56px rgba(0,0,0,0.14)',
              display: 'flex', alignItems: 'center', gap: 12,
              animation: 'floatY 6s ease-in-out infinite',
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🏠</div>
              <div>
                <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 20, color: '#0D3F6B', lineHeight: 1, letterSpacing: '-0.03em' }}>500+</p>
                <p style={{ fontFamily: 'Instrument Sans', fontSize: 11, color: '#9CA3AF', marginTop: 2 }}>Families Helped</p>
              </div>
            </div>

            {/* Floating stat card — top right */}
            <div style={{
              position: 'absolute', top: -16, right: -16,
              background: '#fff', borderRadius: 20, padding: '12px 16px',
              boxShadow: '0 20px 56px rgba(0,0,0,0.14)',
              display: 'flex', alignItems: 'center', gap: 10,
              animation: 'floatY 8s ease-in-out infinite 1.5s',
            }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: '#FEF9C3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>⭐</div>
              <div>
                <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 18, color: '#0D3F6B', lineHeight: 1, letterSpacing: '-0.03em' }}>4.9★</p>
                <p style={{ fontFamily: 'Instrument Sans', fontSize: 11, color: '#9CA3AF', marginTop: 2 }}>Client Rating</p>
              </div>
            </div>

            <style>{`@keyframes floatY { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }`}</style>
          </div>

          {/* RIGHT — feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 8 }}>
            <p className="reveal" style={{ fontFamily: 'Instrument Sans', color: '#9CA3AF', fontSize: 16, lineHeight: 1.75, marginBottom: 8 }}>
              {w.sub}
            </p>

            {features.map((f, i) => (
              <div key={i} className="reveal" style={{
                display: 'flex', alignItems: 'flex-start', gap: 16,
                background: '#fff', borderRadius: 20, padding: '18px 20px',
                border: '1px solid rgba(13,63,107,0.07)',
                boxShadow: '0 2px 12px rgba(13,63,107,0.05)',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: `${i * 0.08}s`,
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(13,63,107,0.10)'; e.currentTarget.style.background = '#FAFFF9' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(13,63,107,0.05)'; e.currentTarget.style.background = '#fff' }}>
                <div style={{ width: 46, height: 46, borderRadius: 14, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  {f.emoji}
                </div>
                <div>
                  <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, color: '#0D3F6B', letterSpacing: '-0.02em', marginBottom: 4 }}>{f.title}</p>
                  <p style={{ fontFamily: 'Instrument Sans', fontSize: 13, color: '#9CA3AF', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </div>
            ))}

            {/* Info bar */}
            <div className="reveal cta-bar" style={{
              marginTop: 8,
              background: 'linear-gradient(135deg, #071F35, #0D3F6B)',
              borderRadius: 20, padding: '20px 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14,
            }}>
              <p style={{ fontFamily: 'Instrument Sans', fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                {w.infoBar}
              </p>
              <a href="tel:+250795628517" style={{
                background: '#fff', color: '#0D3F6B', padding: '10px 22px',
                borderRadius: 999, fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
                fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap',
                letterSpacing: '-0.01em', transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                {w.callBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

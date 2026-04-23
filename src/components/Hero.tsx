import { MessageCircle, ArrowRight, Star, Shield, Zap } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

export default function Hero() {
  const { t } = useLang()
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', background: 'linear-gradient(145deg, #071F35 0%, #0D3F6B 55%, #1163a0 100%)', paddingTop: 76, paddingLeft: 'clamp(16px, 4vw, 28px)', paddingRight: 'clamp(16px, 4vw, 28px)' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
      <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 640, height: 640, borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,175,80,0.20) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(32px, 5vw, 60px) 0', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gap: 56, alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, padding: '8px 20px', marginBottom: 32 }}>
              <span style={{ fontSize: 18 }}>🇷🇼</span>
              <span style={{ fontFamily: 'Instrument Sans', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.88)' }}>{t.hero.badge}</span>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50', boxShadow: '0 0 8px #4CAF50' }} />
            </div>

            <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.04em', color: '#fff', marginBottom: 28 }}>
              {t.hero.headline1}<br />
              <span style={{ color: '#4CAF50' }}>{t.hero.headline2}</span><br />
              <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}>{t.hero.headline3}</span>
            </h1>

            <p style={{ fontFamily: 'Instrument Sans', fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', maxWidth: 460, marginBottom: 44 }}>{t.hero.sub}</p>

            <div className="hero-ctas" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
              <a href="https://wa.me/250795628517" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#4CAF50', color: '#fff', padding: '17px 36px', borderRadius: 999, fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em', textDecoration: 'none', boxShadow: '0 8px 36px rgba(76,175,80,0.45)', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}>
                <MessageCircle size={20} /> {t.hero.cta1}
              </a>
              <button onClick={() => go('services')} style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,0.10)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.25)', padding: '17px 32px', borderRadius: 999, fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em', cursor: 'pointer', transition: 'all 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}>
                {t.hero.cta2} <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {[{ icon: Shield, label: t.hero.badge1, color: '#4CAF50' }, { icon: Zap, label: t.hero.badge2, color: '#F97316' }, { icon: Star, label: t.hero.badge3, color: '#EAB308' }].map((b, i) => {
                const Icon = b.icon
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 999, padding: '9px 18px' }}>
                    <Icon size={14} style={{ color: b.color }} />
                    <span style={{ fontFamily: 'Instrument Sans', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.82)' }}>{b.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="hidden lg:block" style={{ position: 'relative' }}>
            <div style={{ borderRadius: 32, overflow: 'hidden', boxShadow: '0 48px 96px rgba(0,0,0,0.45)', border: '2px solid rgba(255,255,255,0.10)', transform: 'perspective(1200px) rotateY(-4deg) rotateX(2deg)', transition: 'transform 0.6s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'perspective(1200px) rotateY(-4deg) rotateX(2deg)')}>
              <img src="/team/about.jpg" alt="Professional home care" style={{ width: '100%', height: 500, objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,31,53,0.45) 0%, transparent 55%)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -20, left: -28, background: '#fff', borderRadius: 22, padding: '16px 22px', boxShadow: '0 24px 64px rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', gap: 14, animation: 'floatY 6s ease-in-out infinite' }}>
              <div style={{ width: 46, height: 46, borderRadius: 14, background: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🏠</div>
              <div>
                <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 22, color: '#0D3F6B', lineHeight: 1, letterSpacing: '-0.03em' }}>500+</p>
                <p style={{ fontFamily: 'Instrument Sans', fontSize: 12, color: '#9CA3AF', marginTop: 3 }}>{t.about.stat1Label}</p>
              </div>
            </div>
            <div style={{ position: 'absolute', top: -16, right: -20, background: '#fff', borderRadius: 22, padding: '14px 20px', boxShadow: '0 24px 64px rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', gap: 12, animation: 'floatY 8s ease-in-out infinite 1.5s' }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: '#FEF9C3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>⭐</div>
              <div>
                <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 20, color: '#0D3F6B', lineHeight: 1, letterSpacing: '-0.03em' }}>4.9 / 5</p>
                <p style={{ fontFamily: 'Instrument Sans', fontSize: 12, color: '#9CA3AF', marginTop: 3 }}>{t.about.stat2Label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0,80 C240,20 480,0 720,20 C960,40 1200,60 1440,20 L1440,80 Z" fill="#FAFAFA" />
        </svg>
      </div>
      <style>{`@keyframes floatY { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }`}</style>
    </section>
  )
}

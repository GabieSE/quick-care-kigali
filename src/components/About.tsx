import { ShieldCheck, Zap, Heart } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(16px, 4vw, 28px)', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 64, alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{ borderRadius: 32, overflow: 'hidden', boxShadow: '0 40px 96px rgba(13,63,107,0.13)' }}>
              <img src="/team/about.jpg" alt="Professional home helper" style={{ width: '100%', height: 480, objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -28, right: -12, background: '#fff', borderRadius: 24, padding: '14px 18px', boxShadow: '0 20px 56px rgba(0,0,0,0.13)', border: '1px solid rgba(13,63,107,0.07)' }}>
              <img src="/logo.png" alt="Quick Care Kigali" style={{ height: 72, width: 'auto' }} />
            </div>
            <div style={{ position: 'absolute', top: 24, left: 24, background: 'rgba(13,63,107,0.90)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: '9px 18px' }}>
              <p style={{ fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 11, color: '#fff', letterSpacing: '0.1em' }}>CARING FOR YOU, RIGHT WHERE YOU ARE</p>
            </div>
          </div>

          <div>
            <p className="reveal" style={{ fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', color: '#4CAF50', marginBottom: 14 }}>{a.tag}</p>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(34px, 4vw, 54px)', letterSpacing: '-0.04em', color: '#0D3F6B', lineHeight: 1.05, marginBottom: 28, whiteSpace: 'pre-line' }}>{a.title}</h2>
            <p className="reveal reveal-delay-2" style={{ fontFamily: 'Instrument Sans', fontSize: 17, color: '#6B7280', lineHeight: 1.8, marginBottom: 14 }}>{a.p1}</p>
            <p className="reveal reveal-delay-2" style={{ fontFamily: 'Instrument Sans', fontSize: 16, color: '#9CA3AF', lineHeight: 1.8, marginBottom: 48 }}>{a.p2}</p>

            <div className="reveal reveal-delay-3 reveal reveal-delay-3 stats-grid"  style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 44 }}>
              {[
                { value: a.stat1, label: a.stat1Label, top: '#F97316' },
                { value: a.stat2, label: a.stat2Label, top: '#EAB308' },
                { value: a.stat3, label: a.stat3Label, top: '#4CAF50' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#FAFAFA', borderRadius: 20, padding: '22px 16px', textAlign: 'center', borderTop: `4px solid ${s.top}` }}>
                  <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 26, color: '#0D3F6B', letterSpacing: '-0.04em' }}>{s.value}</p>
                  <p style={{ fontFamily: 'Instrument Sans', fontSize: 12, color: '#9CA3AF', marginTop: 5 }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: ShieldCheck, emoji: '🛡️', title: a.val1Title, desc: a.val1Desc, color: '#0D3F6B', bg: '#EEF6FF' },
                { icon: Zap, emoji: '⚡', title: a.val2Title, desc: a.val2Desc, color: '#F97316', bg: '#FFF7ED' },
                { icon: Heart, emoji: '❤️', title: a.val3Title, desc: a.val3Desc, color: '#4CAF50', bg: '#F0FFF4' },
              ].map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18, background: '#FAFAFA', borderRadius: 18, padding: '18px 22px', border: '1px solid rgba(13,63,107,0.06)', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(13,63,107,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.background = '#FAFAFA'; e.currentTarget.style.boxShadow = 'none' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{v.emoji}</div>
                  <div>
                    <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, color: '#0D3F6B', letterSpacing: '-0.02em' }}>{v.title}</p>
                    <p style={{ fontFamily: 'Instrument Sans', fontSize: 13, color: '#9CA3AF', marginTop: 2 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

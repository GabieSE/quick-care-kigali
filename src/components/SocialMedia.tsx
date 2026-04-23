import { Users, Camera, MessageCircle, Music } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

export default function SocialMedia() {
  const { t } = useLang()
  const s = t.social

  const socials = [
    { icon: Users, name: 'Facebook', handle: 'Quick Care Kigali', desc: s.descs[0], bg: '#1877F2', link: 'https://facebook.com/quickcarekigali', emoji: '👍' },
    { icon: Camera, name: 'Instagram', handle: '@quickcarekigali', desc: s.descs[1], bg: 'linear-gradient(135deg,#f58529,#dd2a7b,#8134af)', link: 'https://instagram.com/quickcarekigali', emoji: '📸' },
    { icon: MessageCircle, name: 'WhatsApp', handle: '+250 795 628 517', desc: s.descs[2], bg: '#25D366', link: 'https://wa.me/250795628517', emoji: '💬' },
    { icon: Music, name: 'TikTok', handle: '@quickcarekigali', desc: s.descs[3], bg: '#010101', link: 'https://tiktok.com/@quickcarekigali', emoji: '🎵' },
  ]

  return (
    <section id="social" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 28px)', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', color: '#4CAF50', marginBottom: 12 }}>{s.tag}</p>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(34px,4vw,58px)', letterSpacing: '-0.04em', color: '#0D3F6B', marginBottom: 16 }}>{s.title}</h2>
          <p style={{ fontFamily: 'Instrument Sans', color: '#9CA3AF', fontSize: 17, maxWidth: 420, margin: '0 auto' }}>{s.sub}</p>
        </div>
        <div className="social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {socials.map((sv, i) => {
            const Icon = sv.icon
            return (
              <a key={i} href={sv.link} target="_blank" rel="noopener noreferrer" className="reveal"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '36px 24px', borderRadius: 24, textDecoration: 'none', background: '#FAFAFA', border: '1px solid rgba(13,63,107,0.06)', transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)', transitionDelay: `${i * 0.08}s` }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(13,63,107,0.12)'; e.currentTarget.style.background = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = '#FAFAFA' }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: sv.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: '0 8px 24px rgba(0,0,0,0.15)', transition: 'transform 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12) rotate(-5deg)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}>
                  <Icon size={28} color="#fff" />
                </div>
                <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 17, color: '#0D3F6B', letterSpacing: '-0.02em', marginBottom: 4 }}>{sv.name}</p>
                <p style={{ fontFamily: 'Instrument Sans', fontWeight: 600, fontSize: 13, color: '#4CAF50', marginBottom: 8 }}>{sv.handle}</p>
                <p style={{ fontFamily: 'Instrument Sans', fontSize: 13, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 20 }}>{sv.desc}</p>
                <span style={{ background: sv.bg, color: '#fff', padding: '8px 22px', borderRadius: 999, fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 13, letterSpacing: '-0.01em' }}>
                  {sv.emoji} {s.follow}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

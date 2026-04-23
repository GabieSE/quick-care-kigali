import { Users, Camera, MessageCircle, Music, Phone, Mail, MapPin } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const navLinks: [string, string][] = [
    [t.nav.services, 'services'],
    [t.nav.about, 'about'],
    [t.nav.howItWorks, 'how-it-works'],
    [t.nav.testimonials, 'testimonials'],
    [t.nav.faq, 'faq'],
    [t.nav.contact, 'contact'],
  ]

  const socials = [
    { icon: Users, href: 'https://facebook.com/quickcarekigali', bg: '#1877F2' },
    { icon: Camera, href: 'https://instagram.com/quickcarekigali', bg: 'linear-gradient(135deg,#f58529,#dd2a7b,#8134af)' },
    { icon: MessageCircle, href: 'https://wa.me/250795628517', bg: '#25D366' },
    { icon: Music, href: 'https://tiktok.com/@quickcarekigali', bg: '#333' },
  ]

  return (
    <footer style={{ background: '#060F1A', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 28px) 40px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Quick Care Kigali" style={{ height: 72, width: 'auto', marginBottom: 20, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontFamily: 'Instrument Sans', color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.8, marginBottom: 28, maxWidth: 260 }}>{f.tagline}</p>
            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map((s, i) => {
                const Icon = s.icon
                return (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ width: 40, height: 40, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                    <Icon size={18} color="#fff" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>{f.navigate}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(([label, id]) => (
                <button key={id} onClick={() => go(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: 'Instrument Sans', fontSize: 14, color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#4CAF50'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>{f.servicesLabel}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['🧹 Home Cleaning', '👨‍🍳 Cooking Help', '🛒 Shopping', '👶 Baby Care', '🚨 Emergency'].map(s => (
                <span key={s} style={{ fontFamily: 'Instrument Sans', fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>{f.contactLabel}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: MapPin, val: 'Kigali, Rwanda', href: null, color: '#4CAF50' },
                { icon: Phone, val: '+250 795 628 517', href: 'tel:+250795628517', color: '#F97316' },
                { icon: Mail, val: 'info@quickcarekigali.com', href: 'mailto:info@quickcarekigali.com', color: '#4CAF50' },
              ].map((c, i) => {
                const Icon = c.icon
                const inner = (
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Icon size={15} style={{ color: c.color, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Instrument Sans', fontSize: 14, color: 'rgba(255,255,255,0.45)', wordBreak: 'break-all' }}>{c.val}</span>
                  </div>
                )
                return c.href
                  ? <a key={i} href={c.href} style={{ textDecoration: 'none', transition: 'opacity 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}>{inner}</a>
                  : <div key={i}>{inner}</div>
              })}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'Instrument Sans', fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>{f.rights}</p>
          <p style={{ fontFamily: 'Instrument Sans', fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>{f.madeIn}</p>
        </div>
      </div>
    </footer>
  )
}

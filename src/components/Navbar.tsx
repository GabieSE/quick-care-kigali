import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { useLang } from '../i18n/LangContext'
import type { Lang } from '../i18n/translations'

const langOptions: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'rw', label: 'Kinyarwanda', flag: '🇷🇼' },
]

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close lang dropdown on outside click
  useEffect(() => {
    const fn = () => setLangOpen(false)
    if (langOpen) document.addEventListener('click', fn)
    return () => document.removeEventListener('click', fn)
  }, [langOpen])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navLinks = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.howItWorks, id: 'how-it-works' },
    { label: t.nav.testimonials, id: 'testimonials' },
    { label: t.nav.faq, id: 'faq' },
    { label: t.nav.contact, id: 'contact' },
  ]

  const currentLang = langOptions.find(l => l.code === lang)!

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,250,250,0.92)' : 'rgba(250,250,250,0.78)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      borderBottom: scrolled ? '1px solid rgba(13,63,107,0.09)' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 40px rgba(13,63,107,0.08)' : 'none',
      transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <img src="/logo.png" alt="Quick Care Kigali"
              style={{ height: 68, width: 'auto', objectFit: 'contain', transition: 'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex" style={{ gap: 32, alignItems: 'center' }}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Instrument Sans', fontWeight: 500, fontSize: 15,
                color: '#1A1A2E', transition: 'color 0.2s', letterSpacing: '-0.01em',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#4CAF50'}
                onMouseLeave={e => e.currentTarget.style.color = '#1A1A2E'}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop right: lang switcher + CTA */}
          <div className="hidden lg:flex" style={{ gap: 14, alignItems: 'center' }}>
            {/* Phone */}
            <a href="tel:+250795628517" style={{
              display: 'flex', alignItems: 'center', gap: 7,
              fontFamily: 'Instrument Sans', fontWeight: 600, fontSize: 14,
              color: '#0D3F6B', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#4CAF50'}
              onMouseLeave={e => e.currentTarget.style.color = '#0D3F6B'}>
              <Phone size={14} /> +250 795 628 517
            </a>

            {/* Language switcher */}
            <div style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
              <button onClick={() => setLangOpen(!langOpen)} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#F0F4F8', border: '1.5px solid rgba(13,63,107,0.12)',
                borderRadius: 999, padding: '8px 14px', cursor: 'pointer',
                fontFamily: 'Instrument Sans', fontWeight: 600, fontSize: 13,
                color: '#0D3F6B', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#E4EDF6'; e.currentTarget.style.borderColor = 'rgba(13,63,107,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F0F4F8'; e.currentTarget.style.borderColor = 'rgba(13,63,107,0.12)' }}>
                <span style={{ fontSize: 16 }}>{currentLang.flag}</span>
                {currentLang.code.toUpperCase()}
                <ChevronDown size={13} style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.25s' }} />
              </button>

              {langOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                  background: '#fff', borderRadius: 16, padding: '8px',
                  boxShadow: '0 16px 48px rgba(13,63,107,0.15)',
                  border: '1px solid rgba(13,63,107,0.08)',
                  minWidth: 160, zIndex: 200,
                }}>
                  {langOptions.map(opt => (
                    <button key={opt.code} onClick={() => { setLang(opt.code); setLangOpen(false) }} style={{
                      display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                      padding: '10px 14px', background: lang === opt.code ? '#F0FFF4' : 'none',
                      border: 'none', borderRadius: 10, cursor: 'pointer',
                      fontFamily: 'Instrument Sans', fontWeight: lang === opt.code ? 700 : 500,
                      fontSize: 14, color: lang === opt.code ? '#4CAF50' : '#0D3F6B',
                      transition: 'background 0.2s',
                    }}
                      onMouseEnter={e => { if (lang !== opt.code) e.currentTarget.style.background = '#F8FAFB' }}
                      onMouseLeave={e => { if (lang !== opt.code) e.currentTarget.style.background = 'none' }}>
                      <span style={{ fontSize: 18 }}>{opt.flag}</span>
                      {opt.label}
                      {lang === opt.code && <span style={{ marginLeft: 'auto', fontSize: 12 }}>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Now CTA */}
            <a href="https://wa.me/250795628517" target="_blank" rel="noopener noreferrer" style={{
              background: '#0D3F6B', color: '#fff',
              padding: '11px 24px', borderRadius: 999,
              fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 14,
              textDecoration: 'none', letterSpacing: '-0.01em',
              boxShadow: '0 4px 20px rgba(13,63,107,0.3)',
              transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#4CAF50'; e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0D3F6B'; e.currentTarget.style.transform = 'scale(1)' }}>
              {t.nav.bookNow}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden" style={{
            background: 'none', border: 'none', cursor: 'pointer', color: '#0D3F6B', padding: 8, borderRadius: 12,
          }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid rgba(13,63,107,0.08)', padding: '14px 0 20px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                padding: '13px 10px', borderRadius: 14,
                fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: 16, color: '#1A1A2E',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(13,63,107,0.05)'; e.currentTarget.style.color = '#0D3F6B' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#1A1A2E' }}>
                {l.label}
              </button>
            ))}

            {/* Mobile lang switcher */}
            <div style={{ display: 'flex', gap: 8, padding: '12px 4px 4px', flexWrap: 'wrap' }}>
              {langOptions.map(opt => (
                <button key={opt.code} onClick={() => setLang(opt.code)} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '9px 16px', borderRadius: 999, border: 'none', cursor: 'pointer',
                  background: lang === opt.code ? '#0D3F6B' : '#F0F4F8',
                  color: lang === opt.code ? '#fff' : '#0D3F6B',
                  fontFamily: 'Instrument Sans', fontWeight: 600, fontSize: 13,
                  transition: 'all 0.2s',
                }}>
                  <span style={{ fontSize: 16 }}>{opt.flag}</span> {opt.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 8, padding: '0 4px' }}>
              <a href="tel:+250795628517" style={{
                flex: 1, textAlign: 'center', padding: '14px', border: '1.5px solid #0D3F6B',
                borderRadius: 999, color: '#0D3F6B', fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
                fontSize: 14, textDecoration: 'none',
              }}>
                📞 {t.nav.call}
              </a>
              <a href="https://wa.me/250795628517" target="_blank" rel="noopener noreferrer" style={{
                flex: 2, textAlign: 'center', padding: '14px', background: '#4CAF50',
                borderRadius: 999, color: '#fff', fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
                fontSize: 14, textDecoration: 'none',
              }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

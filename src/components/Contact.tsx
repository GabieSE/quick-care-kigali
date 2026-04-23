import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

const services = ['Home Cleaning', 'Cooking Assistance', 'Shopping Help', 'Baby Care', 'Other']

export default function Contact() {
  const { t } = useLang()
  const ct = t.contact
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = () => {
    const msg = `Hi Quick Care Kigali! 👋\n\nMy name is *${form.name}*.\nI need help with: *${form.service}*\n${form.message}\n\nMy phone: ${form.phone}`
    window.open(`https://wa.me/250795628517?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px', borderRadius: 14,
    border: '1.5px solid rgba(13,63,107,0.12)',
    fontFamily: 'Instrument Sans', fontSize: 15, color: '#0D3F6B',
    background: '#fff', outline: 'none', transition: 'border-color 0.2s',
  }

  const infoItems = [
    { icon: MapPin, label: 'Location', value: ct.location, color: '#4CAF50', href: null },
    { icon: Phone, label: 'Phone', value: '+250 795 628 517', color: '#0D3F6B', href: 'tel:+250795628517' },
    { icon: Mail, label: 'Email', value: 'info@quickcarekigali.com', color: '#F97316', href: 'mailto:info@quickcarekigali.com' },
    { icon: Clock, label: 'Hours', value: ct.hours, color: '#8B5CF6', href: null },
  ]

  return (
    <section id="contact" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(16px, 4vw, 28px)', background: '#FAFAFA' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', color: '#4CAF50', marginBottom: 12 }}>{ct.tag}</p>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(34px,4vw,58px)', letterSpacing: '-0.04em', color: '#0D3F6B', marginBottom: 16 }}>{ct.title}</h2>
          <p style={{ fontFamily: 'Instrument Sans', color: '#9CA3AF', fontSize: 17, maxWidth: 420, margin: '0 auto' }}>{ct.sub}</p>
        </div>

        <div className="grid-mobile-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {infoItems.map((item, i) => {
              const Icon = item.icon
              const inner = (
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, background: '#fff', borderRadius: 20, padding: '20px 24px', border: '1px solid rgba(13,63,107,0.07)', boxShadow: '0 4px 16px rgba(13,63,107,0.04)', transition: 'all 0.25s', cursor: item.href ? 'pointer' : 'default' }}
                  onMouseEnter={e => { if (item.href) { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(13,63,107,0.10)' } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(13,63,107,0.04)' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Instrument Sans', fontSize: 12, color: '#9CA3AF', marginBottom: 2 }}>{item.label}</p>
                    <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 15, color: '#0D3F6B', letterSpacing: '-0.02em' }}>{item.value}</p>
                  </div>
                </div>
              )
              return item.href
                ? <a key={i} href={item.href} style={{ textDecoration: 'none' }}>{inner}</a>
                : <div key={i}>{inner}</div>
            })}
            <div style={{ borderRadius: 20, overflow: 'hidden', height: 180, background: 'linear-gradient(135deg, #EEF6FF, #F0FFF4)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(13,63,107,0.07)', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 40 }}>🗺️</span>
              <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, color: '#0D3F6B', fontSize: 15 }}>{ct.location}</p>
              <p style={{ fontFamily: 'Instrument Sans', fontSize: 12, color: '#9CA3AF' }}>{ct.neighborhood}</p>
            </div>
          </div>

          <div className="reveal reveal-delay-2" style={{ background: '#fff', borderRadius: 28, padding: '40px 36px', border: '1px solid rgba(13,63,107,0.07)', boxShadow: '0 16px 48px rgba(13,63,107,0.08)' }}>
            <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 22, color: '#0D3F6B', letterSpacing: '-0.03em', marginBottom: 28 }}>{ct.formTitle}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input name="name" placeholder={ct.name} value={form.name} onChange={handle} style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#4CAF50'} onBlur={e => e.target.style.borderColor = 'rgba(13,63,107,0.12)'} />
              <input name="phone" placeholder={ct.phone} value={form.phone} onChange={handle} style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#4CAF50'} onBlur={e => e.target.style.borderColor = 'rgba(13,63,107,0.12)'} />
              <select name="service" value={form.service} onChange={handle} style={{ ...inputStyle, color: form.service ? '#0D3F6B' : '#9CA3AF' }}
                onFocus={e => e.target.style.borderColor = '#4CAF50'} onBlur={e => e.target.style.borderColor = 'rgba(13,63,107,0.12)'}>
                <option value="">{ct.selectService}</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea name="message" placeholder={ct.message} value={form.message} onChange={handle} rows={4}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderColor = '#4CAF50'} onBlur={e => e.target.style.borderColor = 'rgba(13,63,107,0.12)'} />
              <button onClick={submit} style={{ background: '#0D3F6B', color: '#fff', padding: '16px', borderRadius: 999, border: 'none', cursor: 'pointer', fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, boxShadow: '0 8px 28px rgba(13,63,107,0.3)', transition: 'all 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#4CAF50'; e.currentTarget.style.transform = 'scale(1.02)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0D3F6B'; e.currentTarget.style.transform = 'scale(1)' }}>
                <Send size={18} /> {ct.sendBtn}
              </button>
            </div>
          </div>
        </div>

        <div className="reveal reveal wa-banner"  style={{ marginTop: 64, background: 'linear-gradient(135deg, #1a6b1d, #25D366)', borderRadius: 28, padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, boxShadow: '0 24px 64px rgba(37,211,102,0.25)' }}>
          <div>
            <p style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 28, color: '#fff', letterSpacing: '-0.03em', marginBottom: 8 }}>{ct.bannerTitle}</p>
            <p style={{ fontFamily: 'Instrument Sans', color: 'rgba(255,255,255,0.75)', fontSize: 17 }}>{ct.bannerSub}</p>
          </div>
          <a href="https://wa.me/250795628517" target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#1a6b1d', padding: '18px 40px', borderRadius: 999, fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 17, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 28px rgba(0,0,0,0.15)', transition: 'transform 0.25s', letterSpacing: '-0.02em' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <MessageCircle size={22} /> {ct.bannerBtn}
          </a>
        </div>
      </div>
    </section>
  )
}

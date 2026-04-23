import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

export default function FAQ() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(16px, 4vw, 28px)', background: '#FAFAFA' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontFamily: 'Instrument Sans', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', color: '#4CAF50', marginBottom: 12 }}>{t.faq.tag}</p>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: 'clamp(34px,4vw,58px)', letterSpacing: '-0.04em', color: '#0D3F6B', marginBottom: 16 }}>{t.faq.title}</h2>
          <p style={{ fontFamily: 'Instrument Sans', color: '#9CA3AF', fontSize: 17 }}>{t.faq.sub}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {(t.faq.list as Array<{q:string,a:string}>).map((f, i) => (
            <div key={i} className="reveal" style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(13,63,107,0.08)', boxShadow: open === i ? '0 8px 32px rgba(13,63,107,0.10)' : 'none', transition: 'box-shadow 0.3s' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 28px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: 16, color: '#0D3F6B', letterSpacing: '-0.02em', paddingRight: 16 }}>{f.q}</span>
                <ChevronDown size={20} style={{ color: '#4CAF50', flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }} />
              </button>
              {open === i && (
                <div style={{ padding: '0 28px 24px' }}>
                  <p style={{ fontFamily: 'Instrument Sans', color: '#6B7280', fontSize: 15, lineHeight: 1.8 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

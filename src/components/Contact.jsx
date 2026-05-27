import { info } from '../data/portfolio'

export default function Contact() {
  const contacts = [
    { label: 'Email', value: info.email, href: `mailto:${info.email}` },
    { label: 'Phone', value: info.phone, href: `tel:${info.phone}` },
    { label: 'LinkedIn', value: 'priyadharshinisy', href: info.linkedin },
    { label: 'GitHub', value: 'Priyasy15', href: info.github },
    { label: 'Location', value: info.location, href: null },
  ]

  return (
    <section id="contact" style={{
      padding: '5rem 3rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--teal)', letterSpacing: '0.1em' }}>06</span>
        <span style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--accent)' }}>Contact</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
      }}>
        {contacts.map(c => (
          c.href ? (
            <a key={c.label} href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                background: 'var(--card)',
                border: '0.5px solid var(--border)',
                borderRadius: '10px',
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                transition: 'border-color 0.2s, background 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.background = '#1e2b27'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--card)'
              }}
            >
              <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.label}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', wordBreak: 'break-all' }}>{c.value}</p>
            </a>
          ) : (
            <div key={c.label} style={{
              background: 'var(--card)',
              border: '0.5px solid var(--border)',
              borderRadius: '10px',
              padding: '1.4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.label}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{c.value}</p>
            </div>
          )
        ))}
      </div>

    </section>
  )
}
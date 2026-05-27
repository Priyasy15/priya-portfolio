import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" style={{
      padding: '5rem 3rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--teal)', letterSpacing: '0.1em' }}>05</span>
        <span style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--accent)' }}>Education</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1rem',
      }}>
        {education.map(edu => (
          <div key={edu.degree} style={{
            background: 'var(--card)',
            border: '0.5px solid var(--border)',
            borderRadius: '10px',
            padding: '1.6rem',
          }}>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--teal)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              {edu.institution}
            </p>
            <p style={{
              fontSize: '0.95rem',
              fontWeight: 500,
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}>
              {edu.degree}
            </p>
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: '2rem',
              color: 'var(--teal)',
              lineHeight: 1,
              marginBottom: '0.4rem',
            }}>
              {edu.score}
            </p>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              color: 'var(--text-dim)',
            }}>
              {edu.year}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
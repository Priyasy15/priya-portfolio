import { experience, certifications } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '5rem 3rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--teal)', letterSpacing: '0.1em' }}>04</span>
        <span style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--accent)' }}>Experience</h2>
      </div>

      {experience.map(exp => (
        <div key={exp.role} style={{
          background: 'var(--card)',
          border: '0.5px solid var(--border)',
          borderRadius: '12px',
          padding: '1.8rem 2rem',
          marginBottom: '1rem',
        }}>
          <h3 style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.2rem',
            fontWeight: 400,
            color: 'var(--accent)',
            marginBottom: '0.3rem',
          }}>
            {exp.role}
          </h3>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '12px',
            color: 'var(--teal)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}>
            {exp.org}
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {exp.points.map(point => (
              <li key={point} style={{
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
                paddingLeft: '1.4rem',
                position: 'relative',
                lineHeight: 1.75,
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--teal-dim)',
                }}>→</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div style={{ marginTop: '2.5rem' }}>
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--teal)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          Certifications
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {certifications.map(cert => (
            <span key={cert} style={{
              fontSize: '13px',
              padding: '8px 14px',
              background: 'rgba(91,210,166,0.07)',
              border: '0.5px solid rgba(91,210,166,0.2)',
              borderRadius: '4px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--mono)',
            }}>
              {cert}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
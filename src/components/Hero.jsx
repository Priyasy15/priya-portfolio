import { info } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '7rem 3rem 4rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div>

        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '12px',
          color: 'var(--teal)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'var(--teal)' }} />
          full stack · bioinformatics · ai
        </p>

        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          lineHeight: 1.05,
          color: 'var(--accent)',
          marginBottom: '1rem',
          fontWeight: 400,
        }}>
          Priya<br />Dharshini S Y
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--teal)',
          marginBottom: '1.5rem',
          fontWeight: 400,
          letterSpacing: '0.02em',
        }}>
          Developer · Researcher · Problem Solver
        </p>

        <p style={{
          fontSize: '1rem',
          color: 'var(--text-muted)',
          maxWidth: '520px',
          lineHeight: 1.85,
          marginBottom: '2.5rem',
        }}>
          {info.tagline}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            padding: '0.7rem 1.8rem',
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            letterSpacing: '0.06em',
            background: 'var(--teal)',
            color: '#0b0f0e',
            border: '1px solid var(--teal)',
            borderRadius: '4px',
            fontWeight: 500,
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#7ee8bf'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--teal)'}
          >
            view projects
          </a>
          <a href="#contact" style={{
            padding: '0.7rem 1.8rem',
            fontFamily: 'var(--mono)',
            fontSize: '13px',
            letterSpacing: '0.06em',
            background: 'transparent',
            color: 'var(--teal)',
            border: '1px solid var(--border2)',
            borderRadius: '4px',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.background = 'var(--teal-glow)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.background = 'transparent' }}
          >
            get in touch
          </a>
        </div>

      </div>
    </section>
  )
}
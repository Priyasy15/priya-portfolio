export default function About() {
  return (
    <section id="about" style={{
      padding: '5rem 3rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--teal)', letterSpacing: '0.1em' }}>01</span>
        <span style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--accent)' }}>About</h2>
      </div>

      <p style={{
        fontSize: '1.05rem',
        color: 'var(--text-muted)',
        maxWidth: '720px',
        lineHeight: 1.9,
        marginBottom: '1.5rem',
      }}>
        I'm a developer who sits at the crossroads of web engineering and computational biology.
        My work spans building production-grade full-stack platforms to analyzing gene expression
        datasets with R.
      </p>
      <p style={{
        fontSize: '1.05rem',
        color: 'var(--text-muted)',
        maxWidth: '720px',
        lineHeight: 1.9,
      }}>
        I'm drawn to problems where clean code meets scientific curiosity — whether that's predicting
        aircraft engine failures with deep learning or designing intuitive UIs that real businesses
        depend on every day.
      </p>

    </section>
  )
}
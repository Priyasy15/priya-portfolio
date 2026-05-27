import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: '5rem 3rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--teal)', letterSpacing: '0.1em' }}>03</span>
        <span style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--accent)' }}>Projects</h2>
      </div>

      <div style={{ display: 'grid', gap: '1.2rem' }}>
        {projects.map(project => (
          <div key={project.name} style={{
            background: project.featured ? 'linear-gradient(135deg, #1a2320 0%, #162720 100%)' : 'var(--card)',
            border: project.featured ? '0.5px solid rgba(91,210,166,0.35)' : '0.5px solid var(--border)',
            borderRadius: '12px',
            padding: '1.8rem 2rem',
            position: 'relative',
            transition: 'border-color 0.25s',
          }}>

            {project.featured && (
              <span style={{
                position: 'absolute',
                top: '1.4rem', right: '1.6rem',
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                background: 'rgba(91,210,166,0.1)',
                border: '0.5px solid rgba(91,210,166,0.3)',
                padding: '3px 10px',
                borderRadius: '4px',
              }}>
                ★ {project.tag}
              </span>
            )}

            <h3 style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.3rem',
              fontWeight: 400,
              color: 'var(--accent)',
              marginBottom: '0.3rem',
            }}>
              {project.name}
            </h3>

            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--teal-dim)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.9rem',
            }}>
              {!project.featured && project.tag + ' · '}{project.period}
            </p>

            <p style={{
              fontSize: '0.92rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '1.2rem',
              maxWidth: '750px',
            }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.stack.map(tech => (
                <span key={tech} style={{
                  fontSize: '12px',
                  padding: '4px 10px',
                  background: 'rgba(91,210,166,0.07)',
                  border: '0.5px solid rgba(91,210,166,0.2)',
                  borderRadius: '4px',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--mono)',
                }}>
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
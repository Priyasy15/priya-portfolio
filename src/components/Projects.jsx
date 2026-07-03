import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'

function PulseBadge() {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(40,200,80,0.08)',
      border: '0.5px solid rgba(40,200,80,0.3)',
      borderRadius: '6px',
      padding: '5px 12px',
      marginBottom: '1rem',
    }}>
      <span style={{ position: 'relative', display: 'inline-flex', width: '8px', height: '8px' }}>
        <span style={{
          position: 'absolute',
          display: 'inline-flex',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: '#28c840',
          opacity: 0.6,
          animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
        }} />
        <span style={{
          position: 'relative',
          display: 'inline-flex',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#28c840',
        }} />
      </span>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        color: '#28c840',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        Live in Production
      </span>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        color: 'var(--text-dim)',
        letterSpacing: '0.04em',
      }}>
        · 22 showrooms · 94 staff · running today
      </span>
    </div>
  )
}

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
        {projects.map(function(project, i) {
          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
              style={{
                background: project.featured
                  ? 'linear-gradient(135deg, #1a2320 0%, #162720 100%)'
                  : 'var(--card)',
                border: project.featured
                  ? '0.5px solid rgba(91,210,166,0.35)'
                  : '0.5px solid var(--border)',
                borderRadius: '12px',
                padding: '1.8rem 2rem',
                position: 'relative',
                cursor: 'default',
              }}
            >
              {project.featured && (
                <span style={{
                  position: 'absolute',
                  top: '1.4rem',
                  right: '1.6rem',
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
                  star {project.tag}
                </span>
              )}

              {project.featured && <PulseBadge />}

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
                {project.stack.map(function(tech) {
                  return (
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
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
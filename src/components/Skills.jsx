import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '5rem 3rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--teal)', letterSpacing: '0.1em' }}>02</span>
        <span style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--accent)' }}>Skills</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
      }}>
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            style={{
              background: 'var(--card)',
              border: '0.5px solid var(--border)',
              borderRadius: '10px',
              padding: '1.4rem',
            }}
          >
            <p style={{
              fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--teal)',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              {group.category}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {group.items.map(item => (
                <span key={item} style={{
                  fontSize: '12px', padding: '4px 10px',
                  background: 'rgba(91,210,166,0.07)',
                  border: '0.5px solid rgba(91,210,166,0.2)',
                  borderRadius: '4px', color: 'var(--text-muted)',
                  fontFamily: 'var(--mono)',
                }}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
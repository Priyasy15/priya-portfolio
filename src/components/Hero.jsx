import { useState, useEffect, useRef } from 'react'
import { info } from '../data/portfolio'

const lines = [
  { command: 'whoami', output: 'Priya Dharshini S Y' },
  { command: 'role', output: 'Full Stack Developer · Researcher · Problem Solver' },
  { command: 'stack', output: 'React · Supabase · Python · R' },
  { command: 'location', output: 'Vellore, Tamil Nadu, India' },
  { command: 'status', output: 'Open to opportunities ✓' },
]

const stats = [
  { value: 8.74, label: 'CGPA', suffix: '', decimals: 2 },
  { value: 22, label: 'Showrooms', suffix: '+', decimals: 0 },
  { value: 94, label: 'Staff Managed', suffix: '+', decimals: 0 },
  { value: 100, label: 'Production Ready', suffix: '%', decimals: 0 },
]

function useTypewriter(text, speed = 40, start = true) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!start) return
    setDisplayed('')
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, start])

  return { displayed, done }
}

function useCountUp(target, decimals = 0, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target])

  return count
}

function StatCard({ value, label, suffix, decimals, animate }) {
  const count = useCountUp(value, decimals, 1800, animate)

  return (
    <div style={{
      background: 'var(--card)',
      border: '0.5px solid var(--border)',
      borderRadius: '10px',
      padding: '1.2rem 1.4rem',
      textAlign: 'center',
      transition: 'border-color 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border2)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{
        fontFamily: 'var(--serif)',
        fontSize: '2rem',
        color: 'var(--teal)',
        lineHeight: 1,
        marginBottom: '0.4rem',
      }}>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      </div>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        color: 'var(--text-dim)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        {label}
      </div>
    </div>
  )
}

function TerminalLine({ command, output, onDone, active }) {
  const cmd = useTypewriter('> ' + command, 50, active)
  const out = useTypewriter(output, 25, cmd.done)

  useEffect(() => {
    if (out.done) onDone()
  }, [out.done])

  if (!active && !cmd.displayed) return null

  return (
    <div style={{ marginBottom: '1.2rem' }}>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: 'clamp(0.85rem, 2vw, 1rem)',
        color: 'var(--teal)',
        marginBottom: '0.3rem',
      }}>
        {cmd.displayed}
        {!cmd.done && (
          <span style={{ animation: 'blink 1s step-end infinite' }}>█</span>
        )}
      </div>
      {cmd.done && (
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
          color: 'var(--accent)',
          paddingLeft: '1rem',
          borderLeft: '2px solid var(--teal-dim)',
        }}>
          {out.displayed}
          {!out.done && (
            <span style={{ animation: 'blink 1s step-end infinite' }}>█</span>
          )}
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0)
  const [allDone, setAllDone] = useState(false)
  const [startStats, setStartStats] = useState(false)

  const handleLineDone = (index) => {
    if (index < lines.length - 1) {
      setTimeout(() => setCurrentLine(index + 1), 300)
    } else {
      setTimeout(() => {
        setAllDone(true)
        setTimeout(() => setStartStats(true), 400)
      }, 400)
    }
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '7rem 3rem 4rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div style={{ width: '100%', maxWidth: '700px' }}>

        {/* Terminal window */}
        <div style={{
          background: '#0d1a16',
          border: '1px solid var(--border2)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 0 60px rgba(91,210,166,0.08)',
        }}>
          {/* Terminal top bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.8rem 1.2rem',
            borderBottom: '1px solid var(--border)',
            background: '#0b1410',
          }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
            <span style={{
              marginLeft: '0.8rem',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              color: 'var(--text-dim)',
            }}>
              priya@portfolio ~ %
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: '1.8rem 2rem', minHeight: '280px' }}>
            {lines.map((line, i) => (
              <TerminalLine
                key={line.command}
                command={line.command}
                output={line.output}
                active={i === currentLine}
                onDone={() => handleLineDone(i)}
              />
            ))}
            {allDone && (
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '1rem',
                color: 'var(--teal)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span>&gt;</span>
                <span style={{ animation: 'blink 1s step-end infinite' }}>█</span>
              </div>
            )}
          </div>
        </div>

        {/* Stats counter — appears after terminal finishes */}
        {allDone && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.8rem',
            marginTop: '1.5rem',
            animation: 'fadeIn 0.6s ease forwards',
          }}>
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                {...stat}
                animate={startStats}
              />
            ))}
          </div>
        )}

        {/* CTA buttons */}
        {allDone && (
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem',
            flexWrap: 'wrap',
            animation: 'fadeIn 0.6s ease forwards',
          }}>
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
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--teal)'
                e.currentTarget.style.background = 'var(--teal-glow)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              get in touch
            </a>
          </div>
        )}

      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
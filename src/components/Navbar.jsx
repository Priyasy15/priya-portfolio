import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['about', 'skills', 'projects', 'experience', 'education', 'contact']

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 3rem',
      background: scrolled ? 'rgba(11,15,14,0.92)' : 'transparent',
      borderBottom: scrolled ? '0.5px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '13px',
        color: 'var(--teal)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        priya.dev
      </span>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(link => (
          <li key={link}>
            <a href={'#' + link} style={{
              fontFamily: 'var(--mono)',
              fontSize: '13px',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
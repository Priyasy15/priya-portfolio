import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'


export default function App() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    const move = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Cursor glow */}
      <div ref={glowRef} style={{
        position: 'fixed',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,210,166,0.07) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 999,
        transition: 'left 0.08s ease, top 0.08s ease',
      }} />

      <Navbar />
      <main>
        <Hero />
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal delay={0.1}><Skills /></ScrollReveal>
        <ScrollReveal delay={0.1}><Projects /></ScrollReveal>
        <ScrollReveal delay={0.1}><Experience /></ScrollReveal>
        <ScrollReveal delay={0.1}><Education /></ScrollReveal>
        <ScrollReveal delay={0.1}><Contact /></ScrollReveal>
        
      </main>
      <Footer />
    </>
  )
}
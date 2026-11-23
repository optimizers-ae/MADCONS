import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WorkDeliveredSection from './components/WorkDeliveredSection'
import ProcessSection from './components/ProcessSection'
import QuoteBanner from './components/QuoteBanner'
import SectorsSection from './components/SectorsSection'
import ValuesSection from './components/ValuesSection'
import CommitmentSection from './components/CommitmentSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactBanner from './components/ContactBanner'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

const App = () => {
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#1C1E3D] text-white selection:bg-[#C88D2B] selection:text-white">
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main>
        <Hero onOpenContact={() => setContactOpen(true)} />
        <AboutSection onOpenContact={() => setContactOpen(true)} />
        <ServicesSection onOpenContact={() => setContactOpen(true)} />
        <WorkDeliveredSection onOpenContact={() => setContactOpen(true)} />
        <ProcessSection onOpenContact={() => setContactOpen(true)} />
        <QuoteBanner onOpenContact={() => setContactOpen(true)} />
        <SectorsSection onOpenContact={() => setContactOpen(true)} />
        <ValuesSection />
        <CommitmentSection />
        <TestimonialsSection />
        <ContactBanner onOpenContact={() => setContactOpen(true)} />
      </main>
      <Footer onOpenContact={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

export default App

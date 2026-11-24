import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ValuesSection from './components/ValuesSection'
import WorkDeliveredSection from './components/WorkDeliveredSection'
import ProcessSection from './components/ProcessSection'
import QuoteBanner from './components/QuoteBanner'
import SectorsSection from './components/SectorsSection'
import CommitmentSection from './components/CommitmentSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactBanner from './components/ContactBanner'
import Footer from './components/Footer'

const App = () => {
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
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ValuesSection />
        <WorkDeliveredSection />
        <ProcessSection />
        <QuoteBanner />
        <SectorsSection />
        <CommitmentSection />
        <TestimonialsSection />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App

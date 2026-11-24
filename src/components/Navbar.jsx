import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import BrandLogo from './BrandLogo'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Process', href: '#process' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'Values', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1C1E3D]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center group">
          <BrandLogo variant="dark" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-200 hover:text-[#C5A059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="cursor-pointer px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-[#C5A059]/60 hover:bg-[#C5A059] hover:text-[#1C1E3D] hover:border-[#C5A059] transition-all duration-300 shadow-sm flex items-center gap-2"
          >
            <span>Get In Touch</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <a
            href="#contact"
            className="cursor-pointer px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase text-white border border-[#C5A059]/60 hover:bg-[#C5A059] hover:text-[#1C1E3D] transition-all"
          >
            Contact
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-200 hover:text-[#C5A059] p-1.5 transition-colors" aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1C1E3D]/98 backdrop-blur-xl border-t border-[#C5A059]/20 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-gray-200 hover:text-[#C5A059] transition-colors py-1">
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full text-sm font-semibold uppercase bg-[#C5A059] text-[#1C1E3D] hover:bg-[#D4AF37] transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

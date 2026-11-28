import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import BrandLogo from './BrandLogo'

const Footer = () => {
  return (
    <footer className="relative bg-[#1C1E3D] text-white pt-16 pb-8 overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2C3066]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#C88D2B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Top Contact Bar (Fade Up) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white rounded-2xl p-6 sm:p-8 text-gray-800 shadow-2xl mb-14 border border-amber-200/60 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center justify-center lg:justify-start">
            <BrandLogo variant="light" />
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EE] border border-amber-200 flex items-center justify-center text-[#C88D2B] shrink-0">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-[#C88D2B] uppercase tracking-wider">Call Us</p>
                <p className="text-xs sm:text-sm font-semibold text-[#0B132B]">[Your Telephone Number ]</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EE] border border-amber-200 flex items-center justify-center text-[#C88D2B] shrink-0">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-[#C88D2B] uppercase tracking-wider">Email Us</p>
                <a href="mailto:connect@madcons.com" className="text-xs sm:text-sm font-semibold text-[#0B132B] hover:text-[#C88D2B] transition-colors">
                  connect@madcons.com
                </a>
              </div>
            </div>

            <a
              href="#contact"
              className="cursor-pointer px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C88D2B] text-white hover:bg-[#D49B28] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Book Call</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Footer Navigation Columns (Fade Up, Centered on Mobile, Left-aligned on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-gray-800 text-center md:text-left"
        >
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-center md:justify-start">
              <BrandLogo variant="dark" />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              A dynamic and forward-thinking project management consulting firm dedicated to turning visions into reality through strategic planning, precision execution, and measurable results.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2 text-gray-400">
              <a href="https://linkedin.com/company/madrej-project-management/about/?viewAsMember=true" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#242854] border border-gray-700/80 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-all" aria-label="LinkedIn">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-4 h-4 fill-current"
  viewBox="0 0 24 24"
>
  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
</svg>
              </a>
              <a href="https://www.facebook.com/share/19oYyGqFQW/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#242854] border border-gray-700/80 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-all" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C88D2B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C88D2B]">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Contract Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Risk & Compliance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Procurement Oversight</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Quality Control</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Turnkey Supervision</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C88D2B]">
              Offices
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin size={14} className="text-[#C88D2B] shrink-0 mt-0.5" />
                <span>King Fahd Road, Riyadh, Kingdom of Saudi Arabia</span>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin size={14} className="text-[#C88D2B] shrink-0 mt-0.5" />
                <span>Business Bay, Downtown Dubai, UAE</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} MADAARIJ CONSULTING & ADVISORY. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6">
            <a href="#contact" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Legal Governance</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;

import { motion } from 'framer-motion'
import { heroMan, heroBg } from '../utils/assets'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative bg-[#1C1E3D] text-white overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-0 min-h-[560px] lg:min-h-[620px]">
      {/* Background overlay texture & subtle lighting */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1E3D] via-[#1C1E3D]/95 to-[#1C1E3D]/85 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#2A2E63]/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none" />

      {/* Signature Solid Mustard Yellow Block in Bottom Right matching design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute bottom-0 right-0 w-[45%] md:w-[38%] lg:w-[32%] xl:w-[28%] h-24 sm:h-28 md:h-32 lg:h-36 bg-[#C88D2B] z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          
          {/* Left Column: Social Follow + Hero Content */}
          <div className="lg:col-span-7 flex items-start gap-4 sm:gap-6 lg:gap-8 pb-6 lg:pb-12 z-10">
            
            {/* Vertical Social Follow Bar */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="hidden sm:flex flex-col items-center gap-4 text-white/80 shrink-0 pt-2"
            >
              <a href="https://linkedin.com/company/madrej-project-management/about/?viewAsMember=true" target="_blank" rel="noreferrer" className="w-6 h-6 flex items-center justify-center hover:text-[#C5A059] transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.4 9.74v-8.37H5.06v8.37z"/></svg>
              </a>
              <a href="https://www.facebook.com/share/19oYyGqFQW/" target="_blank" rel="noreferrer" className="w-6 h-6 flex items-center justify-center hover:text-[#C5A059] transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <div className="w-[1px] h-8 bg-white/40 my-1" />
              <span className="text-[9px] font-bold tracking-[0.25em] text-white/70 uppercase [writing-mode:vertical-rl] rotate-180">
                FOLLOW US
              </span>
            </motion.div>

            {/* Typography & Editorial Content Layout (Fade from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4 max-w-xl"
            >
              
              {/* Eyebrow Pill (Fade from Top) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C88D2B]/15 border border-[#C88D2B]/40 text-[#DFB15B] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFB15B] shrink-0" />
                <span>THINK BEYOND. PERFORM BETTER.</span>
              </motion.div>

              {/* Main Welcome & Brand Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="space-y-1"
              >
                <p className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                  Welcome to
                </p>
                <div className="tracking-tight font-black uppercase text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.08]">
                  <h1 className="tracking-tight inline-block">
                    MADAARIJ
                    {/* <span className="text-white">MADA</span>
                    <span className="text-[#C5A059]">ARIJ</span> */}
                  </h1>
                  <span className="block text-[#C5A059] text-2xl sm:text-2xl md:text-3xl font-extrabold tracking-normal">
                    <span className="text-white">C</span>ONSULTING & <span className="text-white">A</span>DVISORY
                  </span>
                </div>
              </motion.div>

              {/* Triad Tagline Highlight */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="border-l-2 border-[#C88D2B] pl-3 py-1 bg-white/[0.02]"
              >
                <p className="text-xs sm:text-[13px] font-bold text-amber-200 tracking-wide leading-snug">
                  Turning Complexity Into Clarity.{' '}
                  <span className="text-white">Strategy Into Action.</span>{' '}
                  <span className="text-[#C5A059]">Ambition Into Results.</span>
                </p>
              </motion.div>

              {/* Core Proposition & Narrative */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="space-y-2 text-gray-200 text-sm sm:text-[16px] leading-relaxed"
              >
                <p className="font-medium text-base  text-white/95">
                  We believe that better business starts with better thinking.
                </p>
                <p className="text-gray-300 text-base sm:text-[16px] leading-relaxed">
                  In a world where efficiency, precision, and smart decisions define success, we help organizations see opportunities differently, work smarter, and achieve more.
                </p>
              </motion.div>

              {/* Smarter Ways Forward Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="p-3 sm:p-3.5 rounded-xl bg-[#242854]/60 border border-amber-400/25 backdrop-blur-sm"
              >
                <p className=" sm:text-[16px] font-semibold text-amber-100 leading-snug">
                  “We don't just provide services. We create smarter ways forward.”
                </p>
                <p className="text-[13px] sm:text-xs text-gray-300 mt-1">
                  Discover a partner committed to making every decision count and every operation work better.
                </p>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="pt-1"
              >
                <a
                  href="#contact"
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#FEE8BC] via-[#F8D288] to-[#F3BD5B] text-[#1C1E3D] hover:brightness-105 transition-all duration-300 shadow-xl shadow-amber-900/20 active:scale-95 group"
                >
                  <span>GET STARTED</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>

            </motion.div>

          </div>

          {/* Right Column: Hero Image (Fade from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end items-end self-end z-10 w-full"
          >
            <img
              src={heroMan}
              alt="Madaarij Project Management Consultant"
              className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none h-auto max-h-[440px] sm:max-h-[500px] lg:max-h-[540px] object-contain object-bottom -mb-0.5 select-none drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero;

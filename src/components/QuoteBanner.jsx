import { ArrowRight, Sparkles } from 'lucide-react'
import { quoteBg } from '../utils/assets'

const QuoteBanner = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#1C1E3D] text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen pointer-events-none" style={{ backgroundImage: `url(${quoteBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1E3D] via-[#1C1E3D]/80 to-[#1C1E3D]/95 pointer-events-none" />

      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-[#C88D2B]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C88D2B]">
              <Sparkles size={14} />
              <span>Our Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] text-white">
              GREAT PROJECTS <br />
              DON'T HAPPEN BY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#DFB15B] to-[#E8D09E]">
                CHANCE
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-gray-800/80 lg:pl-10">
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 leading-relaxed uppercase tracking-wide">
              THEY ARE BUILT ON STRATEGY, PRECISION, AND DEDICATION. LET US HELP YOU ACHIEVE YOUR HIGHEST POTENTIAL.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We empower organizations across the region with world-class project governance, safeguarding capital investments and ensuring visionary projects are delivered flawlessly.
            </p>
            <div>
              <a
                href="#contact"
                className="cursor-pointer inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#C88D2B] text-white hover:bg-[#D49B28] transition-all duration-300 shadow-xl shadow-[#C88D2B]/20 group"
              >
                <span>Partner With Madaarij</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteBanner

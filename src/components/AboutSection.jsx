import { CheckCircle2, ArrowRight } from 'lucide-react'
import sec1 from '../../src/assets/sec1.webp'

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-[#FAF8F5] text-gray-800 py-20 lg:py-28 overflow-hidden">
      {/* Top Left Mustard Geometric Accent Block */}
      <div className="absolute top-0 left-0 w-24 sm:w-36 h-12 sm:h-16 bg-[#C88D2B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 group">
              <img src={sec1} alt="Madaarij Team Collaboration" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E3D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="absolute -bottom-5 -right-3 sm:bottom-6 sm:-right-6 bg-[#1C1E3D] text-white p-4 sm:p-5 rounded-xl shadow-2xl border-l-4 border-[#C88D2B] max-w-[200px]">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#C5A059]">100%</p>
              <p className="text-xs text-gray-300 font-medium uppercase tracking-wide">Client Satisfaction & Quality Assurance</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C88D2B]">
                WHO WE ARE 
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] uppercase tracking-tight leading-tight">
                WE THINK DIFFERENTLY. WE WORK STRATEGICALLY
              </h2>
              {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] uppercase tracking-tight leading-tight">
                MANAGEMENT SERVICES
              </h2> */}
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At <b>MADAARIJ Consulting & Advisory </b>, we are driven by a simple belief that Every organization has the
              potential to achieve more with the right strategy, the right structure, and the right expertise.

            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We bring together analytical thinking, professional insight, and practical management solutions to
              help businesses and institutions navigate complexity and unlock their full potential.

            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C88D2B] shrink-0 mt-0.5" size={18} />
                <span className="text-sm font-medium text-gray-700"> <b>INSIGHT </b> — Understanding challenges, identifying opportunities, and seeing the bigger picture</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C88D2B] shrink-0 mt-0.5" size={18} />
                <span className="text-sm font-medium text-gray-700"><b>STRATEGY </b> — Developing intelligent, structured, and tailored solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C88D2B] shrink-0 mt-0.5" size={18} />
                <span className="text-sm font-medium text-gray-700"><b>EXECUTION </b> — Turning recommendations into meaningful actions and measurable improvements</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#1C1E3D] text-white hover:bg-[#C88D2B] hover:text-[#1C1E3D] transition-all duration-300 shadow-md"
              >
                <span>Request A Consultation</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection

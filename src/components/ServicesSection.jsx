import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react'
import {
  serviceProcurement,
  serviceProjectMgmt,
  serviceAdminStudies,
  serviceOperationalAnalysis
} from '../utils/assets'

const servicesData = [
  {
    id: 1,
    num: '01',
    category: '01 / PROCUREMENT',
    shortTitle: 'Procurement',
    title: 'VALUE BEGINS WITH THE RIGHT CHOICE.',
    description:
      'We turn procurement into a strategic advantage through smarter sourcing, informed decisions, optimized purchasing processes, and supplier management.',
    image: serviceProcurement,
    tags: [
      'Strategic Procurement',
      'Sourcing Advisory',
      'Cost Optimization',
      'Supplier Management',
      'Process Improvement',
      'Risk Management'
    ]
  },
  {
    id: 2,
    num: '02',
    category: '02 / PROJECT MANAGEMENT',
    shortTitle: 'Project Management',
    title: 'GREAT IDEAS DESERVE GREAT EXECUTION.',
    description:
      'We bring structure, coordination, and control to projects, transforming ambitious plans into organized actions and successful outcomes.',
    image: serviceProjectMgmt,
    tags: [
      'Project Planning',
      'Coordination',
      'Monitoring',
      'Risk Management',
      'Performance Reporting'
    ]
  },
  {
    id: 3,
    num: '03',
    category: '03 / ADMINISTRATIVE STUDIES',
    shortTitle: 'Administrative Studies',
    title: 'BETTER STRUCTURES. STRONGER ORGANIZATIONS.',
    description:
      'We examine administrative frameworks, organizational structures, and internal procedures to uncover opportunities for improvement and create more effective management systems.',
    image: serviceAdminStudies,
    tags: [
      'Administrative Assessment',
      'Organizational Studies',
      'Workflow Review',
      'Procedures Development'
    ]
  },
  {
    id: 4,
    num: '04',
    category: '04 / OPERATIONAL ANALYSIS',
    shortTitle: 'Operational Analysis',
    title: 'SEE CLEARER. WORK SMARTER. ACHIEVE MORE.',
    description:
      'We transform operational information into actionable intelligence, identifying performance gaps, improving workflows, and helping organizations make better decisions.',
    image: serviceOperationalAnalysis,
    tags: [
      'Operational Assessment',
      'Process Optimization',
      'Efficiency Analysis',
      'KPI Evaluation'
    ]
  }
]

const ServicesSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0)

  const prevService = () => setCurrentIdx((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1))
  const nextService = () => setCurrentIdx((prev) => (prev + 1) % servicesData.length)

  return (
    <section id="services" className="relative bg-[#1C1E3D] text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#2C3066]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#C88D2B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (Fade from Top) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center space-y-3 max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C88D2B]/15 border border-[#C88D2B]/40 text-[#DFB15B] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles size={12} className="text-[#DFB15B]" />
            <span>03. WHAT WE DO — FOUR PILLARS OF EXPERTISE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
            STRATEGIC ADVISORY & CONSULTING SOLUTIONS
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Delivering insight, structure, and execution excellence across four core domains designed to make every decision count and every operation perform better.
          </p>
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Featured Service Spotlight Showcase (Fade Up) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative bg-[#FAF5EE] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-gray-800 shadow-2xl border border-amber-200/60"
        >

          {/* Arrow Nav Buttons */}
          <button
            onClick={prevService}
            className="cursor-pointer absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C88D2B] text-white flex items-center justify-center shadow-xl hover:bg-[#D49B28] hover:scale-105 transition-all z-20"
            aria-label="Previous pillar"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextService}
            className="cursor-pointer absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C88D2B] text-white flex items-center justify-center shadow-xl hover:bg-[#D49B28] hover:scale-105 transition-all z-20"
            aria-label="Next pillar"
          >
            <ChevronRight size={22} />
          </button>

          {/* Sliding Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform"
              style={{ transform: `translateX(-${currentIdx * 100}%)` }}
            >
              {servicesData.map((service, i) => (
                <div
                  key={service.id}
                  className={`w-full shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-opacity duration-[1100ms] ease-in-out ${
                    i === currentIdx ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden={i !== currentIdx}
                >
                  {/* Left: Image (Animated from Left) */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-6"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-900/10 h-64 sm:h-80 md:h-96 group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#1C1E3D]/85 backdrop-blur-md rounded-full text-xs font-bold text-[#DFB15B] uppercase tracking-wider border border-[#C5A059]/30">
                        {service.category}
                      </div>
                    </div>
                  </motion.div>

                  {/* Right: Content (Animated from Right) */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-6 space-y-5 text-left"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-extrabold text-[#C88D2B] tracking-[0.2em] uppercase">
                        {service.category}
                      </p>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#0B132B] tracking-tight leading-tight mt-1">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Disciplines / Tags */}
                    <div className="space-y-2 pt-1">
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                        Key Disciplines & Capabilities:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1C1E3D]/5 text-[#1C1E3D] border border-[#C88D2B]/30 flex items-center gap-1.5 hover:bg-[#C88D2B]/10 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C88D2B]" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Action */}
                    <div className="pt-3">
                      <a
                        href="#contact"
                        tabIndex={i === currentIdx ? 0 : -1}
                        className="cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#1C1E3D] text-white hover:bg-[#C88D2B] hover:text-[#1C1E3D] transition-all duration-300 shadow-md group"
                      >
                        <span>Consult On This Service</span>
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 pt-8 mt-2">
            {servicesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`cursor-pointer transition-all duration-500 ${
                  idx === currentIdx
                    ? 'w-8 h-2 bg-[#C88D2B] rounded-full'
                    : 'w-2 h-2 bg-gray-400/60 rounded-full hover:bg-gray-600'
                }`}
                aria-label={`Go to pillar ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ServicesSection;

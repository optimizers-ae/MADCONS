import { motion } from 'framer-motion'
import { ourDifference } from '../utils/assets'
import { Compass, Sliders, Target, Briefcase, Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

const differentiators = [
  {
    num: '01',
    title: 'A Strategic Mindset',
    description: 'We look beyond immediate challenges to identify long-term opportunities.',
    icon: Compass
  },
  {
    num: '02',
    title: 'Tailored Solutions',
    description: 'We understand that no two organizations are alike. Our approach adapts to your objectives and requirements.',
    icon: Sliders
  },
  {
    num: '03',
    title: 'Analytical Precision',
    description: 'We rely on structured assessments, sound analysis, and informed recommendations.',
    icon: Target
  },
  {
    num: '04',
    title: 'Practical Thinking',
    description: 'Our focus is on solutions that work in real business environments.',
    icon: Briefcase
  },
  {
    num: '05',
    title: 'Commitment to Excellence',
    description: 'We approach every assignment with professionalism, integrity, and attention to detail.',
    icon: Award
  }
]

const ValuesSection = () => {
  return (
    <section id="difference" className="relative bg-[#FAF5EE] py-20 lg:py-28 text-gray-800 overflow-hidden">
      {/* Anchor for values alias */}
      <div id="values" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C88D2B]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#1C1E3D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Fade from Top) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C88D2B]/15 border border-[#C88D2B]/40 text-[#C88D2B] text-[12px] sm:text-lg font-bold tracking-[0.2em] uppercase">
            <Sparkles size={12} className="text-[#C88D2B]" />
            <span>OUR DIFFERENCE — WHY WORK WITH US?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B132B] leading-tight">
            BECAUSE BETTER DECISIONS CREATE BETTER OUTCOMES.
          </h2>
          
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: High-Res Boardroom Photo & Strategic Impact Box (Fade from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-amber-900/15 group flex-1 min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] flex flex-col">
              <img
                src={ourDifference}
                alt="Madaarij Executive Boardroom Consultation"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E3D]/80 via-[#1C1E3D]/20 to-transparent" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#1C1E3D]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-amber-300/30 text-white shadow-2xl">
                <p className="text-[15px] sm:text-base font-bold uppercase tracking-widest text-[#DFB15B]">
                  Client Collaboration & Governance
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gray-200 mt-1 leading-snug">
                  Strategic discussions driving measurable, long-term impact.
                </p>
              </div>
            </div>

            {/* Strategic Value Proposition Pill Box below image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-xl bg-white border border-amber-200/70 shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAF3E8] border border-[#C88D2B]/30 flex items-center justify-center text-[#C88D2B]">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-gray-500 uppercase tracking-wider">Proven Execution</p>
                  <p className="text-base sm:text-lg font-extrabold text-[#0B132B]">Trusted Advisory & Strategy</p>
                </div>
              </div>
              <span className="px-2 py-1 text-center rounded-full bg-[#FAF3E8] border border-[#C88D2B]/30 text-[#C88D2B] text-xs font-black">
                100% Value
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: 5 Differentiators & Motto (Fade from Right) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Title & Proposition (Fade from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="space-y-2"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-[#0B132B] tracking-tight leading-tight">
                MORE THAN EXPERTISE. A DIFFERENT PERSPECTIVE.
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We bring a thoughtful, structured, and results-oriented approach to every engagement.
              </p>
            </motion.div>

            {/* The 5 Key Differentiator Points (Staggered Fade from Right) */}
            <div className="space-y-3 pt-1">
              {differentiators.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                    className="p-3.5 sm:p-4 rounded-xl bg-white border border-amber-200/70 shadow-sm hover:shadow-md hover:border-[#C88D2B] transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FAF3E8] border border-[#C88D2B]/30 flex items-center justify-center text-[#C88D2B] shrink-0 group-hover:bg-[#C88D2B] group-hover:text-white transition-all shadow-inner">
                      <IconComponent size={18} />
                    </div>

                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] font-black text-[#C88D2B]">
                          {item.num}.
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-[#0B132B] tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[14px] sm:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Closing Motto & CTA Card (Fade Up) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              className="p-4 sm:p-5 rounded-2xl bg-[#1C1E3D] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-400/20"
            >
              <div>
                <p className="text-base sm:text-base font-bold text-[#DFB15B] italic">
                  “Because better performance starts with better decisions.”
                </p>
                <p className="text-[13px] text-gray-300 mt-0.5">
                  Let’s collaborate on your next strategic milestone.
                </p>
              </div>

              <a
                href="#contact"
                className="cursor-pointer px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C88D2B] text-white hover:bg-[#D49B28] transition-all shadow-md flex items-center gap-2 shrink-0 group"
              >
                <span>Partner With Us</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ValuesSection;

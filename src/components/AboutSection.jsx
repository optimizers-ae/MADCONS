import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import sec1 from '../../src/assets/sec1.webp'

const  AboutSection = () => {
  return (
    <section id="about" className="relative bg-[#FAF8F5] text-gray-800 py-20 lg:py-28 overflow-hidden">
      {/* Top Left Mustard Geometric Accent Block */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-24 sm:w-36 h-12 sm:h-16 bg-[#C88D2B]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with Experience Badge (Fade from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 group">
              <img src={sec1} alt="Madaarij Team Collaboration" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E3D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-5 -right-3 sm:bottom-6 sm:-right-6 bg-[#1C1E3D] text-white p-4 sm:p-5 rounded-xl shadow-2xl border-l-4 border-[#C88D2B] max-w-[200px]"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-[#C5A059]">100%</p>
              <p className="text-xs text-gray-300 font-medium uppercase tracking-wide">Client Satisfaction & Quality Assurance</p>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial & Values (Fade from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Header (Fade from Top) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <p className="text-base font-bold uppercase tracking-widest text-[#C88D2B]">
                WHO WE ARE 
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] uppercase tracking-tight leading-tight">
                WE THINK DIFFERENTLY. WE WORK STRATEGICALLY
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              At <b>MADAARIJ Consulting & Advisory </b>, we are driven by a simple belief that Every organization has the
              potential to achieve more with the right strategy, the right structure, and the right expertise.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              We bring together analytical thinking, professional insight, and practical management solutions to
              help businesses and institutions navigate complexity and unlock their full potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-3 pt-2"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C88D2B] shrink-0 mt-0.5" size={18} />
                <span className="text-base sm:text-lg font-medium text-gray-700"> <b>INSIGHT </b> — Understanding challenges, identifying opportunities, and seeing the bigger picture</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C88D2B] shrink-0 mt-0.5" size={18} />
                <span className="text-base sm:text-lg font-medium text-gray-700"><b>STRATEGY </b> — Developing intelligent, structured, and tailored solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#C88D2B] shrink-0 mt-0.5" size={18} />
                <span className="text-base sm:text-lg font-medium text-gray-700"><b>EXECUTION </b> — Turning recommendations into meaningful actions and measurable improvements</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#1C1E3D] text-white hover:bg-[#C88D2B] hover:text-[#1C1E3D] transition-all duration-300 shadow-md"
              >
                <span>Request A Consultation</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection;

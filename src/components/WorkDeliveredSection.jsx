import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { workItSecurity, workStrategicPlan, workLogistics, workIndustrial } from '../utils/assets'

const projects = [
  {
    id: 1,
    image: workLogistics,
    category: 'Logistics & Warehousing',
    title: 'Outsourcing Warehouse & Warehouse Shift Plan & Execution',
    description: 'Comprehensive outsourcing strategy, facility transition roadmap, shift planning, and hands-on execution oversight for high-volume warehousing.',
    client: 'Regional Logistics Carrier',
    timeline: '6 Months'
  },
  {
    id: 2,
    image: workStrategicPlan,
    category: 'Strategic Procurement',
    title: 'Procurement Restructuring & Strategic Sourcing Advisory',
    description: 'End-to-end procurement audit, supplier contract renegotiation, and spend optimization framework to streamline supply acquisition and purchasing.',
    client: 'Enterprise Holding Group',
    timeline: '8 Months'
  },
  {
    id: 3,
    image: workItSecurity,
    category: 'Administrative Studies',
    title: 'Corporate Administrative Studies & Workflow Restructuring',
    description: 'Diagnostic organizational assessment, internal hierarchy realignment, and standard operating procedures (SOPs) development across business units.',
    client: 'Public-Private Enterprise',
    timeline: '5 Months'
  },
  {
    id: 4,
    image: workIndustrial,
    category: 'Operational Analysis',
    title: 'Operational Efficiency Analysis & Process Optimization',
    description: 'Cross-functional operational performance review, bottleneck elimination, and KPI tracking frameworks to elevate productivity and cost efficiency.',
    client: 'Manufacturing & Distribution Co.',
    timeline: '7 Months'
  }
]

const WorkDeliveredSection = () => {
  return (
    <section id="projects" className="relative bg-[#FAF7F2] py-20 lg:py-28 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Fade from Top) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center space-y-3 max-w-3xl mx-auto mb-14"
        >
          <p className="text-base font-bold uppercase  text-[#C88D2B]">
            RECENT COMPLETED
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B132B]">
            OUR WORK DELIVERED
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore some of our successful client collaborations and measurable project outcomes.
          </p>
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </motion.div>

        {/* 4 Cards Grid (Staggered Fade Up) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="group relative bg-[#1C1E3D] rounded-2xl overflow-hidden shadow-xl border border-gray-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between"
            >
              
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E3D] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1C1E3D]/80 backdrop-blur-md border border-[#C5A059]/40 text-[#DFB15B] text-[11px] font-semibold tracking-wider uppercase">
                  {proj.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-[#1C1E3D] text-white">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#DFB15B] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-300 line-clamp-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-gray-800/80 flex items-center justify-between">
                  <span className="text-[13px] text-[#C5A059] font-medium tracking-wide">
                    {proj.timeline}
                  </span>
                  <a href="#contact" className="cursor-pointer text-xs font-semibold text-gray-300 hover:text-[#C5A059] flex items-center gap-1 transition-colors">
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WorkDeliveredSection;

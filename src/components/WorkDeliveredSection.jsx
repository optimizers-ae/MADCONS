import { ArrowUpRight } from 'lucide-react'
import { workItSecurity, workStrategicPlan, workLogistics, workIndustrial } from '../utils/assets'

const projects = [
  {
    id: 1,
    image: workItSecurity,
    category: 'Information Technology',
    title: 'Enterprise Cyber Security & Data Infrastructure',
    description: 'Turnkey project management for a tier-3 data center and high-security cyber infrastructure deployment.',
    client: 'FinTech Enterprise',
    timeline: '9 Months'
  },
  {
    id: 2,
    image: workStrategicPlan,
    category: 'Commercial Architecture',
    title: 'Corporate Headquarters Strategic Space Planning',
    description: 'End-to-end scope, vendor procurement, and construction supervision for a 45,000 sq ft corporate office.',
    client: 'Multinational Group',
    timeline: '12 Months'
  },
  {
    id: 3,
    image: workLogistics,
    category: 'Supply Chain & Logistics',
    title: 'Smart Automated Fulfillment & Warehouse Hub',
    description: 'Procurement orchestration, robotics integration, and building management oversight for an automated logistics center.',
    client: 'Regional Logistics Carrier',
    timeline: '14 Months'
  },
  {
    id: 4,
    image: workIndustrial,
    category: 'Industrial Engineering',
    title: 'Precision Industrial Facility & Engineering Buildout',
    description: 'Supervision of heavy MEP installations, strict regulatory safety compliance, and stage-gate commissioning.',
    client: 'Manufacturing Conglomerate',
    timeline: '18 Months'
  }
]

const WorkDeliveredSection = () => {
  return (
    <section id="projects" className="relative bg-[#FAF7F2] py-20 lg:py-28 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C88D2B]">
            RECENT COMPLETED
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B132B]">
            OUR WORK DELIVERED
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Explore some of our successful client collaborations and measurable project outcomes.
          </p>
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className="group relative bg-[#1C1E3D] rounded-2xl overflow-hidden shadow-xl border border-gray-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between">
              
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E3D] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1C1E3D]/80 backdrop-blur-md border border-[#C5A059]/40 text-[#DFB15B] text-[11px] font-semibold tracking-wider uppercase">
                  {proj.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-[#1C1E3D] text-white">
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#DFB15B] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-gray-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-[#C5A059] font-medium tracking-wide">
                    {proj.timeline}
                  </span>
                  <a href="#contact" className="cursor-pointer text-xs font-semibold text-gray-300 hover:text-[#C5A059] flex items-center gap-1 transition-colors">
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WorkDeliveredSection

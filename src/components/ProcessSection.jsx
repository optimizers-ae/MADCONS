import { Search, Compass, Sliders, ArrowRight } from 'lucide-react'
import { process1, process2, process3 } from '../utils/assets'

const steps = [
  {
    step: '01',
    title: 'DISCOVERY & CONSULTATION',
    subtitle: 'Comprehensive Assessment',
    description: 'We initiate every engagement with rigorous stakeholder interviews, constraint mapping, and feasibility studies to define unambiguous project targets.',
    image: process1,
    icon: Search
  },
  {
    step: '02',
    title: 'STRATEGIC PLANNING',
    subtitle: 'Blueprint Architecture',
    description: 'Formulating end-to-end work breakdown structures, realistic schedule baselines, value engineering, and proactive risk contingency protocols.',
    image: process2,
    icon: Compass
  },
  {
    step: '03',
    title: 'EXECUTION & CONTROL',
    subtitle: 'Active Management',
    description: 'Disciplined stage-gate monitoring, quality assurance audits, budget oversight, and transparent reporting to keep projects strictly on track.',
    image: process3,
    icon: Sliders
  }
]

const ProcessSection = ({ onOpenContact }) => {
  return (
    <section id="process" className="relative bg-gradient-to-b from-[#F9F1E6] via-[#FAF5EB] to-[#F5ECE0] py-20 lg:py-28 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C88D2B]">
                HOW WE DELIVER
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B132B]">
                OUR PROCESS
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our structured, client-centric methodology ensures clarity, rigorous accountability, and outstanding outcomes from initial concept through final commissioning.
            </p>

            <div className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-amber-200 shadow-sm space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#C88D2B]">Structured Governance</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every project is guided by international standards (PMI, ISO) tailored to regional regulatory compliance in Saudi Arabia and the GCC.
              </p>
            </div>

            <div className="pt-2">
              <button onClick={onOpenContact} className="cursor-pointer px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#1C1E3D] text-white hover:bg-[#C88D2B] hover:text-[#1C1E3D] transition-all shadow-md flex items-center gap-2">
                <span>Start Your Project</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((st) => {
              const IconComponent = st.icon
              return (
                <div key={st.step} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-amber-200/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
                  <div className="relative h-44 overflow-hidden">
                    <img src={st.image} alt={st.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-[#C88D2B] text-white flex items-center justify-center shadow-lg">
                      <IconComponent size={20} />
                    </div>
                    
                    <span className="absolute top-3 right-3 text-xs font-extrabold text-white/90 bg-black/40 px-2.5 py-0.5 rounded-full">
                      Step {st.step}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold uppercase text-[#0B132B] tracking-tight group-hover:text-[#C88D2B] transition-colors">
                        {st.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#C88D2B] uppercase tracking-wider mt-0.5">
                        {st.subtitle}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed mt-2">
                        {st.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                      <span>Phase {st.step}</span>
                      <span className="text-[#C88D2B] font-semibold">Stage Gate</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 pt-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C88D2B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>

      </div>
    </section>
  )
}

export default ProcessSection

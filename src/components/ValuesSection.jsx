import { valueGrowth, aboutTeam, process1 } from '../utils/assets'
import { TrendingUp, Target, ShieldCheck } from 'lucide-react'

const values = [
  {
    title: 'Growth',
    tagline: 'Continuous Advancement',
    description: 'Fostering sustainable development, scalable execution, and continuous innovation in all our client partnerships.',
    image: valueGrowth,
    icon: TrendingUp
  },
  {
    title: 'Impact',
    tagline: 'Measurable Value',
    description: 'Delivering tangible operational results, cost optimization, and enduring business transformation in every project.',
    image: aboutTeam,
    icon: Target
  },
  {
    title: 'Integrity',
    tagline: 'Uncompromising Ethics',
    description: 'Upholding absolute transparency, rigorous accountability, and ethical governance across every stage of engagement.',
    image: process1,
    icon: ShieldCheck
  }
]

const ValuesSection = () => {
  return (
    <section id="values" className="relative bg-[#FAF5EE] py-20 lg:py-28 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C88D2B]">
            OUR VALUES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B132B]">
            THE PRINCIPLES THAT GUIDE OUR ACTIONS
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Rooted in excellence and driven by purpose to deliver exceptional outcomes.
          </p>
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val) => {
            const Icon = val.icon
            return (
              <div key={val.title} className="bg-white rounded-2xl p-6 shadow-md border border-amber-200/70 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-5 group">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 shadow-inner border border-gray-100">
                  <img src={val.image} alt={val.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#1C1E3D]/20" />
                  <div className="absolute bottom-1 right-1 p-1 bg-[#C88D2B] text-white rounded-md">
                    <Icon size={12} />
                  </div>
                </div>

                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B132B] uppercase tracking-tight group-hover:text-[#C88D2B] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#C88D2B] uppercase tracking-wider">
                    {val.tagline}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed pt-1">
                    {val.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ValuesSection

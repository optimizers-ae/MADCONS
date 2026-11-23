import { MessageSquare, Award, CheckCircle, Users } from 'lucide-react'

const commitments = [
  {
    id: 1,
    title: 'Clear & Accountable Communication',
    subtitle: 'Transparent Reporting',
    description: 'Real-time progress reporting, dedicated single point of contact, and open communication channels keep you informed at every milestone.',
    icon: MessageSquare
  },
  {
    id: 2,
    title: 'Result-Driven Approach',
    subtitle: 'Targeted Outcomes',
    description: 'Every phase is aligned with defined key performance indicators, maximizing your return on investment and business value.',
    icon: Award
  },
  {
    id: 3,
    title: 'Predictable Performance',
    subtitle: 'Disciplined Governance',
    description: 'Proactive risk mitigation protocols, precise cost tracking, and schedule adherence guarantee predictable project delivery.',
    icon: CheckCircle
  },
  {
    id: 4,
    title: 'Dedicated Partnership',
    subtitle: 'Collaborative Mindset',
    description: 'We act as an integrated extension of your leadership team, passionately invested in the long-term success of your vision.',
    icon: Users
  }
]

const CommitmentSection = () => {
  return (
    <section className="relative bg-[#1C1E3D] py-20 lg:py-28 text-white overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#C88D2B]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#2C3066]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C88D2B]">
            WHAT YOU CAN EXPECT
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            OUR COMMITMENT TO YOU
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Excellence, transparency, and measurable results at every step of your project journey.
          </p>
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((card) => {
            const IconComponent = card.icon
            return (
              <div key={card.id} className="bg-white rounded-2xl p-6 sm:p-7 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group border border-amber-100">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#FAF3E8] border border-[#C88D2B]/40 flex items-center justify-center text-[#C88D2B] group-hover:bg-[#C88D2B] group-hover:text-white transition-all shadow-sm">
                    <IconComponent size={22} />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-[#0B132B] uppercase tracking-tight leading-snug group-hover:text-[#C88D2B] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#C88D2B] uppercase tracking-wider mt-1">
                      {card.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Pillar 0{card.id}</span>
                  <span className="w-2 h-2 rounded-full bg-[#C88D2B]" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center items-center gap-2 pt-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C88D2B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
        </div>
      </div>
    </section>
  )
}

export default CommitmentSection

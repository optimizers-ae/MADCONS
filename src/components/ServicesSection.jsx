import { useState } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'
import { contractMgmt, workStrategicPlan, workLogistics, workIndustrial } from '../utils/assets'

const servicesData = [
  {
    id: 1,
    title: 'PROJECT & CONTRACT MANAGEMENT',
    subtitle: 'Navigating complex contracts and project scopes requires meticulous oversight, contract administration, and disciplined governance to safeguard investments.',
    image: contractMgmt,
    points: [
      'Strategic Scope & Feasibility Planning',
      'Vendor Selection, Bidding & Contract Administration',
      'Budgeting, Cashflow Forecast & Value Engineering',
      'Quality Assurance & Timely Delivery Protocol',
      'Dispute Resolution & Contract Compliance'
    ]
  },
  {
    id: 2,
    title: 'RISK & COMPLIANCE GOVERNANCE',
    subtitle: 'Mitigating potential bottlenecks before they materialize through systematic threat modeling, compliance audits, and proactive contingency roadmaps.',
    image: workStrategicPlan,
    points: [
      'Comprehensive Risk Assessment Matrix',
      'Regulatory & Environmental Compliance Auditing',
      'Milestone Verification & Stage-Gate Reviews',
      'Stakeholder Alignment & Escalation Management',
      'Post-Project Performance Review & Handover'
    ]
  },
  {
    id: 3,
    title: 'SUPPLY CHAIN & LOGISTICS OVERSIGHT',
    subtitle: 'Synchronizing supply chains, material procurement, and warehouse logistics to maintain rigorous timelines without cost overruns.',
    image: workLogistics,
    points: [
      'Global Procurement & Vendor Coordination',
      'Inventory Logistics & Delivery Tracking',
      'Lean Resource Allocation & Bottleneck Removal',
      'Warehouse Operations Modernization',
      'On-site Material Inspection & Acceptance'
    ]
  },
  {
    id: 4,
    title: 'ENGINEERING & TURNKEY SUPERVISION',
    subtitle: 'Field-level engineering coordination and construction supervision ensuring structural integrity, safety standards, and exact architectural specifications.',
    image: workIndustrial,
    points: [
      'On-Site Construction & Engineering Supervision',
      'Contractor Performance & Health & Safety Audits',
      'Architectural & Engineering Change Control',
      'Testing, Commissioning & Handover Protocols',
      'Defect Liability Management'
    ]
  }
]

const ServicesSection = ({ onOpenContact }) => {
  const [currentIdx, setCurrentIdx] = useState(0)

  const prevService = () => setCurrentIdx((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1))
  const nextService = () => setCurrentIdx((prev) => (prev === 0 ? 1 : (prev + 1) % servicesData.length))

  const current = servicesData[currentIdx]

  return (
    <section id="services" className="relative bg-[#1C1E3D] text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#2C3066]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#C88D2B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C88D2B]">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            COMPREHENSIVE PROJECT MANAGEMENT SOLUTIONS TAILORED TO YOUR GOALS
          </h2>
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </div>

        <div className="relative bg-[#FAF3E8] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 text-gray-800 shadow-2xl border border-amber-200/50">
          <button onClick={prevService} className="cursor-pointer absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C88D2B] text-white flex items-center justify-center shadow-lg hover:bg-[#D49B28] hover:scale-105 transition-all z-20" aria-label="Previous service">
            <ChevronLeft size={22} />
          </button>
          <button onClick={nextService} className="cursor-pointer absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C88D2B] text-white flex items-center justify-center shadow-lg hover:bg-[#D49B28] hover:scale-105 transition-all z-20" aria-label="Next service">
            <ChevronRight size={22} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-amber-900/10 h-64 sm:h-80 md:h-96">
                <img src={current.image} alt={current.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C1E3D]/80 backdrop-blur-sm rounded-full text-xs font-semibold text-[#DFB15B] uppercase tracking-wider">
                  Service 0{current.id} / 0{servicesData.length}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-[#0B132B] tracking-tight">
                {current.title}
              </h3>
              
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {current.subtitle}
              </p>

              <div className="space-y-2.5 pt-1">
                {current.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-[#C88D2B] shrink-0 mt-0.5" size={17} />
                    <span className="text-xs sm:text-sm font-medium text-gray-800">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button onClick={onOpenContact} className="cursor-pointer px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#1C1E3D] text-white hover:bg-[#C88D2B] hover:text-[#1C1E3D] transition-all duration-300 shadow-md flex items-center gap-2">
                  <span>Enquire About This Service</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 pt-8 mt-2">
            {servicesData.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentIdx(idx)} className={`cursor-pointer transition-all ${idx === currentIdx ? 'w-8 h-2 bg-[#C88D2B] rounded-full' : 'w-2 h-2 bg-gray-400/60 rounded-full hover:bg-gray-600'}`} aria-label={`Go to service ${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

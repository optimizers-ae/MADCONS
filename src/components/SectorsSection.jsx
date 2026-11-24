import { useState } from 'react'
import {
  sectorsLab,
  iconHealth, iconRetail, iconTech, iconConstruction, iconLogistics,
  iconEnergy, iconFinance, iconPackaging, iconCosmetics, iconGov, iconEducation
} from '../utils/assets'

const sectors = [
  { name: 'Healthcare & Pharma', icon: iconHealth, desc: 'Hospitals, medical labs, pharmaceutical manufacturing & biotechnology facilities.' },
  { name: 'Retail & E-Commerce', icon: iconRetail, desc: 'Omnichannel retail centers, high-volume warehouses & commercial spaces.' },
  { name: 'Information Technology', icon: iconTech, desc: 'Data centers, cloud infrastructure, network migrations & software deployments.' },
  { name: 'Construction & Real Estate', icon: iconConstruction, desc: 'Commercial developments, residential complexes & turnkey civil construction.' },
  { name: 'Logistics & Supply Chain', icon: iconLogistics, desc: 'Automated hubs, freight networks, cold chain facilities & distribution terminals.' },
  { name: 'Energy & Utilities', icon: iconEnergy, desc: 'Power generation, renewable solar farms, water networks & substation infrastructure.' },
  { name: 'Financial Services', icon: iconFinance, desc: 'Banking HQ rollouts, fintech infrastructure, branch networks & trading facilities.' },
  { name: 'Packaging & Manufacturing', icon: iconPackaging, desc: 'Industrial processing plants, automated packaging lines & assembly facilities.' },
  { name: 'Cosmetics & FMCG', icon: iconCosmetics, desc: 'Consumer goods production, clean-room cosmetics plants & distribution networks.' },
  { name: 'Corporate & Government', icon: iconGov, desc: 'Government ministries, municipal infrastructure & institutional facilities.' },
  { name: 'Education & Training', icon: iconEducation, desc: 'University campuses, research institutions, schools & specialized academies.' },
]

const SectorsSection = () => {
  const [selectedSector, setSelectedSector] = useState(sectors[0])

  return (
    <section id="sectors" className="relative bg-white py-20 lg:py-28 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
              <img src={sectorsLab} alt="Industries We Serve - Healthcare & Laboratories" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E3D]/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 left-4 sm:left-6 bg-[#1C1E3D] text-white px-5 py-3 rounded-xl shadow-xl border-l-4 border-[#C88D2B]">
              <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">Multi-Industry Acumen</p>
              <p className="text-sm font-bold text-gray-200">11+ Specialized Sectors</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C88D2B]">
                SECTOR COVERED
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B132B]">
                INDUSTRIES WE SERVE
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our multidisciplinary consultants provide targeted project governance across a wide spectrum of mission-critical commercial and industrial domains.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {sectors.map((sec) => {
                const isSelected = selectedSector.name === sec.name
                return (
                  <button key={sec.name} onClick={() => setSelectedSector(sec)} className={`cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${isSelected ? 'bg-[#C88D2B] text-white border-[#C88D2B] shadow-md scale-105' : 'bg-[#FAF6F0] text-gray-800 border-amber-200/80 hover:bg-[#F3E7D3] hover:border-[#C88D2B]/50'}`}>
                    <img src={sec.icon} alt="" className="w-4 h-4 object-contain shrink-0" />
                    <span>{sec.name}</span>
                  </button>
                )
              })}
            </div>

          
          </div>
        </div>

      </div>
    </section>
  )
}

export default SectorsSection

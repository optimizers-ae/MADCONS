import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5
} from '../utils/assets'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Al-Mansoor',
    role: 'VP of Operations',
    company: 'Gulf Logistics Group',
    avatar: testimonial1,
    quote: 'Madaarij brought exceptional clarity and rigor to our complex multi-site deployment. Their risk mitigation strategies saved us months of potential delays and safeguarded our budget.',
    rating: 5,
    region: 'GCC Region'
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Chief Strategy Officer',
    company: 'NexaTech Global',
    avatar: testimonial2,
    quote: 'The professionalism, governance, and contract management expertise provided by Madaarij exceeded our highest expectations. They are truly an indispensable strategic partner.',
    rating: 5,
    region: 'GCC Region'
  },
  {
    id: 3,
    name: 'Marcus Vance',
    role: 'Director of Infrastructure',
    company: 'Horizon Holdings',
    avatar: testimonial3,
    quote: 'Working with Madaarij transformed how we approach capital projects. Their structured oversight delivered our flagship facility ahead of schedule and significantly under projected costs.',
    rating: 5,
    region: 'GCC Region'
  },
  {
    id: 4,
    name: 'Tariq Al-Husseini',
    role: 'Managing Director',
    company: 'Apex Capital Partners',
    avatar: testimonial4,
    quote: 'MADAARIJ transformed our operational readiness ahead of market expansion. Their administrative studies and workflow restructuring yielded a 35% gain in process efficiency.',
    rating: 5,
    region: 'UAE & KSA'
  },
  {
    id: 5,
    name: 'Dr. Fatima Al-Zahrani',
    role: 'Head of Strategic Procurement',
    company: 'Al-Manar Healthcare',
    avatar: testimonial5,
    quote: 'Their strategic procurement advisory eliminated critical supply chain bottlenecks. MADAARIJ delivers unmatched strategic insight, precision, and measurable execution.',
    rating: 5,
    region: 'Middle East'
  }
]

// Extended with trailing wrap-around copies for seamless multi-item sliding
const displayList = [
  ...testimonials,
  ...testimonials
]

const TestimonialsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(3)

  // Track responsive screen width for exact sliding percentage
  useEffect(() => {
    const updateItems = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) setItemsPerView(3)
        else if (window.innerWidth >= 768) setItemsPerView(2)
        else setItemsPerView(1)
      }
    }
    updateItems()
    window.addEventListener('resize', updateItems)
    return () => window.removeEventListener('resize', updateItems)
  }, [])

  // Auto-sliding interval: advances every 3.8s, pauses on hover / touch
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length)
    }, 3800)

    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EA] to-[#F5ECE0] py-20 lg:py-28 text-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C88D2B]">
            OUR TESTIMONIALS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B132B]">
            WHAT PEOPLE SAY
          </h2>
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </div>

        {/* Carousel Slider with CSS Transform & Pause-on-Hover */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Viewport Mask */}
          <div className="overflow-hidden py-3">
            <div
              className="flex transition-transform duration-700 ease-out will-change-transform"
              style={{
                transform: `translateX(-${activeIdx * (100 / itemsPerView)}%)`
              }}
            >
              {displayList.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  style={{ width: `${100 / itemsPerView}%` }}
                  className="shrink-0 p-2.5 sm:p-3"
                >
                  <div className="bg-white rounded-2xl p-7 shadow-lg border border-amber-200/70 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full relative group select-none">
                    
                    <div className="absolute top-6 right-6 text-amber-200 group-hover:text-[#C88D2B]/30 transition-colors">
                      <Quote size={28} />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C88D2B] p-0.5 shadow-md shrink-0">
                          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#0B132B] uppercase">
                            {t.name}
                          </h3>
                          <p className="text-[11px] text-[#C88D2B] font-semibold">
                            {t.role}
                          </p>
                          <p className="text-[10px] text-gray-500 uppercase">
                            {t.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="#F59E0B" className="text-amber-400" />
                        ))}
                      </div>

                      <p className="text-xs text-gray-600 leading-relaxed italic">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                      <span>Verified Client</span>
                      <span className="text-[#C88D2B] font-semibold">{t.region}</span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Pagination Controls Only (Arrows Completely Removed) */}
          <div className="flex justify-center items-center gap-2.5 pt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`cursor-pointer transition-all duration-300 ${
                  idx === activeIdx
                    ? 'w-7 h-2.5 bg-[#C88D2B] rounded-full shadow-sm'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 rounded-full'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection

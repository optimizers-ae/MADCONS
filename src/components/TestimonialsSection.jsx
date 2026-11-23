import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonial1, testimonial2, testimonial3 } from '../utils/assets'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Al-Mansoor',
    role: 'VP of Operations',
    company: 'Gulf Logistics Group',
    avatar: testimonial1,
    quote: 'Madaarij brought exceptional clarity and rigor to our complex multi-site deployment. Their risk mitigation strategies saved us months of potential delays and safeguarded our budget.',
    rating: 5
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Chief Strategy Officer',
    company: 'NexaTech Global',
    avatar: testimonial2,
    quote: 'The professionalism, governance, and contract management expertise provided by Madaarij exceeded our highest expectations. They are truly an indispensable strategic partner.',
    rating: 5
  },
  {
    id: 3,
    name: 'Marcus Vance',
    role: 'Director of Infrastructure',
    company: 'Horizon Holdings',
    avatar: testimonial3,
    quote: 'Working with Madaarij transformed how we approach capital projects. Their structured oversight delivered our flagship facility ahead of schedule and significantly under projected costs.',
    rating: 5
  }
]

const TestimonialsSection = () => {
  const [, setActiveIdx] = useState(0)

  const handlePrev = () => setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  const handleNext = () => setActiveIdx((prev) => (prev + 1) % testimonials.length)

  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EA] to-[#F5ECE0] py-20 lg:py-28 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C88D2B]">
            OUR TESTIMONIALS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#0B132B]">
            WHAT PEOPLE SAY
          </h2>
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-7 shadow-lg border border-amber-200/70 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative group">
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
                <span className="text-[#C88D2B] font-semibold">GCC Region</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 pt-10">
          <button onClick={handlePrev} className="cursor-pointer w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-[#C88D2B] hover:text-white transition-all flex items-center justify-center shadow-sm">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C88D2B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
          <button onClick={handleNext} className="cursor-pointer w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-[#C88D2B] hover:text-white transition-all flex items-center justify-center shadow-sm">
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection

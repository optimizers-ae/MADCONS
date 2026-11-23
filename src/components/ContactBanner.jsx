import { PhoneCall } from 'lucide-react'

const ContactBanner = ({ onOpenContact }) => {
  return (
    <section className="relative bg-[#FAF5EE] py-10 border-t border-b border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-extrabold uppercase text-[#0B132B] tracking-tight">
              CONNECT WITH US
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Have a project in mind? Let's build something extraordinary together.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={onOpenContact} className="cursor-pointer px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#1C1E3D] text-white hover:bg-[#C88D2B] hover:text-[#1C1E3D] transition-all duration-300 shadow-md flex items-center gap-2">
              <PhoneCall size={15} />
              <span>GET IN TOUCH</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactBanner

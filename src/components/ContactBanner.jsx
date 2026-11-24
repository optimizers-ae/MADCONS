import { useState } from 'react'
import { Mail, Phone, MapPin, Building2, Send, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react'

const ContactBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3500)
  }

  return (
    <section id="contact" className="relative bg-[#FAF5EE] py-20 lg:py-28 text-gray-800 overflow-hidden border-t border-amber-200/60">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C88D2B]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#1C1E3D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C88D2B]/15 border border-[#C88D2B]/40 text-[#C88D2B] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
            <MessageSquare size={13} className="text-[#C88D2B]" />
            <span>06. CONTACT — START A CONVERSATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B132B] leading-tight">
            EVERY CHALLENGE IS AN OPPORTUNITY.
            <span className="block text-[#C88D2B] mt-1">
              EVERY OPPORTUNITY BEGINS WITH A CONVERSATION.
            </span>
          </h2>
          
          <div className="w-16 h-1 bg-[#C88D2B] mx-auto rounded-full mt-2" />
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Copy & Official Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The Provocative Opening */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-black uppercase text-[#0B132B] tracking-tight">
                Have a challenge? An idea? An ambitious project?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Whether you are looking to improve efficiency, strengthen procurement, manage projects, or rethink your operations, we are ready to explore the right solutions with you.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We welcome the opportunity to understand your objectives, explore possibilities, and support your next business initiative.
              </p>
              <p className="text-base sm:text-lg font-bold text-[#C88D2B] pt-1">
                Let's talk about possibilities.
              </p>
            </div>

            {/* Signature Tagline Callout */}
            {/* <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#1C1E3D] via-[#242854] to-[#1C1E3D] text-white border-l-4 border-[#C88D2B] shadow-xl">
              <p className="text-xs sm:text-sm font-black tracking-widest uppercase text-amber-200">
                LET'S MOVE FORWARD .. LET'S CREATE SOMETHING BETTER
              </p>
            </div> */}

            {/* Official Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              
              {/* Company Name */}
              <div className="p-4 rounded-xl bg-white border border-amber-200/70 shadow-sm flex items-start gap-3.5 hover:border-[#C88D2B] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#FAF3E8] border border-[#C88D2B]/30 flex items-center justify-center text-[#C88D2B] shrink-0">
                  <Building2 size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    COMPANY NAME
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#0B132B]">
                    MADAARIJ <span className="text-[#C88D2B] font-medium">Consulting & Advisory</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:connect@madcons.com"
                className="p-4 rounded-xl bg-white border border-amber-200/70 shadow-sm flex items-start gap-3.5 hover:border-[#C88D2B] hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF3E8] border border-[#C88D2B]/30 flex items-center justify-center text-[#C88D2B] shrink-0 group-hover:bg-[#C88D2B] group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    EMAIL
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#0B132B] group-hover:text-[#C88D2B] transition-colors">
                    connect@madcons.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-white border border-amber-200/70 shadow-sm flex items-start gap-3.5 hover:border-[#C88D2B] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#FAF3E8] border border-[#C88D2B]/30 flex items-center justify-center text-[#C88D2B] shrink-0">
                  <Phone size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    PHONE
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#0B132B]">
                    [Your Telephone Number]
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-white border border-amber-200/70 shadow-sm flex items-start gap-3.5 hover:border-[#C88D2B] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#FAF3E8] border border-[#C88D2B]/30 flex items-center justify-center text-[#C88D2B] shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    LOCATION
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#0B132B]">
                    We are in the UAE.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Consultation Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-amber-200/70">
              
              <div className="space-y-1 pb-4 border-b border-gray-100">
                <p className="text-xs font-bold text-[#C88D2B] uppercase tracking-widest">
                  DIRECT INQUIRY
                </p>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B132B] tracking-tight">
                  Send A Direct Message
                </h3>
                <p className="text-xs text-gray-600">
                  Fill in your details below and our advisory consultants will get in touch promptly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#C88D2B]/20 text-[#C88D2B] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B132B] uppercase">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you for connecting with MADAARIJ Consulting & Advisory. We will reply to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abdullah Al-Mansoor"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#C88D2B] focus:ring-2 focus:ring-[#C88D2B]/20 transition-all bg-[#FAF8F5]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.ae"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#C88D2B] focus:ring-2 focus:ring-[#C88D2B]/20 transition-all bg-[#FAF8F5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +971 50 123 4567"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#C88D2B] focus:ring-2 focus:ring-[#C88D2B]/20 transition-all bg-[#FAF8F5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Your Message / Challenge *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your challenge, idea, or ambitious project..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#C88D2B] focus:ring-2 focus:ring-[#C88D2B]/20 transition-all bg-[#FAF8F5] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="cursor-pointer w-full sm:w-auto px-7 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#1C1E3D] text-white hover:bg-[#C88D2B] hover:text-[#1C1E3D] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
                    >
                      <span>SEND INQUIRY</span>
                      <Send size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>

                    <a
                      href="mailto:connect@madcons.com"
                      className="cursor-pointer text-xs font-bold text-[#C88D2B] hover:text-[#0B132B] transition-colors flex items-center gap-1.5 py-2 px-3"
                    >
                      <span>Or Email Us Directly</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactBanner

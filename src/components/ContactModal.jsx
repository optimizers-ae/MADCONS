import { useState } from 'react'
import { X, CheckCircle, Send } from 'lucide-react'

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Project & Contract Management',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
      setFormData({ name: '', email: '', phone: '', service: 'Project & Contract Management', message: '' })
    }, 2200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#1C1E3D] text-white rounded-3xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-2xl">
        
        <button onClick={onClose} className="cursor-pointer absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800 transition-colors" aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#C88D2B]/20 text-[#C88D2B] flex items-center justify-center mx-auto">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-xl font-bold uppercase text-white">Inquiry Received!</h3>
            <p className="text-sm text-gray-300 max-w-xs mx-auto">
              Thank you for reaching out to Madaarij. Our principal consultant will contact you within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C88D2B]">
                GET IN TOUCH
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white">
                Request A Consultation
              </h3>
              <p className="text-xs text-gray-400">
                Speak directly with our senior project management consultants.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Full Name *</label>
                <input required type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-[#252852] border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email *</label>
                  <input required type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-[#252852] border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number</label>
                  <input type="tel" placeholder="+966 50 123 4567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-[#252852] border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Service Interest</label>
                <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-[#252852] border border-gray-700 text-sm text-white focus:outline-none focus:border-[#C5A059]">
                  <option value="Project & Contract Management">Project & Contract Management</option>
                  <option value="Risk & Compliance Governance">Risk & Compliance Governance</option>
                  <option value="Supply Chain & Logistics Oversight">Supply Chain & Logistics Oversight</option>
                  <option value="Engineering & Turnkey Supervision">Engineering & Turnkey Supervision</option>
                  <option value="General Enterprise Consultation">General Enterprise Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Project Details / Message *</label>
                <textarea required rows={3} placeholder="Please describe your project scope and objectives..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl bg-[#252852] border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]" />
              </div>
            </div>

            <button type="submit" className="cursor-pointer w-full py-3 rounded-xl bg-[#C88D2B] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#D49B28] transition-all shadow-lg flex items-center justify-center gap-2 mt-4">
              <Send size={15} />
              <span>Submit Consultation Request</span>
            </button>
          </form>
        )}

      </div>
    </div>
  )
}

export default ContactModal

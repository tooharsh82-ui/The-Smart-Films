import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Phone, MapPin, Send, CheckCircle2, MessageSquare, Star, Sparkles, X, Calendar } from 'lucide-react';
import { SMART_FILMS_PROFILE } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { BUSINESS_CONFIG, getContactFormWhatsAppUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function DarkFooterCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    eventType: 'Wedding Photography',
    preferredDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // Generate real WhatsApp inquiry URL with pre-filled, URL-encoded details
    const whatsappUrl = getContactFormWhatsAppUrl(formData);
    
    // Open WhatsApp in a new tab/app window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        phone: '',
        eventType: 'Wedding Photography',
        preferredDate: '',
        message: '',
      });
    }, 2800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generalWhatsApp = getWhatsAppUrl();

  return (
    <footer id="contact" className="bg-[#1C2431] text-slate-300 relative overflow-hidden scroll-mt-10">
      
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#8CE828]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Call To Action Block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center relative z-10">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#253142] border border-slate-700/60 text-xs font-semibold text-[#8CE828] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch with The Smart Films</span>
        </div>

        {/* Big Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Planning a Wedding or Special Event? <br />
          <span className="text-[#8CE828]">Let's create cinematic memories together!</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The Smart Films (Smart Studio) is available for weddings, pre-wedding stories, bridal portraits, and 4K cinematic films across Arrah, Bhojpur, and Bihar.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            id="footer-lets-work-btn"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#8CE828] hover:bg-[#7BD71B] text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-lime-500/10 hover:shadow-lime-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Book / Enquire Now</span>
            <Send className="w-4 h-4" />
          </button>

          <a
            href={generalWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-whatsapp-chat-btn"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#253142] hover:bg-[#2F3E54] text-white font-semibold text-sm sm:text-base border border-slate-700/80 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-[#8CE828]" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={BUSINESS_CONFIG.phoneTel}
            id="footer-call-btn"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#253142] hover:bg-[#2F3E54] text-white font-semibold text-sm sm:text-base border border-slate-700/80 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#8CE828]" />
            <span>Call 082106 11923</span>
          </a>
        </div>

        {/* Contact Info Pills */}
        <div className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <Phone className="w-5 h-5 text-[#8CE828] mb-2" />
            <span className="text-xs text-slate-400">Phone &amp; WhatsApp</span>
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="text-white font-medium hover:text-[#8CE828] mt-0.5 transition-colors"
            >
              {BUSINESS_CONFIG.phoneDisplay}
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <MapPin className="w-5 h-5 text-[#8CE828] mb-2" />
            <span className="text-xs text-slate-400">Studio Address</span>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#8CE828] mt-0.5 transition-colors text-center text-xs leading-relaxed"
            >
              {BUSINESS_CONFIG.address.full}
            </a>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#8CE828] hover:underline mt-1 font-semibold"
            >
              Get Directions &rarr;
            </a>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center">
            <Star className="w-5 h-5 text-[#8CE828] fill-[#8CE828] mb-2" />
            <span className="text-xs text-slate-400">Studio Rating</span>
            <span className="text-white font-medium mt-0.5">
              {BUSINESS_CONFIG.rating} / {BUSINESS_CONFIG.ratingMax} ({BUSINESS_CONFIG.reviewCount} Reviews)
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-slate-800/80 bg-[#161D27] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <span className="text-lg font-black text-white tracking-tight">{SMART_FILMS_PROFILE.name}</span>
            <span className="hidden sm:inline text-xs text-slate-500">·</span>
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} The Smart Films (Smart Studio). All rights reserved.
            </p>
          </div>

          {/* Verified Contact Quick Links */}
          <div className="flex items-center gap-3">
            <a
              href={generalWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#8CE828] hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all"
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#8CE828] hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all"
              aria-label="Call Phone"
              title="Call The Smart Films"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#8CE828] hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all"
              aria-label="Google Maps Location"
              title="Get Directions"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>

          {/* Smooth Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-[#8CE828] hover:text-slate-950 text-xs text-slate-300 font-semibold transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>

      {/* Interactive Project Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#222B3A] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-700 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold text-[#8CE828] uppercase tracking-wider">Book Consultation</span>
                <h3 className="text-2xl font-bold text-white mt-1">Enquire with The Smart Films</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Share your event details and preferred date. We will connect with you via WhatsApp instantly.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#1C2431] border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#8CE828] mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Opening WhatsApp...</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your pre-filled enquiry has been prepared. We look forward to capturing your special moments!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#18202C] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#8CE828] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082106 11923"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#18202C] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#8CE828] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Event Type</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#18202C] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#8CE828] transition-colors"
                      >
                        <option value="Wedding Photography">Wedding Photography</option>
                        <option value="Cinematic Videography">Cinematic Videography</option>
                        <option value="Bridal & Groom Portraits">Bridal &amp; Groom Portraits</option>
                        <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                        <option value="Couple Portraits">Couple Portraits</option>
                        <option value="Maternity Photography">Maternity Photography</option>
                        <option value="Event / Celebration">Event / Celebration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#8CE828]" />
                        <span>Preferred Date</span>
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-[#18202C] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#8CE828] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message / Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Share details about your venue, functions, or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#18202C] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#8CE828] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#8CE828] hover:bg-[#7BD71B] text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                      <span>Send Enquiry via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}

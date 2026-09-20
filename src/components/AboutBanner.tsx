import { motion } from 'motion/react';
import { MessageSquare, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SMART_FILMS_PROFILE } from '../data/portfolioData';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../utils/whatsapp';

export default function AboutBanner() {
  const generalWhatsApp = getWhatsAppUrl();

  return (
    <section id="about" className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-12 mb-20 sm:mb-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-md border border-slate-100/90 transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Portrait Card with Floating Contact Pill */}
            <div className="md:col-span-5 flex flex-col items-center">
              {/* Photo Box */}
              <div className="w-full max-w-[240px] sm:max-w-[270px] bg-[#E9F8D6] rounded-2xl p-2.5 overflow-hidden shadow-xs border border-[#D5EFA9]">
                <div className="rounded-xl overflow-hidden aspect-[4/5] bg-[#D7F3B6]">
                  <img
                    src={SMART_FILMS_PROFILE.aboutImg}
                    alt="The Smart Films Studio Portrait"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Floating Verified Contact Pill Bar (WhatsApp, Call, Directions) */}
              <div className="mt-3.5 bg-white shadow-md border border-slate-100/90 rounded-full px-4 py-2 flex items-center gap-3.5">
                {/* WhatsApp */}
                <a
                  href={generalWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Enquire on WhatsApp"
                  title="WhatsApp The Smart Films"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                </a>

                {/* Direct Call */}
                <a
                  href={BUSINESS_CONFIG.phoneTel}
                  className="w-8 h-8 rounded-full bg-lime-50 text-lime-700 hover:bg-[#8CE828] hover:text-slate-950 flex items-center justify-center transition-colors"
                  aria-label="Call The Smart Films"
                  title="Call 082106 11923"
                >
                  <Phone className="w-4 h-4 fill-current" />
                </a>

                {/* Google Maps Directions */}
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Get Directions to Smart Gift & Studio Arrah"
                  title="Get Directions"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Heading, Text & Action Buttons */}
            <div className="md:col-span-7 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {SMART_FILMS_PROFILE.aboutHeading}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {SMART_FILMS_PROFILE.aboutBio}
              </p>

              {/* Skill Pill Badges */}
              <div className="pt-1 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F3FBEC] border border-[#D8F0B8] text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#65B512]" />
                  <span>Cinematic Videography</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F3FBEC] border border-[#D8F0B8] text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#65B512]" />
                  <span>Candid Photography</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F3FBEC] border border-[#D8F0B8] text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#65B512]" />
                  <span>Weddings & Celebrations</span>
                </span>
              </div>

              {/* Action Buttons: Our Portfolio & Get Directions */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="#portfolio"
                  id="about-my-projects-btn"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#8CE828] hover:bg-[#7BD71B] text-slate-950 font-semibold text-sm shadow-xs hover:shadow-sm active:scale-95 transition-all duration-200"
                >
                  <span>Our Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-get-directions-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-transparent hover:bg-slate-100 text-slate-800 font-medium text-sm border border-slate-200 transition-all duration-200"
                >
                  <MapPin className="w-4 h-4 text-[#58A50B]" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

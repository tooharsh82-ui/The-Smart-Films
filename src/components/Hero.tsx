import { motion } from 'motion/react';
import { ArrowRight, Star, MessageSquare } from 'lucide-react';
import { SMART_FILMS_PROFILE } from '../data/portfolioData';
import { getWhatsAppUrl, BUSINESS_CONFIG } from '../utils/whatsapp';

export default function Hero() {
  const generalWhatsApp = getWhatsAppUrl();

  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#EBF9DC] via-[#F4FCEB] to-[#F7FCF2]"
    >
      {/* Subtle Background Glow Rings */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-[#D7F5A8]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#E3F9BE]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 max-w-2xl"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D8F0B2] text-xs font-semibold text-slate-700 mb-6 shadow-xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#8CE828] animate-pulse" />
              <div className="flex items-center gap-1 text-[#488E07]">
                <Star className="w-3.5 h-3.5 fill-[#8CE828] text-[#8CE828]" />
                <span className="font-bold">{BUSINESS_CONFIG.rating} / {BUSINESS_CONFIG.ratingMax}</span>
              </div>
              <span className="text-slate-400">·</span>
              <span>{BUSINESS_CONFIG.reviewCount} Reviews</span>
              <span className="text-slate-400">·</span>
              <span>Arrah, Bihar</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Hello , We're <br />
              <span className="text-slate-900">{SMART_FILMS_PROFILE.name}</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {SMART_FILMS_PROFILE.bio}
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={generalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#8CE828] hover:bg-[#7BD71B] text-slate-950 font-semibold text-sm sm:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                id="hero-view-work-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 font-medium text-sm sm:text-base border border-slate-200/80 hover:border-slate-300 shadow-xs transition-all duration-200"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick stats counter */}
            <div className="mt-12 pt-8 border-t border-[#DFEFCE] grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">{BUSINESS_CONFIG.rating} / 5</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Rating Score</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">{BUSINESS_CONFIG.reviewCount}</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Verified Reviews</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">Arrah</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Bihar, India</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Photography Showcase Card in Exact Layout Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Outer Decorative Shape */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D1F2A5] to-[#EAFADB] rounded-[2.5rem] blur-xs -rotate-1 opacity-70" />
              
              {/* Main Photo Container */}
              <div className="relative rounded-[2.5rem] bg-[#E1F7C5] p-2.5 sm:p-3 shadow-md border border-[#D5EFA9] overflow-hidden">
                <div className="rounded-[2.2rem] overflow-hidden bg-gradient-to-b from-[#E7F8CE] to-[#DAF3B9] aspect-[4/5] flex items-center justify-center">
                  <img
                    src={SMART_FILMS_PROFILE.portraitImg}
                    alt="The Smart Films - Photography and Cinematic Videography Studio in Arrah"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Star, MessageSquare, CheckCircle2 } from 'lucide-react';
import { REAL_REVIEWS } from '../data/portfolioData';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../utils/whatsapp';

export default function BlogSection() {
  const generalWhatsApp = getWhatsAppUrl();

  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F6FBEE] to-[#EDF9DF] scroll-mt-20">
      {/* Invisible anchor for backward compatibility if any link points to #blog */}
      <div id="blog" className="sr-only" />
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D7F2B3] text-xs font-semibold text-slate-800 mb-3 shadow-2xs">
              <Star className="w-3.5 h-3.5 fill-[#8CE828] text-[#8CE828]" />
              <span>{BUSINESS_CONFIG.rating} / 5 Rating · {BUSINESS_CONFIG.reviewCount} Verified Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Client Experiences &amp; Reviews
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-600 font-normal">
            Real feedback and impressions from clients across Arrah and Bhojpur who trusted The Smart Films (Smart Studio) with their most cherished memories.
          </p>
        </div>

        {/* 3 Review Cards Grid matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REAL_REVIEWS.map((review, idx) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-lg border border-slate-100 hover:border-[#D5EFA9] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#EDFADB] text-[#468C06] font-bold">
                    {review.location}
                  </span>
                  <div className="flex items-center gap-1 text-[#58A50B] font-semibold">
                    <Star className="w-3.5 h-3.5 fill-[#8CE828] text-[#8CE828]" />
                    <span>{BUSINESS_CONFIG.rating} / 5</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#468C06] transition-colors leading-snug">
                  "{review.highlight}"
                </h3>

                <blockquote className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{review.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1 text-[#58A50B] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Google Review</span>
                </div>
                <a
                  href={generalWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-slate-900 group-hover:text-[#468C06] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#58A50B] fill-current" />
                  <span>Enquire</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Camera, Sparkles, Heart, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function ServicesSection() {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#58A50B]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#58A50B]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#58A50B]" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-[#58A50B]" />;
      default:
        return <Camera className="w-6 h-6 text-[#58A50B]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F6FBEE] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D7F2B3] text-xs font-semibold text-slate-800 mb-3 shadow-2xs">
            <span>What We Offer</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Services & Packages
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Comprehensive photography and 4K cinematic videography tailored to weddings, bridal portraits, pre-weddings, and family celebrations in Arrah, Bihar.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {SERVICES.map((service, idx) => {
            const serviceWhatsAppUrl = getWhatsAppUrl(
              `Hi, I want to know more about The Smart Films ${service.title} services, pricing and packages.`
            );

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-xs hover:shadow-lg border border-slate-100/90 hover:border-[#D5EFA9] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-[#EDFADB] border border-[#DCF5B7] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#65B512] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#58A50B] transition-colors"
                  >
                    <span>Inquire Package on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#contact"
                    className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Book Consultation
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

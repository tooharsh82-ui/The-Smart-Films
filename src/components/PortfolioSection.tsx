import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, MessageSquare, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { getCategoryWhatsAppUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#F7FCF2] to-[#F1F9E8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D7F2B3] text-xs font-semibold text-slate-800 mb-3 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#58A50B]" />
            <span>Curated Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Portfolio
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            A showcase of royal bridal portraits, reception gowns, exquisite heritage jewelry, and candid wedding moments in Arrah, Bihar.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#8CE828] text-slate-950 shadow-xs scale-105'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Projects Grid for Curated Portfolio Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProjects.map((project, idx) => {
            const projectWhatsAppUrl = project.inquiryMessage
              ? getWhatsAppUrl(project.inquiryMessage)
              : getCategoryWhatsAppUrl(project.categoryKey);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-100/90 hover:border-[#D5EFA9] transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Project Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Quick View Button */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="p-3 rounded-full bg-white text-slate-900 shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
                      aria-label={`View details of ${project.title}`}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={projectWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#8CE828] text-slate-950 shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
                      aria-label={`Inquire about ${project.title} on WhatsApp`}
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950" />
                    </a>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-bold text-slate-800 shadow-2xs border border-slate-100">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#4A9306] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-1 text-xs font-semibold text-slate-500 line-clamp-1">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[#F4FBEF] border border-[#DCF5B7] text-[10px] font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={projectWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#58A50B] transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#58A50B] fill-current" />
                      <span>WhatsApp Inquiry</span>
                    </a>

                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="text-[11px] font-medium text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Case Study / Project Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
            >
              {/* Modal Image Header */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                <img
                  src={activeProjectModal.imageUrl}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-[#EDFADB] text-[#468C06] text-xs font-bold uppercase tracking-wider">
                    {activeProjectModal.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    {activeProjectModal.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 mt-0.5">
                    {activeProjectModal.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeProjectModal.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Highlights & Coverage
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Buttons */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                  <a
                    href={activeProjectModal.inquiryMessage ? getWhatsAppUrl(activeProjectModal.inquiryMessage) : getCategoryWhatsAppUrl(activeProjectModal.categoryKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#8CE828] hover:bg-[#7BD71B] text-slate-950 text-sm font-bold shadow-xs transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

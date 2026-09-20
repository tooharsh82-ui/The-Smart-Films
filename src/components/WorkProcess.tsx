import { motion } from 'motion/react';
import { Search, BarChart3, Palette, Rocket, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export default function WorkProcess() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSearch':
        return <Search className="w-5 h-5 text-[#58A50B]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#58A50B]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#58A50B]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#58A50B]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#58A50B]" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Philosophical Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF9DC] border border-[#D7F2B3] text-xs font-semibold text-slate-800">
              <span>Studio Process</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Work Process
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              From your initial consultation to final cinematic color grading, our structured studio workflow ensures every sacred ritual, candid smile, and grand celebration is captured flawlessly.
            </p>

            <blockquote className="p-5 rounded-2xl bg-white border-l-4 border-[#8CE828] border-y border-r border-slate-100 shadow-xs text-sm text-slate-700 italic font-medium">
              "Capturing authentic emotions, sacred rituals, and cinematic visual memories in Arrah, Bhojpur."
            </blockquote>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#58A50B] transition-colors"
              >
                <span>Planning an upcoming wedding or event?</span>
                <span className="underline font-bold">Let's discuss &rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of Process Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md border border-slate-100/90 hover:border-[#D5EFA9] transition-all duration-300 group hover:-translate-y-1"
                >
                  {/* Icon with lime background container */}
                  <div className="w-11 h-11 rounded-xl bg-[#EDFADB] border border-[#DCF5B7] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {getStepIcon(step.icon)}
                  </div>

                  {/* Title (e.g. 1.Research) */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-slate-950">
                    {step.step}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

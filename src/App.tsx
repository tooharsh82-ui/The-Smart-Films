import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBanner from './components/AboutBanner';
import WorkProcess from './components/WorkProcess';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import DarkFooterCTA from './components/DarkFooterCTA';
import FloatingChat from './components/FloatingChat';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Inject Schema.org LocalBusiness JSON-LD for The Smart Films SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'The Smart Films',
      alternateName: 'Smart Studio',
      description: 'Premier professional photography and cinematic videography studio in Arrah, Bihar specializing in wedding photography, bridal portraits, pre-wedding shoots, and 4K films.',
      url: window.location.origin,
      telephone: '+918210611923',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Smart Gift & Studio, Bandh, Majhauwa',
        addressLocality: 'Arrah',
        addressRegion: 'Bihar',
        postalCode: '802301',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.556,
        longitude: 84.6603,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        ratingCount: '10',
      },
      priceRange: '₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '21:00',
        },
      ],
      areaServed: [
        'Arrah',
        'Bhojpur',
        'Patna',
        'Bihar',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Photography and Videography Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wedding Photography & Videography',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cinematic Videography',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Bride & Groom Portrait Sessions',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pre-Wedding Photography',
            },
          },
        ],
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F6FBEE] text-slate-800 selection:bg-[#8CE828] selection:text-slate-950 font-sans antialiased relative">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#8CE828] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <AboutBanner />
        <WorkProcess />
        <PortfolioSection />
        <ServicesSection />
        <BlogSection />
        <DarkFooterCTA />
      </main>

      {/* Floating Quick Action */}
      <FloatingChat />
    </div>
  );
}

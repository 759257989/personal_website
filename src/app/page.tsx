'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import GamingGallerySection from '@/components/GamingGallerySection';

// Section divider component
const SectionDivider = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-16"
  />
);

// Animated section wrapper
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AnimatedSection>
          <HomeSection />
        </AnimatedSection>
        
        <SectionDivider />
        
        <AnimatedSection delay={0.1}>
          <ProjectsSection />
        </AnimatedSection>
        
        <SectionDivider />
        
        <AnimatedSection delay={0.2}>
          <BlogSection />
        </AnimatedSection>
        
        <SectionDivider />
        
        <AnimatedSection delay={0.3}>
          <GamingGallerySection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

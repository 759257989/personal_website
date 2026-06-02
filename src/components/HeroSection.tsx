'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Check, ArrowDown, FileDown } from 'lucide-react';

const EMAIL = 'wangyu7989@gmail.com';

const ROLES = ['Backend Systems', 'AI Applications', 'Full-Stack Apps', 'Distributed Systems'];

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1100;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setN(Math.round(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      /* no-op */
    }
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Parallax grid background */}
      <motion.div style={{ y: gridY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 arcade-grid opacity-60" />
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] animate-glowpulse"
          style={{ background: 'rgba(168, 85, 247, 0.22)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full blur-[130px] animate-glowpulse"
          style={{ background: 'rgba(34, 211, 238, 0.16)' }}
        />
        {/* horizon line */}
        <div className="absolute bottom-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container mx-auto px-4 py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 font-pixel text-[10px] text-success"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-blink" />
              PLAYER 1 — READY
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold text-foreground leading-tight"
            >
              Yu <span className="text-accent text-glow">(Ray)</span> Wang
            </motion.h1>

            {/* Rotating role */}
            <div className="h-8 flex items-center justify-center lg:justify-start font-pixel text-xs sm:text-sm text-muted-foreground">
              <span className="text-accent mr-2">▸</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-foreground"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="ml-1 text-accent animate-blink">_</span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Software engineer who likes building scalable backends and AI-powered
              apps — from Go/Java distributed systems to Python RAG pipelines and
              full-stack React products.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToProjects}
                className="font-pixel text-[10px] px-5 py-3 rounded-md bg-accent text-accent-foreground shadow-[0_0_18px_rgba(34,211,238,0.55)] hover:shadow-[0_0_26px_rgba(34,211,238,0.8)] transition-all"
              >
                ▶ VIEW PROJECTS
              </button>
              <a
                href="/WangYu_resume_sw.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-[10px] px-5 py-3 rounded-md border border-border text-foreground hover:border-accent hover:text-accent transition-all inline-flex items-center gap-2"
              >
                <FileDown size={14} /> RÉSUMÉ
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/759257989"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yu-wang-200658208/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
              >
                <Linkedin size={20} />
              </a>
              <button
                onClick={copyEmail}
                aria-label="Copy email"
                title={emailCopied ? 'Copied!' : 'Copy email'}
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
              >
                {emailCopied ? <Check size={20} className="text-success" /> : <Mail size={20} />}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-4"
            >
              {[
                { n: 12, s: '+', label: 'PROJECTS' },
                { n: 6, s: '', label: 'LANGUAGES' },
                { n: 3, s: '+', label: 'YEARS' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center rounded-lg border border-border bg-card/40 py-3"
                >
                  <div className="font-pixel text-lg text-accent text-glow">
                    <CountUp to={stat.n} suffix={stat.s} />
                  </div>
                  <div className="font-pixel text-[7px] text-muted-foreground mt-2 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative animate-floaty">
              {/* neon frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-magenta)] opacity-70 blur-[2px]" />
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-white/10 scanlines">
                <Image
                  src="/myphoto.JPG"
                  alt="Yu (Ray) Wang"
                  width={360}
                  height={360}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* corner pixels */}
              <span className="absolute -top-3 -left-3 w-4 h-4 bg-[var(--neon-cyan)]" />
              <span className="absolute -bottom-3 -right-3 w-4 h-4 bg-[var(--neon-magenta)]" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.button
        onClick={scrollToProjects}
        style={{ opacity: fade }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
      >
        <span className="font-pixel text-[8px] tracking-widest">SCROLL TO PLAY</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
};

export default HeroSection;

'use client';

import { motion } from 'framer-motion';
import { Trophy, Cpu, Cloud, Brain, Code2 } from 'lucide-react';

interface SkillGroup {
  label: string;
  icon: typeof Cpu;
  skills: { name: string; level: number }[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Languages',
    icon: Code2,
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 90 },
      { name: 'TypeScript / JS', level: 82 },
      { name: 'Go', level: 72 },
      { name: 'C++', level: 68 },
    ],
  },
  {
    label: 'Backend',
    icon: Cpu,
    skills: [
      { name: 'Spring Boot', level: 88 },
      { name: 'FastAPI', level: 85 },
      { name: 'Node / Express', level: 80 },
      { name: 'Microservices', level: 82 },
    ],
  },
  {
    label: 'AI / Data',
    icon: Brain,
    skills: [
      { name: 'RAG / LLMs', level: 85 },
      { name: 'ChromaDB', level: 80 },
      { name: 'NLP', level: 72 },
      { name: 'scikit-learn', level: 70 },
    ],
  },
  {
    label: 'Cloud / DevOps',
    icon: Cloud,
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 78 },
      { name: 'Kafka / RabbitMQ', level: 78 },
      { name: 'Postgres / Redis', level: 84 },
    ],
  },
];

const ACHIEVEMENTS = [
  'Go telemetry pipeline (MQTT→Kafka→DB)',
  'Spring Boot microservices',
  '3+ RAG / LLM apps shipped',
  'Distributed systems on AWS',
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 arcade-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-pixel text-[10px] sm:text-xs text-accent text-glow mb-4 tracking-widest">
            ★ PLAYER STATS ★
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Bio + achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a software engineer who enjoys taking systems from idea to
              production — designing scalable backends, wiring up data and messaging
              infrastructure, and adding AI where it actually helps.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Recently I&apos;ve been building a Go event-processing platform, an
              imperfect-information chess engine, and several retrieval-augmented
              chatbots. I care about clean architecture, observability, and shipping
              things people can actually use.
            </p>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy size={18} className="text-[var(--neon-yellow)]" />
                <span className="font-pixel text-[10px] text-foreground tracking-wider">
                  ACHIEVEMENTS
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {ACHIEVEMENTS.map((a, i) => (
                  <motion.span
                    key={a}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="px-3 py-1.5 rounded-md border border-border bg-card/40 text-xs text-muted-foreground"
                  >
                    🏆 {a}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skill bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILL_GROUPS.map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.08 }}
                  className="neon-card rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={16} className="text-accent" />
                    <span className="font-pixel text-[9px] text-foreground tracking-wider">
                      {group.label.toUpperCase()}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                          <span>{skill.name}</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
                            className="h-full rounded-full"
                            style={{
                              background:
                                'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

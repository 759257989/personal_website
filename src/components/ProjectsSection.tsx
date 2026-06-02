'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ProjectThumb, { ThumbKey, ThumbCategory } from './ProjectThumb';

interface Project {
  id: string;
  title: string;
  blurb: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  language: string;
  category: ThumbCategory;
  thumb: ThumbKey;
  date: string; // sort key (newest first). Some dates approximate.
  year: string;
}

const PROJECTS: Project[] = [
  {
    id: 'processing-platform',
    title: 'Distributed Processing Platform',
    blurb:
      'A Go event pipeline: ingests telemetry over MQTT, streams through Kafka, and persists to Postgres & Mongo with Redis caching — observable via Prometheus + OpenTelemetry.',
    technologies: ['Go', 'Gin', 'Kafka', 'MQTT', 'PostgreSQL', 'Redis', 'OpenTelemetry'],
    githubUrl: 'https://github.com/759257989/processing-platform',
    language: 'Go',
    category: 'Backend',
    thumb: 'network',
    date: '2026-05-21',
    year: '2026',
  },
  {
    id: 'chessgame',
    title: 'Reconnaissance Blind Chess',
    blurb:
      'A web take on the imperfect-information chess variant — sense a 3×3 area, then move against bots including a Stockfish engine. React + FastAPI, fully Dockerized.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'Stockfish', 'Docker'],
    githubUrl: 'https://github.com/759257989/chessgame',
    language: 'TypeScript',
    category: 'Full-Stack',
    thumb: 'chess',
    date: '2026-05-14',
    year: '2026',
  },
  {
    id: 'rag-chatbot',
    title: 'RAG Knowledge Chatbot',
    blurb:
      'A retrieval-augmented chatbot over a document corpus: semantic search, a tool-using LLM, and answers with source citations served from a FastAPI backend.',
    technologies: ['Python', 'FastAPI', 'ChromaDB', 'RAG', 'Anthropic Claude'],
    githubUrl: 'https://github.com/759257989/starting-ragchatbot-codebase',
    language: 'Python',
    category: 'AI/ML',
    thumb: 'brain',
    date: '2026-05-03',
    year: '2026',
  },
  {
    id: 'pdf-qa',
    title: 'PDF Q&A Chatbot',
    blurb:
      'Upload PDFs and ask in natural language; answers stay grounded in your docs with page-level citations. RAG on the raw OpenAI SDK + ChromaDB, JWT multi-user auth.',
    technologies: ['FastAPI', 'React', 'ChromaDB', 'OpenAI', 'PyMuPDF'],
    githubUrl: 'https://github.com/759257989/pdf_ducument_analyzer',
    language: 'Python',
    category: 'AI/ML',
    thumb: 'pdf',
    date: '2026-04-20',
    year: '2026',
  },
  {
    id: 'cpp-employee',
    title: 'Employee Management System',
    blurb:
      'A C++ employee management system built to practice object-oriented design, encapsulation, and a clean multi-file project structure.',
    technologies: ['C++', 'OOD', 'STL'],
    githubUrl: 'https://github.com/759257989/cpp_employee_system_proj',
    language: 'C++',
    category: 'Systems',
    thumb: 'badge',
    date: '2026-02-01',
    year: '2026',
  },
  {
    id: 'resume-screen',
    title: 'Resume Screening Tool',
    blurb:
      'An NLP tool that parses resumes and ranks candidates against a job description — exploring how data-driven approaches can improve early-stage hiring.',
    technologies: ['Python', 'NLP', 'scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/759257989/Resume_Screen_project',
    language: 'Jupyter',
    category: 'AI/ML',
    thumb: 'resume',
    date: '2025-12-15',
    year: '2025',
  },
  {
    id: 'deal-agent',
    title: 'Deal Discovery & Pricing Agent',
    blurb:
      'An agentic platform that surfaces deals and recommends pricing — an LLM agent over a product/deal store with semantic search and a React dashboard.',
    technologies: ['FastAPI', 'React', 'LLaMA', 'ChromaDB', 'SQLAlchemy'],
    githubUrl: 'https://github.com/759257989/deal_agent_platform',
    language: 'Python',
    category: 'AI/ML',
    thumb: 'tag',
    date: '2025-10-18',
    year: '2025',
  },
  {
    id: 'codehub',
    title: 'CodeHub',
    blurb:
      'A full-stack Django platform where developers showcase projects, get peer feedback, and connect — with profiles, messaging, search, and tag-based discovery.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'JavaScript'],
    githubUrl: 'https://github.com/759257989/devsearch_app',
    language: 'Python',
    category: 'Full-Stack',
    thumb: 'code',
    date: '2025-08-01', // approximate — confirm
    year: '2025',
  },
  {
    id: 'phantom-hearts',
    title: 'Phantom Hearts Rising',
    blurb:
      'A turn-based JRPG in Java showcasing clean object-oriented design — extensible characters, abilities, and a battle system verified with JUnit tests.',
    technologies: ['Java', 'Swing', 'OOD', 'Gradle', 'JUnit'],
    githubUrl: 'https://github.com/759257989/OOD_game_project',
    language: 'Java',
    category: 'Games',
    thumb: 'game',
    date: '2025-04-01', // approximate — confirm
    year: '2025',
  },
  {
    id: 'upic-cloud',
    title: 'Upic Distributed Ski System',
    blurb:
      'A scalable, distributed cloud system recording lift-ride events: a multithreaded Java client, load-balanced servers, and a RabbitMQ-backed consumer on AWS.',
    technologies: ['Java', 'Spring Boot', 'RabbitMQ', 'MySQL', 'AWS'],
    githubUrl: 'https://github.com/759257989/Upic_Ski_Resort_System',
    language: 'Java',
    category: 'Backend',
    thumb: 'mountain',
    date: '2025-03-24',
    year: '2025',
  },
  {
    id: 'leadnews',
    title: 'LeadNews Microservices',
    blurb:
      'A microservices news platform built with Spring Boot & Spring Cloud — separate user, admin, and editor roles for content creation, review, and publication.',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'MySQL', 'Redis'],
    githubUrl: 'https://github.com/759257989/leadnews',
    language: 'Java',
    category: 'Backend',
    thumb: 'news',
    date: '2025-02-22',
    year: '2025',
  },
  {
    id: 'zentask',
    title: 'ZenTask',
    blurb:
      'A minimalist, responsive full-stack to-do app with authentication and full CRUD task management, built on the MERN stack.',
    technologies: ['React', 'Express', 'MongoDB', 'Node.js', 'Tailwind'],
    githubUrl: 'https://github.com/759257989/todolist_application',
    language: 'JavaScript',
    category: 'Full-Stack',
    thumb: 'check',
    date: '2025-01-15', // approximate — confirm
    year: '2025',
  },
];

const FILTERS: Array<'All' | ThumbCategory> = [
  'All',
  'AI/ML',
  'Full-Stack',
  'Backend',
  'Systems',
  'Games',
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | ThumbCategory>('All');

  // Sort newest -> oldest and assign a stable level number.
  const ranked = useMemo(
    () =>
      [...PROJECTS]
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((p, i) => ({ ...p, level: i + 1 })),
    []
  );

  const visible = useMemo(
    () =>
      activeFilter === 'All'
        ? ranked
        : ranked.filter((p) => p.category === activeFilter),
    [ranked, activeFilter]
  );

  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 arcade-dots opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="font-pixel text-[10px] sm:text-xs text-accent text-glow mb-4 tracking-widest">
            ★ SELECT A LEVEL ★
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Project Arcade
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Backend systems, AI applications, and full-stack builds — newest first.
            Insert coin, pick a level.
          </p>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-pixel text-[9px] sm:text-[10px] px-3 py-2 rounded-md border transition-all duration-200 ${
                  isActive
                    ? 'bg-accent text-accent-foreground border-accent shadow-[0_0_14px_rgba(34,211,238,0.6)]'
                    : 'bg-transparent text-muted-foreground border-border hover:text-accent hover:border-accent'
                }`}
              >
                {filter.toUpperCase()}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group neon-card rounded-xl overflow-hidden hover:border-accent hover:shadow-[0_0_28px_rgba(34,211,238,0.28)]"
              >
                <ProjectThumb thumb={project.thumb} category={project.category} level={project.level} />

                <div className="p-5 flex flex-col">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-pixel text-[8px] text-muted-foreground whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 mb-3 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {project.language}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.blurb}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-border text-sm text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-all"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

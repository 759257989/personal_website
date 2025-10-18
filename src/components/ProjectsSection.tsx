'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import { Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'UpicCloud',
      description: 'Full-stack e-commerce solution with payment integration',
      longDescription: 'A comprehensive e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing with Stripe, and an admin dashboard for order management.',
      image: '',
      technologies: ['Java', 'Springboot', 'MySQL', 'Microservices', 'AWS', 'Message Queue'],
      githubUrl: 'https://github.com/759257989/Upic_Ski_Resort_System.git',
      liveUrl: 'https://your-ecommerce-demo.com',
      featured: true,
    },
    {
      id: '2',
      title: 'Deal Discovery & Pricing Agent',
      description: 'Full-stack e-commerce solution with payment integration',
      longDescription: 'A comprehensive e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing with Stripe, and an admin dashboard for order management.',
      image: '/deal.png',
      technologies: ['FastAPI', 'React', 'LLaMA', 'ChromaDB','SQLAlchemy'],
      githubUrl: 'https://github.com/759257989/deal_agent_platform.git',
      liveUrl: 'https://your-ecommerce-demo.com',
      featured: true,
    },
    {
      id: '3',
      title: 'CodeHub',
      description: 'A full-stack Django web platform that enables developers to showcase projects.',
      longDescription: 'A modern chat application featuring real-time messaging, AI-powered responses using OpenAI API, and a sleek user interface with dark mode support.',
      image: '/devsearch.png',
      technologies: ['Django', 'JavaScript', 'PostgreSQL', 'Git', 'Django ORM Models'],
      githubUrl: 'https://github.com/759257989/devsearch_app.git',
      liveUrl: 'https://your-ai-chat-demo.com',
      featured: true,
    },
    {
      id: '4',
      title: 'ZenTask',
      description: 'A minimalist and responsive full-stack To-Do list application',
      longDescription: 'A comprehensive task management dashboard with team collaboration features, real-time updates, and advanced project tracking capabilities.',
      image: '/todoapp.png',
      technologies: ['React', 'Express.js', 'MongoDB (Mongoose)', 'Tailwind CSS', 'AWS'],
      githubUrl: 'https://github.com/759257989/todolist_application',
      liveUrl: 'https://your-ai-chat-demo.com',
      featured: false,
    },
    {
      id: '5',
      title: 'Phantom Hearts Rising',
      description: 'A turn-based JRPG built in Java, demonstrating clean OOD principles and extensible architecture.',
      longDescription: 'An interactive weather analytics application that processes historical weather data and provides insights through beautiful data visualizations.',
      image: '/jrpggame.png',
      technologies: ['Java', 'Swing', 'Gradle', 'OOD', 'JUnit'],
      githubUrl: 'https://github.com/759257989/OOD_game_project.git',
      liveUrl: 'https://your-weather-demo.com',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  return (
            <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
                    className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Things I have worked on...
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="h-full">
                {/* Project Image */}
                <div className="h-48 overflow-hidden rounded-t-xl">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                            <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                            <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="flex justify-center">
                    <Button
                      href={project.githubUrl}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

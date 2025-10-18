'use client';

import { motion } from 'framer-motion';
import Card from './Card';
import Button from './Button';
import { Calendar, Clock, ArrowRight, Code, Lightbulb, Rocket } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Designing a Scalable Chat System',
      excerpt: 'A deep dive into designing a distributed chat system that can handle real-time messaging at scale, covering architecture, protocols, and data storage strategies.',
      content: 'Full article content here...',
      date: '2025-08-15',
      readTime: '8 min read',
      category: 'System Design',
      featured: true,
    },
    {
      id: '2',
      title: 'Learning the BFS Algorithm for Problem Solving',
      excerpt: 'Understanding how the Breadth-First Search (BFS) algorithm helps solve shortest path and traversal problems efficiently on LeetCode.',
      content: 'Full article content here...',
      date: '2025-03-10',
      readTime: '7 min read',
      category: 'LeetCode',
      featured: true,
    },
    {
      id: '3',
      title: 'Understanding Java Thread Pools for High-Performance Systems',
      excerpt: 'A comprehensive guide to Java thread pools, their key parameters, different pool types, and best practices for building scalable backend systems.',
      content: 'Full article content here...',
      date: '2025-08-05',
      readTime: '8 min read',
      category: 'Backend',
      featured: false,
    }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Development': Code,
      'AI/ML': Lightbulb,
      'Personal': Rocket,
    };
    return iconMap[category] || Code;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'System Design': 'bg-accent/10 text-accent border border-accent/20',
      'LeetCode': 'bg-success/10 text-success border border-success/20',
      'Backend': 'bg-secondary text-secondary-foreground border border-border',
    };
    return colorMap[category] || 'bg-secondary text-secondary-foreground border border-border';
  };

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
    <section id="blog" className="py-20 bg-background">
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
            Latest Blog Posts
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Thoughts on technology, development practices, and my journey in software engineering.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => {
            const IconComponent = getCategoryIcon(post.category);
            return (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className={`${post.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <Card className="h-full group flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getCategoryColor(post.category)}`}>
                        <IconComponent size={14} />
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-center mt-auto">
                      <Button
                        href={`/blog/${post.id}`}
                        variant="outline"
                        size="sm"
                        className="w-16 h-16 rounded-full flex items-center justify-center group text-xs"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
        
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Calendar, Clock, ArrowRight, Code, Lightbulb, Rocket, ArrowLeft } from 'lucide-react';
import { ComponentType } from 'react';
import Link from 'next/link';

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

const BlogIndexPage = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices for creating maintainable and scalable React applications with modern patterns and tools.',
      content: 'Full article content...',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Development',
      featured: true,
    },
    {
      id: '2',
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is transforming the way we build and interact with web applications.',
      content: 'Full article content...',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'AI/ML',
      featured: true,
    },
    {
      id: '3',
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices that will make your code more robust and maintainable.',
      content: 'Full article content...',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Development',
      featured: false,
    },
    {
      id: '4',
      title: 'My Journey into Full-Stack Development',
      excerpt: 'Reflecting on the challenges and rewards of becoming a full-stack developer in today\'s tech landscape.',
      content: 'Full article content...',
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'Personal',
      featured: false,
    },
  ];

  const getCategoryIcon = (category: string): ComponentType<{ size?: number; className?: string }> => {
    const iconMap: { [key: string]: ComponentType<{ size?: number; className?: string }> } = {
      'Development': Code,
      'AI/ML': Lightbulb,
      'Personal': Rocket,
    };
    return iconMap[category] || Code;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Development': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'AI/ML': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Personal': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Blog Posts
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Thoughts on technology, development practices, and my journey in software engineering.
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => {
            const IconComponent = getCategoryIcon(post.category);
            return (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className={`${post.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <Card className="h-full overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                      <IconComponent size={48} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Button
                      href={`/blog/${post.id}`}
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center gap-2 group"
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogIndexPage;

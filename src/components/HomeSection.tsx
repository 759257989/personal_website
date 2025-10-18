'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Check } from 'lucide-react';
import { useState } from 'react';

const HomeSection = () => {
    const [emailCopied, setEmailCopied] = useState(false);
    const emailAddress = 'wangyu7989@gmail.com';

    const skills = [
        'Java', 'Python', 'Node.js', 'TypeScript', 'MySQL', 'Redis', 'RabitMQ', 'Elasticsearch', 'GitHub Actions', 'Terraform', 'AWS', 'Docker', 'LangGraph'
    ];

    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
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
        <section id="home" className="min-h-screen flex items-center justify-center bg-background">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Column - Text Content */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="space-y-4">
                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl lg:text-6xl font-bold text-foreground whitespace-nowrap"
                            >
                                Hi, I&apos;m{' '}
                                    <span className="text-accent">Yu (Ray) Wang</span>
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-muted-foreground"
                            >
                                Backend Developer & AI Enthusiast
                            </motion.p>
                        </div>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                            I’m a backend-focused software developer who enjoys building scalable APIs and distributed systems. My work centers on crafting robust architectures with Java Spring Boot and Python FastAPI, integrating databases, caching, and cloud infrastructure to deliver high-performance web applications.
                        </motion.p>

                        {/* Skills */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h3 className="text-lg font-semibold text-foreground">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="flex gap-4">
                            <motion.a
                                href="https://github.com/759257989"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 rounded-full bg-card border border-border shadow-md hover:shadow-lg transition-shadow"
                            >
                                <Github size={24} className="text-muted-foreground" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/yu-wang-200658208/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 rounded-full bg-card border border-border shadow-md hover:shadow-lg transition-shadow"
                            >
                                <Linkedin size={24} className="text-muted-foreground" />
                            </motion.a>
                            
                            {/* Email Copy Button */}
                            <div className="relative">
                                <motion.button
                                    onClick={copyEmailToClipboard}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-full bg-card border border-border shadow-md hover:shadow-lg transition-shadow"
                                    aria-label="Copy email address"
                                    title={emailCopied ? 'Email copied!' : 'Copy email address'}
                                >
                                    {emailCopied ? (
                                        <Check size={24} className="text-success" />
                                    ) : (
                                        <Mail size={24} className="text-muted-foreground" />
                                    )}
                                </motion.button>
                                
                                {/* Toast Notification */}
                                <AnimatePresence>
                                    {emailCopied && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-success text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-50"
                                        >
                                            Email copied to clipboard!
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-success"></div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Profile Image */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative"
                        >
                                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-accent/20 to-accent/40 p-1">
                                <div className="w-full h-full rounded-full overflow-hidden bg-card flex items-center justify-center">
                                    {/* Replace with your actual profile image */}
                                    <div className="w-full h-full bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-muted-foreground">
                                        <Image
                                            src="/myphoto.JPG"
                                            alt="Yu Wang"
                                            width={320}
                                            height={320}
                                            className="w-full h-full object-cover"
                                        />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                        className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center shadow-lg border border-accent/30"
                            >
                                <span className="text-2xl">🎯</span>
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 10, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                        className="absolute -bottom-4 -left-4 w-12 h-12 bg-success/20 rounded-full flex items-center justify-center shadow-lg border border-success/30"
                            >
                                <span className="text-xl">⭐</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeSection;

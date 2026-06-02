'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Check } from 'lucide-react';

const EMAIL = 'wangyu7989@gmail.com';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Placeholder submit — wire up EmailJS (deps already installed) to send for real.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = [
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Github, label: 'GitHub', value: '@759257989', href: 'https://github.com/759257989' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Yu Wang',
      href: 'https://www.linkedin.com/in/yu-wang-200658208/',
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 arcade-dots opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-pixel text-[10px] sm:text-xs text-accent text-glow mb-4 tracking-widest animate-blink">
            ★ INSERT COIN TO CONTINUE ★
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to software engineering roles and interesting projects. Drop a message
            or reach me directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="neon-card rounded-xl p-6 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 rounded-md bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 rounded-md bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-muted-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-3 py-2.5 rounded-md bg-input border border-border text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Say hello..."
              />
            </div>

            {submitStatus === 'success' && (
              <p className="text-sm text-success flex items-center gap-2">
                <Check size={16} /> Message sent — I&apos;ll get back to you soon!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-sm text-destructive">Something went wrong. Try emailing me directly.</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-pixel text-[10px] px-5 py-3 rounded-md bg-accent text-accent-foreground shadow-[0_0_16px_rgba(34,211,238,0.5)] hover:shadow-[0_0_24px_rgba(34,211,238,0.75)] transition-all inline-flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Send size={14} />
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </motion.form>

          {/* Direct links */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 neon-card rounded-xl p-5 hover:border-accent hover:shadow-[0_0_22px_rgba(34,211,238,0.25)]"
                >
                  <div className="p-3 rounded-lg bg-secondary text-accent group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="font-pixel text-[9px] text-muted-foreground tracking-wider mb-1">
                      {link.label.toUpperCase()}
                    </div>
                    <div className="text-foreground text-sm group-hover:text-accent transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

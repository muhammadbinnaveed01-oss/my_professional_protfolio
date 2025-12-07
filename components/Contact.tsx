import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import Button from './ui/Button';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks for reaching out! I'll get back to you shortly.");
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white">Let's Build Something Great</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-navy-700 dark:text-warmGray-300">
              I'm currently available for freelance work or full-time positions. If you have a project that needs some creative energy, let's connect.
            </p>

            <div className="space-y-6">
              <ContactItem icon={<Mail size={20} />} label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
              <ContactItem icon={<Phone size={20} />} label="Phone" value={PROFILE.phone} />
              <ContactItem icon={<MapPin size={20} />} label="Location" value={PROFILE.location} />
            </div>

            <div className="flex gap-4 mt-8">
              <SocialButton icon={<Linkedin size={20} />} href="#" />
              <SocialButton icon={<Github size={20} />} href="#" />
              <SocialButton icon={<Mail size={20} />} href={`mailto:${PROFILE.email}`} />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-warmGray-50 dark:bg-navy-800 p-8 rounded-river shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 dark:text-warmGray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 dark:text-warmGray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 dark:text-warmGray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" variant="primary" className="w-full justify-center" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send size={18} />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-cyan-50 dark:bg-navy-800 text-cyan-600 dark:text-cyan-400 rounded-xl">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-navy-500 dark:text-warmGray-400">{label}</p>
      {href ? (
        <a href={href} className="text-lg font-semibold text-navy-900 dark:text-white hover:text-cyan-500 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-lg font-semibold text-navy-900 dark:text-white">{value}</p>
      )}
    </div>
  </div>
);

const SocialButton: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a 
    href={href}
    className="p-3 bg-navy-50 dark:bg-navy-800 text-navy-700 dark:text-warmGray-300 rounded-xl hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-navy-900 transition-all duration-300 shadow-sm hover:shadow-cyan-500/30 hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Contact;
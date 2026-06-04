import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, Mail } from 'lucide-react';
import { CONTACT } from '../../data/contact';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: CONTACT.github, color: '#A78BFA' },
    { name: 'Email', icon: Mail, href: CONTACT.email, color: '#67E8F9' },
  ];

  return (
    <section id="contact" ref={ref} className="relative min-h-screen py-32 px-8 overflow-hidden">
      {/* Background blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #A78BFA 0%, #67E8F9 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            className="mb-6 font-['Playfair_Display']"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Contact
          </motion.h2>

          <motion.p
            className="text-xl text-white/60 mb-12 font-['Inter']"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            언제든지 연락주세요
          </motion.p>

          <motion.a
            href={CONTACT.email}
            className="group relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span
              className="text-3xl md:text-4xl font-['Playfair_Display'] relative z-10"
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #67E8F9, #F6C90E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              yangyeyoung13@gmail.com
            </span>
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A78BFA] via-[#67E8F9] to-[#F6C90E]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8 mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(26, 26, 31, 0.5)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <link.icon className="w-6 h-6" style={{ color: link.color }} />
              </div>

              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-full -z-10"
                style={{
                  background: `radial-gradient(circle, ${link.color}40, transparent 70%)`,
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="relative pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-['Playfair_Display'] text-2xl">Yang Yeyoung</div>

            <div className="text-white/40 text-sm font-['Inter']">
              © 2026 Yang Yeyoung. All rights reserved
            </div>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-sm font-['Inter'] tracking-wider uppercase text-white/60 hover:text-[#A78BFA] transition-colors"
              whileHover={{ y: -2 }}
            >
              Back to top
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M8 15V1M8 1L1 8M8 1L15 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { aboutContent } from '../../data/abouts';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const marqueeSkills = [
    'React',
    'React Native',
    'TypeScript',
    'Flutter',
    'JavaScript',
    'Spring Boot',
    'Tailwind CSS',
    'REST API',
  ];

  return (
    <section id="about" ref={ref} className="relative min-h-screen py-32 px-8 overflow-hidden">
      {/* Background blob */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #F6C90E 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* About Title */}
        <motion.h2
          className="mb-16 text-center font-['Playfair_Display']"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-[#A78BFA]">Me</span>
        </motion.h2>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {aboutContent.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className="relative h-full p-8 rounded-3xl"
                style={{
                  background: 'rgba(26, 26, 31, 0.5)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${
                      index === 0 ? '#A78BFA' : index === 1 ? '#67E8F9' : '#F6C90E'
                    }20, transparent 70%)`,
                  }}
                />

                <h3
                  className="text-2xl mb-4 font-['Playfair_Display'] relative z-10"
                  style={{
                    color: index === 0 ? '#A78BFA' : index === 1 ? '#67E8F9' : '#F6C90E',
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed font-['Inter'] relative z-10">
                  {item.description}
                </p>

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    border: '2px solid transparent',
                  }}
                  whileHover={{
                    borderColor:
                      index === 0 ? '#A78BFA60' : index === 1 ? '#67E8F960' : '#F6C90E60',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Marquee */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10" />

            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-8 font-['Inter'] text-2xl text-white/40 tracking-wider uppercase"
                >
                  <span>{skill}</span>
                  <span className="text-[#A78BFA]">•</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

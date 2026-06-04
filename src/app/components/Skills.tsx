import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState, useMemo, useEffect } from 'react';
import { skills } from '../../data/skills';
import type { Skill } from '../../data/skills';
import { SkillBubble } from './SkillBubble';

export function Skills() {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [poppingSkills, setPoppingSkills] = useState<Set<string>>(new Set());
  const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });

  const categories = ['All', ...Object.keys(skills)];

  // Measure actual container size
  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // Get all skills or filtered by category
  const displayedSkills = useMemo(() => {
    if (selectedCategory === 'All') {
      const allSkills: Skill[] = [];
      Object.values(skills).forEach((categorySkills) => {
        allSkills.push(...categorySkills);
      });
      return allSkills;
    }
    return skills[selectedCategory] || [];
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return;

    // Mark current skills as popping
    const currentSkillNames = new Set(displayedSkills.map((s) => s.name));
    setPoppingSkills(currentSkillNames);

    // Change category after brief delay
    setTimeout(() => {
      setSelectedCategory(category);
      setPoppingSkills(new Set());
    }, 300);
  };

  return (
    <section id="skills" ref={ref} className="relative min-h-screen py-20 px-8 overflow-hidden">
      {/* Morphing background blob */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        animate={{
          background: [
            'radial-gradient(circle, #A78BFA 0%, transparent 70%)',
            'radial-gradient(circle, #67E8F9 0%, transparent 70%)',
            'radial-gradient(circle, #F6C90E 0%, transparent 70%)',
            'radial-gradient(circle, #A78BFA 0%, transparent 70%)',
          ],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center mb-4 font-['Playfair_Display']"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="text-center text-white/60 text-lg mb-12 font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          기술 스택 및 개발 도구
        </motion.p>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className="relative px-6 py-3 rounded-full font-['Inter'] text-sm tracking-wider transition-all"
              style={{
                background:
                  selectedCategory === category
                    ? 'rgba(167, 139, 250, 0.2)'
                    : 'rgba(26, 26, 31, 0.5)',
                border:
                  selectedCategory === category
                    ? '1px solid #A78BFA'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                color: selectedCategory === category ? '#A78BFA' : '#fff',
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Bubble Container */}
        <motion.div
          ref={containerRef}
          className="relative mx-auto"
          style={{
            width: '100%',
            minHeight: '800px',
            maxWidth: '1400px',
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Subtle background glow - extended beyond container */}
          <div
            className="absolute"
            style={{
              inset: '-100px',
              background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.15) 0%, rgba(103, 232, 249, 0.08) 40%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Bubbles */}
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <SkillBubble
                key={`${selectedCategory}-${skill.name}`}
                skill={skill}
                index={index}
                totalCount={displayedSkills.length}
                containerWidth={containerSize.width}
                containerHeight={containerSize.height}
                isPopping={poppingSkills.has(skill.name)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

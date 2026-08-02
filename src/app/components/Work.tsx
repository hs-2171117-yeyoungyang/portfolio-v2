import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { projects } from '../../data/projects';
import { Github, X } from 'lucide-react';
import { ContributionBubble } from './ContributionBubble';

export function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="work" ref={ref} className="relative min-h-screen py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="mb-4 font-['Playfair_Display']"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Work
        </motion.h2>

        <motion.p
          className="text-white/60 text-lg mb-16 font-['Inter']"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          프로젝트 및 개발 경험
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.id;

            return (
              <motion.div
                key={project.id}
                className={`group relative ${isExpanded ? 'md:col-span-2' : ''}`}
                data-project-card
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{ duration: 0.6, delay: isExpanded ? 0 : index * 0.1 + 0.3 }}
                layout
              >
                <motion.div
                  className="cursor-pointer"
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  onMouseEnter={() => !isExpanded && setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  layout
                >
                  <motion.div
                    className="relative rounded-3xl overflow-hidden"
                    style={{
                      background: 'rgba(26, 26, 31, 0.5)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    whileHover={!isExpanded ? { scale: 1.02 } : {}}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    {/* Inner glow effect */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${project.color}20, transparent 70%)`,
                      }}
                      animate={{
                        opacity: hoveredProject === project.id || isExpanded ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Gradient background */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}40, transparent)`,
                      }}
                    />

                    {/* Close button for expanded view */}
                    {isExpanded && (
                      <motion.button
                        className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(26, 26, 31, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedProject(null);
                        }}
                      >
                        <X size={20} className="text-white/80" />
                      </motion.button>
                    )}

                    {/* Content */}
                    <div className="relative z-10 p-8">
                      {!isExpanded ? (
                        // Collapsed view
                        <div className="min-h-[24rem] md:h-[24rem] flex flex-col justify-between overflow-hidden">
                          <div>
                            {/* Thumbnail pushes the text down on hover */}
                            {project.image && (
                              <motion.div
                                className="rounded-xl overflow-hidden"
                                initial={false}
                                animate={{
                                  height: hoveredProject === project.id ? 'auto' : 0,
                                  opacity: hoveredProject === project.id ? 1 : 0,
                                  marginBottom: hoveredProject === project.id ? 8 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full aspect-video object-cover block"
                                  style={{
                                    background: 'rgba(0, 0, 0, 0.3)',
                                  }}
                                />
                              </motion.div>
                            )}

                            <div className="flex items-start justify-between mb-2">
                              <motion.h3
                                className="font-['Playfair_Display']"
                                initial={false}
                                animate={{
                                  fontSize:
                                    hoveredProject === project.id ? '1.5rem' : '1.875rem',
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {project.title}
                              </motion.h3>
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white/60 hover:text-white transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github size={20} />
                                </a>
                              )}
                            </div>
                            {/* Period collapses away on hover */}
                            <motion.div
                              className="overflow-hidden"
                              initial={false}
                              animate={{
                                height: hoveredProject === project.id ? 0 : 'auto',
                                opacity: hoveredProject === project.id ? 0 : 1,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-sm text-white/50 mb-2 font-['Inter']">
                                {project.period}
                              </p>
                            </motion.div>
                            <p className="text-white/70 text-sm font-['Inter']">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech stack & team info collapse away on hover */}
                          <motion.div
                            className="overflow-hidden"
                            initial={false}
                            animate={{
                              height: hoveredProject === project.id ? 0 : 'auto',
                              opacity: hoveredProject === project.id ? 0 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-4 py-2 rounded-full text-sm font-['Inter']"
                                  style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <motion.div
                              className="flex items-center gap-2 text-sm font-['Inter'] tracking-wider"
                              style={{ color: project.color }}
                              animate={{
                                x: hoveredProject === project.id ? 10 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {project.teamSize > 1
                                ? `팀 프로젝트 (${project.teamSize}명)`
                                : '개인 프로젝트'}
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 8H15M15 8L8 1M15 8L8 15"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </motion.div>
                          </motion.div>
                        </div>
                      ) : (
                        // Expanded view
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {/* Project Image */}
                          {project.image && (
                            <motion.div
                              className="mb-8 rounded-2xl overflow-hidden"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full aspect-video object-cover block"
                                style={{
                                  background: 'rgba(0, 0, 0, 0.2)',
                                }}
                              />
                            </motion.div>
                          )}

                          {/* Header */}
                          <div className="mb-8">
                            <div className="flex items-start justify-between mb-4">
                              <h3 className="text-4xl md:text-5xl font-['Playfair_Display']">
                                {project.title}
                              </h3>
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white/60 hover:text-white transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github size={24} />
                                </a>
                              )}
                            </div>
                            <p className="text-white/50 mb-4 font-['Inter']">{project.period}</p>
                            <p className="text-xl text-white/80 font-['Inter']">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech Stack */}
                          <div className="mb-8">
                            <h4
                              className="text-xl font-['Playfair_Display'] mb-4"
                              style={{ color: project.color }}
                            >
                              기술 스택
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-5 py-3 rounded-full font-['Inter']"
                                  style={{
                                    background: `${project.color}20`,
                                    border: `1px solid ${project.color}40`,
                                    color: project.color,
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Contributions with Jelly Bubbles */}
                          <div className="mb-12">
                            <h4
                              className="text-2xl font-['Playfair_Display'] mb-8 text-center"
                              style={{ color: project.color }}
                            >
                              기여도
                            </h4>
                            <div className="flex justify-center items-center gap-8 flex-wrap">
                              {project.contributions.map((contribution, idx) => (
                                <ContributionBubble
                                  key={idx}
                                  contribution={contribution}
                                  color={project.color}
                                  delay={idx * 0.3}
                                />
                              ))}
                            </div>
                            <div className="mt-8 text-center text-white/50 font-['Inter']">
                              {project.teamSize > 1
                                ? `팀 프로젝트 (${project.teamSize}명)`
                                : '개인 프로젝트'}
                            </div>
                          </div>

                          {/* Role */}
                          <div className="mb-8">
                            <h4
                              className="text-xl font-['Playfair_Display'] mb-4"
                              style={{ color: project.color }}
                            >
                              담당 역할
                            </h4>
                            <div className="space-y-3">
                              {project.role.map((role, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                  <span className="text-[#A78BFA] mt-1">▸</span>
                                  <span className="text-white/70 font-['Inter']">{role}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="mb-8">
                            <h4
                              className="text-xl font-['Playfair_Display'] mb-4"
                              style={{ color: project.color }}
                            >
                              주요 성과
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {project.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  className="p-4 rounded-2xl"
                                  style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                  }}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                  <div className="flex items-start gap-3">
                                    <span
                                      className="text-lg mt-0.5"
                                      style={{ color: project.color }}
                                    >
                                      ✓
                                    </span>
                                    <span className="text-white/70 font-['Inter']">
                                      {achievement}
                                    </span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Learnings */}
                          <div>
                            <h4
                              className="text-xl font-['Playfair_Display'] mb-4"
                              style={{ color: project.color }}
                            >
                              배운 점
                            </h4>
                            <div className="space-y-3">
                              {project.learnings.map((learning, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-start gap-3 p-4 rounded-2xl"
                                  style={{
                                    background: `${project.color}10`,
                                    border: `1px solid ${project.color}20`,
                                  }}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                  <span className="text-[#67E8F9] mt-1">💡</span>
                                  <span className="text-white/80 font-['Inter']">{learning}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Frosted border effect */}
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        border: `2px solid ${
                          hoveredProject === project.id || isExpanded
                            ? `${project.color}40`
                            : 'rgba(255, 255, 255, 0.05)'
                        }`,
                        transition: 'border-color 0.3s ease',
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

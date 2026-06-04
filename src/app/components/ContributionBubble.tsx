import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface ContributionBubbleProps {
  contribution: string;
  color: string;
  delay?: number;
}

export function ContributionBubble({ contribution, color, delay = 0 }: ContributionBubbleProps) {
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Extract percentage from contribution string (e.g., "Frontend 30%" -> 30)
  const percentageMatch = contribution.match(/(\d+)%/);
  const targetPercentage = percentageMatch ? parseInt(percentageMatch[1]) : 0;
  const label = contribution.replace(/\d+%/, '').trim();

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted || targetPercentage === 0) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetPercentage / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetPercentage) {
        setDisplayedPercentage(targetPercentage);
        clearInterval(timer);
      } else {
        setDisplayedPercentage(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasStarted, targetPercentage]);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, type: 'spring', bounce: 0.4 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-4 rounded-full opacity-0"
        style={{
          background: `radial-gradient(circle, ${color}40, transparent 70%)`,
        }}
        animate={{
          opacity: [0, 0.6, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main bubble */}
      <motion.div
        className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${color}60, ${color}30)`,
          boxShadow: `0 0 40px ${color}40, inset 0 0 40px ${color}20`,
          border: `2px solid ${color}60`,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Inner shine/highlight */}
        <div
          className="absolute top-4 left-6 w-16 h-16 rounded-full blur-2xl opacity-70"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)',
          }}
        />

        {/* Specular highlight smaller */}
        <div
          className="absolute top-6 left-8 w-8 h-8 rounded-full blur-lg opacity-90"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 1), transparent)',
          }}
        />

        {/* Liquid wave effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-full opacity-20"
          style={{
            background: `linear-gradient(180deg, transparent, ${color})`,
          }}
          animate={{
            y: [`${100 - displayedPercentage}%`, `${100 - displayedPercentage - 5}%`, `${100 - displayedPercentage}%`],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.div
            className="text-4xl font-bold font-['Playfair_Display'] mb-1"
            style={{ color: '#fff', textShadow: `0 0 20px ${color}80` }}
            animate={{
              scale: displayedPercentage === targetPercentage ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {displayedPercentage}
            <span className="text-2xl">%</span>
          </motion.div>
          <div className="text-xs font-['Inter'] text-white/90 tracking-wider uppercase px-2">
            {label}
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/30"
            style={{
              left: `${30 + i * 20}%`,
              bottom: '20%',
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Bottom reflection */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full blur-xl opacity-30"
        style={{
          background: `radial-gradient(circle, ${color}60, transparent)`,
        }}
        animate={{
          scaleX: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}

import { motion } from 'motion/react';
import type { Skill } from '../../data/skills';
import { useMemo } from 'react';

interface SkillBubbleProps {
  skill: Skill;
  index: number;
  totalCount: number;
  containerWidth: number;
  containerHeight: number;
  isPopping?: boolean;
}

export function SkillBubble({
  skill,
  index,
  totalCount,
  containerWidth,
  containerHeight,
  isPopping,
}: SkillBubbleProps) {
  // Size based on container size for responsiveness
  const size = useMemo(() => {
    const baseSize = Math.min(containerWidth, containerHeight) * 0.2;
    const variation = baseSize * 0.2;
    return baseSize + Math.random() * variation;
  }, [containerWidth, containerHeight]);

  // Simple grid-based initial position (no collision detection for simplicity)
  const initialPosition = useMemo(() => {
    const maxWidth = containerWidth / 2 - size / 2 - 20;
    const maxHeight = containerHeight / 2 - size / 2 - 20;

    // Random position with some spacing
    const angle = (index / totalCount) * Math.PI * 2 + Math.random() * 0.5;
    const radius = (Math.random() * 0.7 + 0.3) * Math.min(maxWidth, maxHeight);

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  }, [containerWidth, containerHeight, size, totalCount, index]);

  // Animation duration (same for both x and y to prevent stuttering)
  const animationDuration = useMemo(() => 50 + Math.random() * 20, []);

  // Generate random movement waypoints within boundaries
  const waypoints = useMemo(() => {
    const maxWidth = containerWidth / 2 - size / 2 - 20;
    const maxHeight = containerHeight / 2 - size / 2 - 20;

    const points = [initialPosition];
    for (let i = 0; i < 6; i++) {
      points.push({
        x: (Math.random() - 0.5) * maxWidth * 1.9,
        y: (Math.random() - 0.5) * maxHeight * 1.9,
      });
    }
    return points;
  }, [containerWidth, containerHeight, size, initialPosition]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
      }}
      initial={{
        x: initialPosition.x,
        y: initialPosition.y,
        scale: 0,
        opacity: 0,
      }}
      animate={
        isPopping
          ? {
              scale: [1, 1.5, 0],
              opacity: [1, 0.5, 0],
            }
          : {
              x: waypoints.map((p) => p.x),
              y: waypoints.map((p) => p.y),
              scale: 1,
              opacity: 1,
            }
      }
      transition={
        isPopping
          ? {
              duration: 0.6,
              delay: index * 0.05,
            }
          : {
              x: {
                duration: animationDuration,
                repeat: Infinity,
                ease: 'linear',
                delay: index * 0.1,
              },
              y: {
                duration: animationDuration,
                repeat: Infinity,
                ease: 'linear',
                delay: index * 0.1,
              },
              scale: { duration: 0.4, ease: 'backOut', delay: index * 0.05 },
              opacity: { duration: 0.3, delay: index * 0.05 },
            }
      }
    >
      <motion.div
        className="relative rounded-full flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 30% 30%, ${skill.color}70, ${skill.color}40)`,
          boxShadow: `0 0 30px ${skill.color}50, inset 0 0 30px ${skill.color}20`,
          border: `2px solid ${skill.color}80`,
          willChange: 'transform',
        }}
        whileHover={{
          scale: 1.15,
          boxShadow: `0 0 50px ${skill.color}80, inset 0 0 40px ${skill.color}30`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Inner shine/highlight */}
        <div
          className="absolute top-2 left-3 w-8 h-8 rounded-full blur-xl opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent)',
          }}
        />

        {/* Icon */}
        <div className="relative z-10 mb-1">
          {skill.iconSvg ? (
            <img
              src={skill.iconSvg}
              alt={skill.name}
              style={{
                width: `${Math.max(size * 0.4, 24)}px`,
                height: `${Math.max(size * 0.4, 24)}px`,
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              }}
            />
          ) : (
            <div style={{ fontSize: `${Math.max(size * 0.3, 20)}px` }}>{skill.icon}</div>
          )}
        </div>

        {/* Name - hide if bubble is too small */}
        {size > 60 && (
          <div
            className="font-['Inter'] text-white/90 text-center px-2 leading-tight relative z-10"
            style={{
              fontSize: `${Math.max(size * 0.11, 9)}px`,
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            {skill.name}
          </div>
        )}

        {/* Floating particles */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/40"
            style={{
              left: `${30 + i * 30}%`,
              bottom: '30%',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

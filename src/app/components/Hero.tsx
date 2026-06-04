import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)',
          }}
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
            scale: [1, 1.2, 1],
          }}
          transition={{
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: { duration: 0.3 },
            y: { duration: 0.3 },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #67E8F9 0%, transparent 70%)',
          }}
          animate={{
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
            scale: [1, 1.3, 1],
          }}
          transition={{
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: { duration: 0.3 },
            y: { duration: 0.3 },
          }}
        />
      </div>

      {/* Central 3D Jelly Blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
        style={{
          perspective: '1000px',
        }}
        animate={{
          rotateX: mousePosition.y * 0.5,
          rotateY: mousePosition.x * 0.5,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(167, 139, 250, 0.4), rgba(103, 232, 249, 0.3), rgba(246, 201, 14, 0.2))',
              boxShadow:
                '0 0 60px rgba(167, 139, 250, 0.4), inset 0 0 60px rgba(103, 232, 249, 0.2)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          />
          {/* Specular highlights */}
          <div
            className="absolute top-[15%] left-[20%] w-24 h-24 rounded-full blur-2xl opacity-60"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-10 text-center max-w-5xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1
            className="mb-6 leading-tight"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Yang Yeyoung
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-white/70 font-['Inter'] tracking-wide max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Frontend Developer
        </motion.p>

        <motion.div
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#work"
            className="group relative px-8 py-3 overflow-hidden rounded-full border border-white/20 hover:border-[#A78BFA] transition-colors"
          >
            <span className="relative z-10 font-['Inter'] text-sm tracking-widest uppercase">
              View Work
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#A78BFA]/20 to-[#67E8F9]/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
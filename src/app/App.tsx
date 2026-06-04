import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { FilmGrain } from './components/FilmGrain';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#080808] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-6xl font-['Playfair_Display'] text-white/90 mb-8">
            {Math.floor(loadProgress)}%
          </div>
          <div className="w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#A78BFA] via-[#67E8F9] to-[#F6C90E] transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden w-full">
      <CustomCursor />
      <FilmGrain />

      <nav className="fixed top-0 right-0 z-40 p-8">
        <div className="flex gap-8 text-sm tracking-[0.2em] uppercase font-['Inter']">
          <a href="#about" className="hover:text-[#A78BFA] transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#A78BFA] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#work" className="hover:text-[#67E8F9] transition-colors relative group">
            Work
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#67E8F9] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#skills" className="hover:text-[#F6C90E] transition-colors relative group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#F6C90E] group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" className="hover:text-[#FF6B9D] transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#FF6B9D] group-hover:w-full transition-all duration-300" />
          </a>
        </div>
      </nav>

      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

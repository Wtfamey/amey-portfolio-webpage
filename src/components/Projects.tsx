import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Each card compresses slightly as the next one stacks on top
  const scale0 = useTransform(scrollYProgress, [0, 0.33, 0.66], [1, 0.95, 0.90]);
  const scale1 = useTransform(scrollYProgress, [0.33, 0.66, 1],  [1, 0.95, 0.90]);
  const scale2 = useTransform(scrollYProgress, [0.66, 1],        [1, 1]);
  const scales = [scale0, scale1, scale2];

  return (
    <section
      id="work"
      className="relative py-20 md:py-28 px-6 md:px-10"
      style={{
        background: '#0C0C0C',
        borderRadius: '40px 40px 0 0',
      }}
    >
      {/* Heading */}
      <div className="overflow-hidden mb-16 md:mb-20">
        <FadeIn y={50} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            SELECTED WORK
          </h2>
        </FadeIn>
      </div>

      {/* Sticky stacking cards */}
      <div
        ref={containerRef}
        className="relative max-w-5xl mx-auto"
        style={{
          // 780px per card for comfortable stacking room
          height: `${projects.length * 780}px`,
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            scale={scales[i] ?? scales[scales.length - 1]}
          />
        ))}
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import ameyWorking from '../assets/ameyworking-removebg-preview.png';
import ameyDog from '../assets/ameywalkingdog_flake_-removebg-preview.png';

const milestones = [
  {
    year: '2022',
    label: 'Started CS Engineering',
    body: 'Enrolled in Computer Science Engineering with a focus on building real things, not just passing exams.',
  },
  {
    year: '2023',
    label: 'First Client Project',
    body: 'Delivered a complete website for a real business client — Raut Law Firm. First taste of production work.',
  },
  {
    year: '2024',
    label: 'AI / ML Deep Dive',
    body: 'Went deep into AI/ML — built intelligent systems, automation tools and started connecting software with data.',
  },
  {
    year: '2025',
    label: 'Full-Stack & SaaS',
    body: "Built Chanda's Group Property Platform and more — full-stack products with real users and real requirements.",
  },
  {
    year: '2026',
    label: 'Building What\'s Next',
    body: 'Currently building, learning and shipping. Every project is a step toward something bigger.',
  },
];

function TimelineItem({ item, index }: { item: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.3'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -40 : 40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={`flex gap-6 md:gap-10 items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}
    >
      {/* Year bubble */}
      <div className="shrink-0 flex flex-col items-center gap-2">
        <div
          className="flex items-center justify-center rounded-full font-black text-xs tracking-wider"
          style={{
            width: 52, height: 52,
            background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.15))',
            border: '1px solid rgba(168,85,247,0.35)',
            color: '#c084fc',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
          }}
        >
          {item.year}
        </div>
        {index < milestones.length - 1 && (
          <div className="w-px flex-1 min-h-[48px]" style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.3), transparent)' }} />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 md:pb-14">
        <p
          className="font-bold uppercase tracking-wider mb-1"
          style={{
            fontSize: 'clamp(0.8rem, 1.4vw, 1rem)',
            background: 'linear-gradient(135deg, #e879f9, #a855f7)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {item.label}
        </p>
        <p className="text-white/50 font-light leading-relaxed" style={{ fontSize: 'clamp(0.82rem, 1.3vw, 1rem)' }}>
          {item.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const workingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const dogY = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-12">

        {/* Section heading */}
        <div className="overflow-hidden mb-4">
          <FadeIn y={50} duration={0.8}>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
            >
              THE JOURNEY
            </h2>
          </FadeIn>
        </div>
        <FadeIn y={20} delay={0.1}>
          <p className="text-white/35 font-light uppercase tracking-widest text-xs mb-16 md:mb-24">
            Where I've been. What I've built.
          </p>
        </FadeIn>

        {/* Two-column layout: timeline left, photos right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Timeline */}
          <div>
            {milestones.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>

          {/* Photo stack — parallax */}
          <div className="relative hidden lg:block" style={{ minHeight: 600 }}>

            {/* Working photo */}
            <motion.div
              style={{ y: workingY }}
              className="absolute left-0 top-0 z-10"
            >
              <div
                className="overflow-hidden rounded-3xl"
                style={{
                  width: 'clamp(200px, 22vw, 300px)',
                  border: '1px solid rgba(168,85,247,0.2)',
                  background: 'rgba(168,85,247,0.04)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                }}
              >
                <img
                  src={ameyWorking}
                  alt="Amey working on his laptop"
                  className="w-full h-auto block"
                  style={{ filter: 'drop-shadow(0 8px 30px rgba(168,85,247,0.15))' }}
                />
              </div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest mt-3 font-medium text-center">
                Deep in the code
              </p>
            </motion.div>

            {/* Dog-walking photo */}
            <motion.div
              style={{ y: dogY }}
              className="absolute right-0 top-40 z-20"
            >
              <div
                className="overflow-hidden rounded-3xl"
                style={{
                  width: 'clamp(180px, 20vw, 270px)',
                  border: '1px solid rgba(236,72,153,0.2)',
                  background: 'rgba(236,72,153,0.03)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                }}
              >
                <img
                  src={ameyDog}
                  alt="Amey walking his dog Flake"
                  className="w-full h-auto block"
                  style={{ filter: 'drop-shadow(0 8px 30px rgba(236,72,153,0.12))' }}
                />
              </div>
              <p className="text-white/20 text-[10px] uppercase tracking-widest mt-3 font-medium text-center">
                With Flake
              </p>
            </motion.div>

            {/* Floating label */}
            <motion.div
              className="absolute bottom-10 left-8 z-30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div
                className="px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(14,14,18,0.85)',
                  border: '1px solid rgba(168,85,247,0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <p className="text-white/50 text-[10px] uppercase tracking-widest font-medium">
                  Student → Builder → Developer
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile photos — shown below timeline on small screens */}
        <div className="flex gap-4 mt-12 lg:hidden">
          <div className="flex-1 overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(168,85,247,0.15)' }}>
            <img src={ameyWorking} alt="Amey working" className="w-full h-auto block" />
          </div>
          <div className="flex-1 overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(236,72,153,0.15)' }}>
            <img src={ameyDog} alt="Amey with Flake" className="w-full h-auto block" />
          </div>
        </div>
      </div>
    </section>
  );
}

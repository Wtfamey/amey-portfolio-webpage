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
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.25'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -50 : 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, scale }}
      className={`flex gap-6 md:gap-10 items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}
    >
      {/* Year bubble with glow */}
      <div className="shrink-0 flex flex-col items-center gap-2">
        <motion.div
          className="flex items-center justify-center rounded-full font-black text-xs tracking-wider relative"
          style={{
            width: 56, height: 56,
            background: 'linear-gradient(135deg, rgba(168,85,247,0.25), rgba(236,72,153,0.18))',
            border: '1.5px solid rgba(168,85,247,0.4)',
            color: '#c084fc',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            boxShadow: '0 0 24px rgba(168,85,247,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 32px rgba(168,85,247,0.5)' }}
          transition={{ duration: 0.3 }}
        >
          {item.year}
        </motion.div>
        {index < milestones.length - 1 && (
          <div className="w-px flex-1 min-h-[56px]" style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.4), rgba(236,72,153,0.2), transparent)' }} />
        )}
      </div>

      {/* Content with glass card */}
      <div className="pb-12 md:pb-16 flex-1">
        <motion.div
          className="p-5 rounded-2xl"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(168,85,247,0.12)',
            backdropFilter: 'blur(8px)',
          }}
          whileHover={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            borderColor: 'rgba(168,85,247,0.25)',
          }}
          transition={{ duration: 0.3 }}
        >
          <p
            className="font-bold uppercase tracking-wider mb-2"
            style={{
              fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
              background: 'linear-gradient(135deg, #e879f9 0%, #a855f7 50%, #6366f1 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {item.label}
          </p>
          <p className="text-white/45 font-light leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}>
            {item.body}
          </p>
        </motion.div>
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

          {/* Photo stack — parallax with enhanced styling */}
          <div className="relative hidden lg:block" style={{ minHeight: 650 }}>

            {/* Ambient glow behind photos */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(168,85,247,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 70% 60%, rgba(236,72,153,0.06) 0%, transparent 50%)',
              }}
              aria-hidden="true"
            />

            {/* Working photo */}
            <motion.div
              style={{ y: workingY }}
              className="absolute left-0 top-0 z-10"
            >
              <motion.div
                className="relative"
                style={{
                  width: 'clamp(260px, 28vw, 360px)',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={ameyWorking}
                  alt="Amey working on his laptop"
                  className="w-full h-auto block rounded-3xl"
                  style={{ filter: 'drop-shadow(0 12px 40px rgba(168,85,247,0.2))' }}
                />
              </motion.div>
              {/* Text label */}
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p 
                  className="text-white/40 text-sm font-light tracking-wide"
                >
                  this guy works real hard (just prompting)
                </p>
              </motion.div>
            </motion.div>

            {/* Dog-walking photo */}
            <motion.div
              style={{ y: dogY }}
              className="absolute right-0 top-48 z-20"
            >
              <motion.div
                className="relative"
                style={{
                  width: 'clamp(240px, 26vw, 330px)',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={ameyDog}
                  alt="Amey walking his dog Flake"
                  className="w-full h-auto block rounded-3xl"
                  style={{ filter: 'drop-shadow(0 12px 40px rgba(236,72,153,0.15))' }}
                />
              </motion.div>
              {/* Text label */}
              <motion.div 
                className="mt-4 text-right"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p 
                  className="text-white/40 text-sm font-light tracking-wide"
                >
                  meet flake!!!
                </p>
              </motion.div>
            </motion.div>

            {/* Floating label with glass effect */}
            <motion.div
              className="absolute bottom-12 left-8 z-30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="px-5 py-2.5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(14,14,18,0.9) 0%, rgba(14,14,18,0.7) 100%)',
                  border: '1.5px solid rgba(168,85,247,0.25)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 24px rgba(168,85,247,0.15)',
                }}
              >
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">
                  Student → Builder → Developer
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile photos — overlapping like desktop layout */}
        <div className="mt-12 lg:hidden relative" style={{ minHeight: 450 }}>
          <motion.div 
            className="absolute left-0 top-0"
            style={{ width: 'clamp(240px, 65vw, 300px)' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img src={ameyWorking} alt="Amey working" className="w-full h-auto block rounded-3xl" style={{ filter: 'drop-shadow(0 12px 40px rgba(168,85,247,0.2))' }} />
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-white/40 text-sm font-light tracking-wide">
                this guy works real hard (just prompting)
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="absolute right-0 top-32"
            style={{ width: 'clamp(220px, 60vw, 280px)' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img src={ameyDog} alt="Amey with Flake" className="w-full h-auto block rounded-3xl" style={{ filter: 'drop-shadow(0 12px 40px rgba(236,72,153,0.15))' }} />
            <motion.div 
              className="mt-4 text-right"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-white/40 text-sm font-light tracking-wide">
                meet flake!!!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

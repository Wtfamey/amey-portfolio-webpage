import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const ABOUT_TEXT =
  "I'm a Computer Science Engineering student specializing in AI/ML, but I've always believed that real learning starts when you build something people actually use. Over the past few years, I've worked on client websites, full-stack applications, AI-powered systems and software products — turning ideas into working products.";

function AnimatedParagraph({
  text,
  className = '',
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.25'],
  });

  const words = text.split(' ');

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wi) => {
        const start = wi / words.length;
        const end = Math.min((wi + 2) / words.length, 1);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.12, 1]);

        return (
          <motion.span
            key={wi}
            style={{ opacity }}
            className="inline-block mr-[0.28em]"
            aria-hidden="true"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 md:py-32 px-5 sm:px-8 md:px-12 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Ambient glows */}
      <motion.div
        className="absolute top-16 left-[5%] w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-[5%] w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden="true"
      />

      {/* Heading */}
      <div className="overflow-hidden mb-12 md:mb-16">
        <FadeIn y={50} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center"
            style={{ fontSize: 'clamp(2.8rem, 12vw, 155px)' }}
          >
            ABOUT ME
          </h2>
        </FadeIn>
      </div>

      {/* Animated body text */}
      <div className="max-w-[680px] w-full text-center">
        <AnimatedParagraph
          text={ABOUT_TEXT}
          className="font-medium leading-relaxed text-white/80"
          style={{ fontSize: 'clamp(0.97rem, 1.9vw, 1.3rem)' }}
        />
      </div>

      {/* Divider */}
      <div
        className="my-12 md:my-16"
        style={{
          width: 60,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Philosophy */}
      <FadeIn y={28} delay={0.1} className="max-w-[580px] w-full text-center">
        <p
          className="font-light leading-relaxed mb-6"
          style={{ color: 'rgba(215,226,234,0.45)', fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)' }}
        >
          College can teach you the fundamentals.
          <br />
          The real world teaches you how to turn those fundamentals into value.
        </p>
        <p
          className="font-semibold uppercase tracking-[0.2em]"
          style={{
            fontSize: 'clamp(0.72rem, 1.1vw, 0.9rem)',
            background: 'linear-gradient(135deg, #e879f9 0%, #a855f7 50%, #818cf8 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Learn the rules. Question the limitations. Build anyway.
        </p>
      </FadeIn>
    </section>
  );
}

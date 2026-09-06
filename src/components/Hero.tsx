import { motion, type Variants } from 'framer-motion';
import Magnet from './Magnet';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4';

type EaseTuple = [number, number, number, number];

// iPhone-style stagger: each word slides up + fades in with expo-out spring
const wordVariants: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.09,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as EaseTuple,
    },
  }),
};

const WORDS = ["HI,", "I'M", "AMEY"];

export default function Hero() {
  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* ── Full-screen background video ── */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        aria-hidden="true"
      >
        <video
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Layered overlay: top-heavy for readability + bottom-heavy for CTA */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom,
                rgba(12,12,12,0.55) 0%,
                rgba(12,12,12,0.2) 40%,
                rgba(12,12,12,0.2) 60%,
                rgba(12,12,12,0.82) 100%
              )
            `,
          }}
        />
        {/* Vignette edges */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 120% 80% at 50% 50%, transparent 50%, rgba(12,12,12,0.6) 100%)',
          }}
        />
      </motion.div>

      {/* ── Heading — sits near top, below navbar ── */}
      <div className="relative z-10 px-5 sm:px-8 md:px-12 pt-24 md:pt-28">
        {/* Word-by-word reveal */}
        <div
          className="flex flex-wrap gap-x-[0.25em]"
          aria-label="Hi, I'm Amey"
        >
          {WORDS.map((word, i) => (
            <div key={word} className="overflow-hidden" aria-hidden="true">
              <motion.span
                className="block font-black uppercase leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(3.8rem, 18vw, 230px)',
                  background: i === 2
                    ? 'linear-gradient(160deg, #ffffff 0%, #c084fc 50%, #818cf8 100%)'
                    : 'linear-gradient(160deg, #ffffff 0%, #8ca0b0 60%, #BBCCD7 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  lineHeight: 0.92,
                  display: 'inline-block',
                }}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Role tags */}
        <motion.div
          className="flex flex-wrap gap-2 mt-5 md:mt-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
        >
          {['Developer', 'AI / ML', 'Builder'].map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium px-3 py-1.5 rounded-full text-white/70"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 flex items-end justify-between px-5 sm:px-8 md:px-12 pb-8 md:pb-10 gap-4 flex-wrap sm:flex-nowrap">
        {/* Subtext */}
        <motion.p
          className="font-light tracking-wide leading-snug text-white/60 max-w-[260px] sm:max-w-[300px]"
          style={{ fontSize: 'clamp(0.72rem, 1.3vw, 1rem)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
        >
          Computer Science student building real-world software, AI systems and digital experiences.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
          className="shrink-0"
        >
          <Magnet padding={140} strength={3}>
            <a
              href="#contact"
              onClick={handleContact}
              className="btn-gradient inline-block text-white uppercase tracking-[0.18em] font-semibold text-[10px] sm:text-xs md:text-sm rounded-full px-6 sm:px-8 py-3 md:py-3.5 no-underline"
              aria-label="Let's work together — contact Amey"
            >
              LET'S WORK TOGETHER
            </a>
          </Magnet>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
      </motion.div>
    </section>
  );
}

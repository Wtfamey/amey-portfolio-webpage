import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import FadeIn from './FadeIn';
import { serviceWork, type WorkItem } from '../data/serviceWork';

// ── Identical media renderer to ProjectCard ──────────────────────────────────
function WorkMedia({ item }: { item: WorkItem }) {
  if (item.image) {
    return (
      <div
        className="w-full rounded-2xl overflow-hidden"
        style={{ background: '#080808', border: '1px solid rgba(215,226,234,0.07)' }}
      >
        <img
          src={item.image}
          alt={`${item.title} preview`}
          loading="lazy"
          className="w-full h-auto block"
          style={{ objectFit: 'contain', display: 'block' }}
        />
      </div>
    );
  }
  return (
    <div
      className="w-full rounded-2xl flex items-center justify-center"
      style={{ aspectRatio: '16/9', background: '#111', border: '1px solid rgba(215,226,234,0.07)' }}
    >
      <p
        className="font-black uppercase tracking-tight text-center px-4"
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 3rem)',
          background: 'linear-gradient(160deg, #ffffff 0%, #8ca0b0 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {item.title}
      </p>
    </div>
  );
}

// ── Same sticky card layout as ProjectCard ────────────────────────────────────
function WorkCard({
  item,
  index,
  scale,
  serviceLabel,
}: {
  item: WorkItem;
  index: number;
  scale: MotionValue<number>;
  serviceLabel: string;
}) {
  const top = 100 + index * 28;

  return (
    <motion.div style={{ scale, top }} className="sticky">
      <div
        className="w-full p-4 sm:p-6 md:p-8 flex flex-col gap-5"
        style={{
          background: 'linear-gradient(145deg, #111214 0%, #0C0C0C 100%)',
          border: '1.5px solid rgba(215,226,234,0.1)',
          borderRadius: 'clamp(20px, 4vw, 52px)',
          boxShadow: '0 8px 60px rgba(0,0,0,0.6)',
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-0.5">
            <span
              className="font-black leading-none"
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
                background: 'linear-gradient(160deg, #1e1e22 0%, #2a2a32 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <p
              className="text-white/30 uppercase tracking-[0.18em] font-medium"
              style={{ fontSize: 'clamp(0.55rem, 0.9vw, 0.72rem)' }}
            >
              {serviceLabel}
            </p>
          </div>

          {item.liveUrl ? (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 uppercase tracking-[0.15em] font-semibold text-white text-[10px] sm:text-xs rounded-full px-4 py-2 no-underline mt-1 btn-gradient"
              aria-label={`View ${item.title} live`}
            >
              <ExternalLink size={12} aria-hidden="true" />
              VIEW PROJECT
            </a>
          ) : (
            <span className="btn-ghost flex items-center gap-2 uppercase tracking-[0.15em] font-medium text-white/25 text-[10px] sm:text-xs rounded-full px-4 py-2 mt-1 cursor-not-allowed">
              <ExternalLink size={12} aria-hidden="true" />
              {item.placeholder ? 'COMING SOON' : 'VIEW PROJECT'}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="font-black uppercase tracking-tight leading-none"
          style={{
            fontSize: 'clamp(1.6rem, 4.5vw, 4rem)',
            background: 'linear-gradient(160deg, #ffffff 0%, #8ca0b0 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {item.title}
        </h3>

        {/* Media */}
        <WorkMedia item={item} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <p
            className="text-white/50 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.82rem, 1.2vw, 1rem)', maxWidth: 480 }}
          >
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:justify-end shrink-0">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] md:text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded"
                style={{
                  background: 'rgba(168,85,247,0.07)',
                  border: '1px solid rgba(168,85,247,0.18)',
                  color: 'rgba(215,226,234,0.45)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── One service group: label + sticky-stacked cards ───────────────────────────
function ServiceGroup({ service }: { service: typeof serviceWork[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const n = service.works.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleValues = service.works.map((_, i) => {
    const step = 1 / n;
    const inputRange = Array.from({ length: n }, (__, j) => j * step);
    const outputRange = Array.from({ length: n }, (__, j) =>
      j < i ? 1 - (i - j) * 0.04 : 1
    );
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollYProgress, inputRange, outputRange);
  });

  return (
    // scroll-margin-top keeps the heading visible when jumped-to from a pill/link
    // pb-40 clears the last sticky card before the next group header appears
    <div
      id={`work-${service.id}`}
      className="pt-32 md:pt-40 pb-48 md:pb-64"
      style={{ scrollMarginTop: '120px' }}
    >
      {/* Service group header */}
      <FadeIn y={30} duration={0.7}>
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <span
            className="font-black leading-none shrink-0"
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
              background: service.accent,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            aria-hidden="true"
          >
            {service.number}
          </span>
          <h3
            className="font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)', color: '#D7E2EA' }}
          >
            {service.title}
          </h3>
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.07)' }} />
        </div>
      </FadeIn>

      {/* Sticky-stack container */}
      <div
        ref={containerRef}
        className="relative max-w-5xl mx-auto"
        style={{ height: `${n * 850}px` }}
      >
        {service.works.map((item, i) => (
          <WorkCard
            key={item.id}
            item={item}
            index={i}
            scale={scaleValues[i]}
            serviceLabel={service.title}
          />
        ))}
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function ServiceWork() {
  return (
    <section
      id="work"
      className="relative py-20 md:py-28 px-5 sm:px-8 md:px-12"
      style={{ background: '#0C0C0C', borderRadius: '40px 40px 0 0' }}
    >
      {/* Section heading */}
      <div className="overflow-hidden mb-2 max-w-7xl mx-auto">
        <FadeIn y={50} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            SELECTED WORK
          </h2>
        </FadeIn>
      </div>
      <FadeIn y={16} delay={0.1}>
        <p className="text-white/25 font-light uppercase tracking-widest text-xs mb-4 max-w-7xl mx-auto">
          Organised by discipline — click a service below to jump straight to its work.
        </p>
      </FadeIn>

      {/* Quick-jump nav pills */}
      <FadeIn y={12} delay={0.18}>
        <div className="flex flex-wrap gap-2 mb-4 max-w-7xl mx-auto">
          {serviceWork.map((s) => (
            <a
              key={s.id}
              href={`#work-${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`work-${s.id}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[10px] sm:text-xs uppercase tracking-widest font-medium px-3 py-1.5 rounded-full no-underline transition-all duration-200 btn-ghost text-white/50 hover:text-white/90"
            >
              {s.number} {s.title}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* All service groups */}
      <div className="max-w-7xl mx-auto">
        {serviceWork.map((service) => (
          <ServiceGroup key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

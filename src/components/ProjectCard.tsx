import { motion, MotionValue } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { type Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  scale: MotionValue<number>;
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.mediaType === 'video' && project.mediaUrl) {
    return (
      <div
        className="w-full rounded-2xl overflow-hidden"
        style={{ background: '#080808', border: '1px solid rgba(215,226,234,0.07)' }}
      >
        <video
          src={project.mediaUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block"
          style={{ objectFit: 'contain', display: 'block' }}
          aria-label={`${project.title} project preview`}
        />
      </div>
    );
  }

  if (project.mediaType === 'image' && project.mediaUrl) {
    return (
      <div
        className="w-full rounded-2xl overflow-hidden"
        style={{ background: '#080808', border: '1px solid rgba(215,226,234,0.07)' }}
      >
        <img
          src={project.mediaUrl}
          alt={`${project.title} project preview`}
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
        className="font-black uppercase tracking-tight"
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 4rem)',
          background: 'linear-gradient(160deg, #ffffff 0%, #8ca0b0 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {project.title}
      </p>
    </div>
  );
}

export default function ProjectCard({ project, index, scale }: ProjectCardProps) {
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
            {/* Gradient project number */}
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
              {project.number}
            </span>
            <p
              className="text-white/30 uppercase tracking-[0.18em] font-medium"
              style={{ fontSize: 'clamp(0.55rem, 0.9vw, 0.72rem)' }}
            >
              {project.category}
            </p>
          </div>

          {/* View project button */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 uppercase tracking-[0.15em] font-semibold text-white text-[10px] sm:text-xs rounded-full px-4 py-2 no-underline mt-1 btn-gradient"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink size={12} aria-hidden="true" />
              VIEW PROJECT
            </a>
          ) : (
            <span className="btn-ghost flex items-center gap-2 uppercase tracking-[0.15em] font-medium text-white/25 text-[10px] sm:text-xs rounded-full px-4 py-2 mt-1 cursor-not-allowed">
              <ExternalLink size={12} aria-hidden="true" />
              VIEW PROJECT
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
          {project.title}
        </h3>

        {/* Media — full image, no crop */}
        <ProjectMedia project={project} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <p
            className="text-white/50 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.82rem, 1.2vw, 1rem)', maxWidth: 480 }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:justify-end shrink-0">
            {project.tags.map((tag) => (
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

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Magnet from './Magnet';
import FadeIn from './FadeIn';
import { socialLinks } from '../data/projects';
import ameyFull from '../assets/ameyfulllenghtanimation-removebg-preview.png';

// Instagram SVG icon
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center overflow-hidden"
      style={{ background: '#0C0C0C', paddingTop: 'clamp(5rem, 10vw, 9rem)' }}
    >
      {/* Purple ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl px-5 sm:px-8 md:px-12">

        {/* Heading */}
        <div className="overflow-hidden">
          <FadeIn y={60} duration={0.9}>
            <h2
              className="font-black uppercase tracking-tight leading-none hero-heading"
              style={{ fontSize: 'clamp(3rem, 11vw, 140px)' }}
            >
              LET'S BUILD
            </h2>
          </FadeIn>
        </div>
        <div className="overflow-hidden mb-8 md:mb-12">
          <FadeIn y={60} duration={0.9} delay={0.08}>
            <h2
              className="font-black uppercase tracking-tight leading-none"
              style={{
                fontSize: 'clamp(3rem, 11vw, 140px)',
                background: 'linear-gradient(135deg, #e879f9 0%, #a855f7 40%, #6366f1 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              SOMETHING.
            </h2>
          </FadeIn>
        </div>

        <FadeIn y={24} delay={0.2}>
          <p
            className="text-white/50 font-light leading-relaxed mb-10"
            style={{ fontSize: 'clamp(0.88rem, 1.5vw, 1.1rem)', maxWidth: 480 }}
          >
            Have an idea, project or business problem you'd like to turn into software? Let's talk.
          </p>
        </FadeIn>

        {/* Primary CTA — opens WhatsApp direct chat */}
        <FadeIn y={24} delay={0.3}>
          <Magnet padding={160} strength={3}>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-block text-white uppercase tracking-[0.18em] font-semibold text-xs sm:text-sm md:text-base rounded-full px-10 sm:px-14 py-4 md:py-5 no-underline mb-4 flex items-center gap-3"
              aria-label="Chat with Amey on WhatsApp"
            >
              {/* WhatsApp icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              GET IN TOUCH
            </a>
          </Magnet>
        </FadeIn>

        {/* Quick contact info */}
        <FadeIn y={16} delay={0.35}>
          <div className="flex items-center gap-5 mb-10 flex-wrap justify-center">
            <a
              href={socialLinks.email}
              className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-200 text-xs font-light no-underline"
              aria-label="Email address"
            >
              <Mail size={12} aria-hidden="true" />
              ameychikane11@gmail.com
            </a>
            <div className="w-px h-3 bg-white/10" aria-hidden="true" />
            <a
              href={socialLinks.phone}
              className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-200 text-xs font-light no-underline"
              aria-label="Phone number"
            >
              <Phone size={12} aria-hidden="true" />
              +91 79775 44647
            </a>
          </div>
        </FadeIn>

        {/* Social links row */}
        <FadeIn y={16} delay={0.42}>
          <div className="flex items-center gap-3 sm:gap-5 mb-12 md:mb-16 flex-wrap justify-center">

            {/* Instagram (main) */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2 text-white/55 hover:text-white/90 font-medium uppercase tracking-[0.15em] text-[10px] sm:text-xs no-underline rounded-full px-4 py-2 transition-all duration-200"
              aria-label="Amey's Instagram"
            >
              <InstagramIcon size={15} />
              Instagram
            </a>

            <div className="w-px h-4 bg-white/8" aria-hidden="true" />

            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2 text-white/55 hover:text-white/90 font-medium uppercase tracking-[0.15em] text-[10px] sm:text-xs no-underline rounded-full px-4 py-2 transition-all duration-200"
              aria-label="Amey's GitHub"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>

            <div className="w-px h-4 bg-white/8" aria-hidden="true" />

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2 text-white/55 hover:text-white/90 font-medium uppercase tracking-[0.15em] text-[10px] sm:text-xs no-underline rounded-full px-4 py-2 transition-all duration-200"
              aria-label="Amey's LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>

            <div className="w-px h-4 bg-white/8" aria-hidden="true" />

            {/* TerabitSupport Instagram */}
            <a
              href={socialLinks.instagramAlt}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2 text-white/55 hover:text-white/90 font-medium uppercase tracking-[0.15em] text-[10px] sm:text-xs no-underline rounded-full px-4 py-2 transition-all duration-200"
              aria-label="Terabit Support Instagram"
            >
              <InstagramIcon size={15} />
              Terabit
            </a>

          </div>
        </FadeIn>

        {/* ── Full-length figure with clickable hand digits ── */}
        <FadeIn y={40} delay={0.15}>
          <div
            className="relative mx-auto"
            style={{ width: 'clamp(180px, 26vw, 320px)' }}
          >
            {/* Amey full PNG */}
            <motion.img
              src={ameyFull}
              alt="Amey Chikane"
              className="w-full h-auto block"
              style={{ filter: 'drop-shadow(0 -16px 48px rgba(168,85,247,0.2))' }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />

            {/*
              Left hand digit — 6
              Pixel scan confirmed hand at x≈8%, y≈44–51% of image.
              top: 38% places digit at hand level.
            */}
            <motion.div
              className="absolute z-20"
              style={{ top: '38%', left: '2%', transformOrigin: 'left center' }}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-black leading-none no-underline cursor-pointer"
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 3.4rem)',
                  background: 'linear-gradient(160deg, #ffffff 0%, #c084fc 55%, #818cf8 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: "'Kanit', sans-serif",
                  letterSpacing: '-0.04em',
                }}
                whileHover={{ scale: 1.3, y: -6 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                aria-label="Visit Amey's Instagram — @ameyychikane"
                title="@ameyychikane on Instagram"
              >
                6
              </motion.a>
            </motion.div>

            {/*
              Right hand digit — 7
              Links to Terabit Support Instagram.
            */}
            <motion.div
              className="absolute z-20"
              style={{ top: '38%', right: '2%', transformOrigin: 'right center' }}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.a
                href={socialLinks.instagramAlt}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-black leading-none no-underline cursor-pointer"
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 3.4rem)',
                  background: 'linear-gradient(160deg, #f9a8d4 0%, #ec4899 55%, #a855f7 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: "'Kanit', sans-serif",
                  letterSpacing: '-0.04em',
                }}
                whileHover={{ scale: 1.3, y: -6 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                aria-label="Visit Terabit Support Instagram"
                title="@terabitsupport on Instagram"
              >
                7
              </motion.a>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      {/* ── Footer bar ── */}
      <motion.footer
        className="w-full flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10 py-5 gap-2 mt-4"
        style={{ borderTop: '1px solid rgba(215,226,234,0.06)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p className="text-white/20 font-light text-[10px] sm:text-xs uppercase tracking-widest">
          © 2026 Amey Ravindra Chikane
        </p>
        <p className="text-white/15 font-light text-[10px] sm:text-xs uppercase tracking-widest">
          Built with curiosity.
        </p>
      </motion.footer>
    </section>
  );
}

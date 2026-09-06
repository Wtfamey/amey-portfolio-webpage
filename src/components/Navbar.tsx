import { motion } from 'framer-motion';
import ameyFace from '../assets/ameyfaceanimated-removebg-preview.png';

const links = ['ABOUT', 'WORK', 'SERVICES', 'CONTACT'];

export default function Navbar() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-12 pt-4 md:pt-5 pb-4"
      style={{
        background: 'linear-gradient(to bottom, rgba(12,12,12,0.9) 0%, rgba(12,12,12,0) 100%)',
      }}
    >
      {/* Face avatar — larger, styled round frame */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="group flex items-center"
        aria-label="Amey Chikane — back to top"
      >
        <div
          className="relative flex items-end justify-center overflow-hidden transition-all duration-300"
          style={{
            width: 'clamp(54px, 6vw, 78px)',
            height: 'clamp(54px, 6vw, 78px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 50% 100%, rgba(168,85,247,0.18) 0%, rgba(12,12,12,0.8) 70%)',
            border: '1.5px solid rgba(168,85,247,0.25)',
            boxShadow: '0 0 20px rgba(168,85,247,0.12), inset 0 0 20px rgba(168,85,247,0.06)',
          }}
        >
          {/* Glow ring on hover */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: '0 0 28px rgba(168,85,247,0.35)',
              border: '1.5px solid rgba(168,85,247,0.55)',
              borderRadius: '50%',
            }}
          />
          {/* Face image — slightly overflows upward to show full face */}
          <img
            src={ameyFace}
            alt="Amey Chikane"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-500"
            style={{
              width: '130%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'bottom',
            }}
          />
        </div>
      </a>

      {/* Nav links */}
      <ul className="flex items-center gap-4 sm:gap-7 md:gap-10 list-none">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNav(e, link.toLowerCase())}
              className="relative text-light/70 hover:text-light text-xs sm:text-sm md:text-base lg:text-[1.05rem] font-medium uppercase tracking-[0.15em] transition-colors duration-200 no-underline group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

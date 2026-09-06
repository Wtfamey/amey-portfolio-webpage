import { useRef, useEffect, useState } from 'react';
import { chandasImg, rautImg, ecoevImg } from '../data/projects';

// ── External GIF assets ──
const GIFS_A = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
];

const GIFS_B = [
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
];

// ── Project images (local, guaranteed to load) ──
interface Tile {
  src: string;
  label: string;
  isProject?: boolean;
}

// Row 1: weave project screenshots in at positions 0, 4 → Chanda's, EcoEV
const ROW1_TILES: Tile[] = [
  { src: chandasImg, label: "Chanda's Group — Client Project", isProject: true },
  { src: GIFS_A[0], label: 'Space Voyage' },
  { src: GIFS_A[1], label: 'Codenest' },
  { src: GIFS_A[2], label: 'Vex Ventures' },
  { src: ecoevImg,  label: 'EcoEV — Web Application', isProject: true },
  { src: GIFS_A[3], label: 'Stellar AI v2' },
  { src: GIFS_A[4], label: 'ASME' },
  { src: GIFS_A[5], label: 'Transform Data' },
  { src: GIFS_A[6], label: 'Vitara' },
  { src: GIFS_A[7], label: 'Terra' },
];

// Row 2: weave Raut Law Firm in at position 2
const ROW2_TILES: Tile[] = [
  { src: GIFS_B[0], label: 'Skyelite' },
  { src: GIFS_B[1], label: 'Aethera' },
  { src: rautImg,   label: 'Raut Law Firm — Client Project', isProject: true },
  { src: GIFS_B[2], label: 'Stellar AI' },
  { src: GIFS_B[3], label: 'XPortfolio' },
  { src: GIFS_B[4], label: 'Orbit Web3' },
  { src: GIFS_B[5], label: 'Nexora' },
  { src: GIFS_B[6], label: 'Planet Orbit' },
  { src: GIFS_B[7], label: 'Luminex' },
];

// Triplicate for seamless scroll
const row1Items = [...ROW1_TILES, ...ROW1_TILES, ...ROW1_TILES];
const row2Items = [...ROW2_TILES, ...ROW2_TILES, ...ROW2_TILES];

interface MarqueeRowProps {
  items: Tile[];
  direction: 'right' | 'left';
}

function MarqueeRow({ items, direction }: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const sectionEl = rowRef.current?.closest('section');
    const onScroll = () => {
      if (!sectionEl) return;
      const rect = sectionEl.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const translateX = direction === 'right' ? offset : -offset;

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={rowRef}
        className="marquee-row"
        style={{ transform: `translateX(${translateX}px)`, willChange: 'transform' }}
      >
        {items.map((tile, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-2xl overflow-hidden relative group"
            style={{
              width: 420,
              height: 270,
              minWidth: 420,
              border: tile.isProject
                ? '1.5px solid rgba(168,85,247,0.35)'
                : '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <img
              src={tile.src}
              alt={tile.label}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = 'none';
                const p = t.parentElement;
                if (p && !p.querySelector('.ph')) {
                  const d = document.createElement('div');
                  d.className = 'ph w-full h-full';
                  d.style.background = '#141414';
                  p.appendChild(d);
                }
              }}
            />
            {/* Project badge */}
            {tile.isProject && (
              <div
                className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-semibold text-white/80"
                style={{ background: 'rgba(168,85,247,0.35)', backdropFilter: 'blur(6px)' }}
              >
                MY WORK
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      id="showcase"
      className="py-16 md:py-24 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="mb-5 px-6 md:px-10 flex items-center gap-3">
        <p className="text-white/25 text-xs uppercase tracking-widest font-medium">
          Selected Work &amp; Inspiration
        </p>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1Items} direction="right" />
        <MarqueeRow items={row2Items} direction="left" />
      </div>
    </section>
  );
}

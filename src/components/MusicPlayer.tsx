import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import track1 from '../assets/Bad Trip.mp3';
import track2 from '../assets/LONOWN, riserayss - worry (ultra slowed).mp3';
import track3 from '../assets/PARTYNEXTDOOR - Recognize (feat. Drake) [Official Music Video].mp3';
import track4 from '../assets/Yeat - Purpose General.mp3';

const TRACKS = [
  { title: 'Purpose General', artist: 'Yeat',                  src: track4 },
  { title: 'Bad Trip',        artist: 'Unknown',               src: track1 },
  { title: 'Worry',           artist: 'LONOWN × riserayss',    src: track2 },
  { title: 'Recognize',       artist: 'PARTYNEXTDOOR ft. Drake', src: track3 },
];

function fmt(s: number) {
  if (!isFinite(s)) return '0:00';
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

export default function MusicPlayer() {
  const [idx, setIdx]         = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const rafRef   = useRef<number>(0);
  const track    = TRACKS[idx];
  const pct      = duration > 0 ? (progress / duration) * 100 : 0;

  /* smooth progress */
  useEffect(() => {
    const tick = () => {
      if (audioRef.current && !audioRef.current.paused)
        setProgress(audioRef.current.currentTime);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* reload on track change */
  useEffect(() => {
    const a = audioRef.current; if (!a) return;
    a.load();
    if (playing) a.play().catch(() => setPlaying(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const toggle = () => {
    const a = audioRef.current; if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else          { a.play().catch(() => setPlaying(false)); setPlaying(true); }
  };
  const prev = () => setIdx((i) => (i - 1 + TRACKS.length) % TRACKS.length);
  const next = () => setIdx((i) => (i + 1) % TRACKS.length);
  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = v;
    setProgress(v);
  };

  return (
    <motion.div
      className="absolute bottom-24 left-1/2 z-20 px-3 w-full max-w-sm"
      style={{ translateX: '-50%' }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0,  scale: 1 }}
      transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <audio
        ref={audioRef}
        src={track.src}
        onLoadedMetadata={(e) => setDuration((e.target as HTMLAudioElement).duration)}
        onEnded={next}
        preload="metadata"
      />

      {/* ── outer glow ring ── */}
      <div
        className="absolute -inset-3 rounded-[28px] pointer-events-none"
        style={{
          background: playing
            ? 'radial-gradient(ellipse at 50% 110%, rgba(168,85,247,0.28) 0%, rgba(236,72,153,0.12) 40%, transparent 70%)'
            : 'radial-gradient(ellipse at 50% 110%, rgba(168,85,247,0.10) 0%, transparent 60%)',
          filter: 'blur(18px)',
          transition: 'background 0.6s ease',
        }}
        aria-hidden="true"
      />

      {/* ── liquid-glass shell ── */}
      <div
        className="relative rounded-[22px] overflow-hidden"
        style={{
          minWidth: 'clamp(240px, 32vw, 380px)',
          /* true liquid-glass layering */
          background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 50%, rgba(168,85,247,0.06) 100%)',
          backdropFilter: 'blur(32px) saturate(180%)',
          WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: `
            0 2px 0 rgba(255,255,255,0.12) inset,
            0 -1px 0 rgba(255,255,255,0.05) inset,
            0 12px 60px rgba(0,0,0,0.55),
            0 0 0 0.5px rgba(168,85,247,0.18)
          `,
        }}
      >
        {/* noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: 0.025,
            mixBlendMode: 'overlay',
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-3 px-4 py-3.5">

          {/* ── top row ── */}
          <div className="flex items-center gap-3">

            {/* visualiser */}
            <div className="flex items-end gap-[3px] shrink-0 h-5" aria-hidden="true">
              {[0.55, 1, 0.7, 0.85, 0.45].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-[3px] rounded-full origin-bottom"
                  style={{
                    background: 'linear-gradient(to top, #a855f7, #f472b6)',
                    height: `${h * 20}px`,
                  }}
                  animate={playing
                    ? { scaleY: [1, 0.3 + h * 0.35, 1] }
                    : { scaleY: 0.12 }}
                  transition={{
                    duration: 0.45 + i * 0.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.06,
                  }}
                />
              ))}
            </div>

            {/* track info */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={track.title}
                  className="font-semibold leading-tight truncate text-white"
                  style={{ fontSize: 'clamp(0.72rem, 1.3vw, 0.85rem)' }}
                  initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}
                >
                  {track.title}
                </motion.p>
              </AnimatePresence>
              <p className="text-white/35 truncate" style={{ fontSize: 'clamp(0.58rem, 0.9vw, 0.68rem)' }}>
                {track.artist}
              </p>
            </div>

            {/* expand toggle */}
            <button
              onClick={() => setExpanded(v => !v)}
              className="shrink-0 text-white/25 hover:text-white/60 transition-colors duration-200 p-1 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.06)' }}
              aria-label={expanded ? 'Collapse' : 'Expand'}
            >
              <motion.svg
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.28 }}
              >
                <polyline points="18 15 12 9 6 15"/>
              </motion.svg>
            </button>
          </div>

          {/* ── slim progress bar (always visible) ── */}
          <div
            className="relative h-[3px] rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: `${pct}%`,
                background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                boxShadow: playing ? '0 0 8px rgba(168,85,247,0.7)' : 'none',
              }}
              transition={{ duration: 0.1 }}
            />
            <input
              type="range" min={0} max={duration || 1} step={0.5} value={progress}
              onChange={seek}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Seek"
            />
          </div>

          {/* ── controls row ── */}
          <div className="flex items-center justify-between gap-2">

            {/* timestamps */}
            <span className="text-white/25 tabular-nums font-light" style={{ fontSize: '0.6rem' }}>
              {fmt(progress)}
            </span>

            {/* prev / play / next */}
            <div className="flex items-center gap-4">
              <button onClick={prev} className="text-white/35 hover:text-white/80 transition-colors duration-150" aria-label="Previous">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>
                </svg>
              </button>

              {/* play button — pill shaped glass */}
              <motion.button
                onClick={toggle}
                className="relative flex items-center justify-center rounded-full overflow-hidden"
                style={{
                  width: 40, height: 40,
                  background: playing
                    ? 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
                    : 'linear-gradient(135deg, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.3) 100%)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: playing
                    ? '0 0 24px rgba(168,85,247,0.55), inset 0 1px 0 rgba(255,255,255,0.25)'
                    : 'inset 0 1px 0 rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(12px)',
                  transition: 'background 0.3s ease, box-shadow 0.3s ease',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                aria-label={playing ? 'Pause' : 'Play'}
              >
                <AnimatePresence mode="wait">
                  {playing ? (
                    <motion.svg key="p" width="13" height="13" viewBox="0 0 24 24" fill="white"
                      initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.12 }}
                    >
                      <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
                    </motion.svg>
                  ) : (
                    <motion.svg key="pl" width="13" height="13" viewBox="0 0 24 24" fill="white"
                      initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.12 }}
                    >
                      <polygon points="6,3 20,12 6,21"/>
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.button>

              <button onClick={next} className="text-white/35 hover:text-white/80 transition-colors duration-150" aria-label="Next">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18l8.5-6L6 6v12zm2.5-6 8.5-6v12z"/>
                  <path d="M16 6h2v12h-2z"/>
                </svg>
              </button>
            </div>

            <span className="text-white/25 tabular-nums font-light" style={{ fontSize: '0.6rem' }}>
              {fmt(duration)}
            </span>
          </div>

          {/* ── expanded: tracklist ── */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="flex flex-col gap-0.5 pt-2"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {TRACKS.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => { setIdx(i); setPlaying(true); }}
                      className="flex items-center gap-2.5 w-full text-left px-2 py-1.5 rounded-xl transition-all duration-150"
                      style={{
                        background: i === idx
                          ? 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.08))'
                          : 'transparent',
                        border: i === idx ? '1px solid rgba(168,85,247,0.2)' : '1px solid transparent',
                      }}
                    >
                      {i === idx && playing ? (
                        <div className="flex items-end gap-[2px] shrink-0 w-4 h-3" aria-hidden="true">
                          {[1, 0.6, 0.9].map((h, j) => (
                            <motion.div key={j} className="w-[2px] rounded-full"
                              style={{ background: '#c084fc', height: `${h * 12}px` }}
                              animate={{ scaleY: [1, 0.3, 1] }}
                              transition={{ duration: 0.4, repeat: Infinity, delay: j * 0.08, ease: 'easeInOut' }}
                            />
                          ))}
                        </div>
                      ) : (
                        <span className="font-medium tabular-nums shrink-0 w-4 text-center"
                          style={{ fontSize: '0.6rem', color: i === idx ? '#c084fc' : 'rgba(255,255,255,0.2)' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      )}
                      <span className="truncate font-medium"
                        style={{ fontSize: '0.7rem', color: i === idx ? '#fff' : 'rgba(255,255,255,0.38)' }}
                      >
                        {t.title}
                      </span>
                      <span className="ml-auto truncate font-light shrink-0"
                        style={{ fontSize: '0.6rem', color: i === idx ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)' }}
                      >
                        {t.artist}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  );
}

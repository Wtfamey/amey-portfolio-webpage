import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const services = [
  {
    number: '01',
    title: 'FULL-STACK DEVELOPMENT',
    description: 'Building responsive, scalable web applications and backend systems for real-world business requirements.',
    workId: 'work-fullstack',
  },
  {
    number: '02',
    title: 'AI / MACHINE LEARNING',
    description: 'Building AI-powered applications, intelligent workflows, automation systems and ML solutions.',
    workId: 'work-aiml',
  },
  {
    number: '03',
    title: 'WEB DESIGN & DEVELOPMENT',
    description: 'Designing and developing modern websites focused on performance, usability and strong visual identity.',
    workId: 'work-webdesign',
  },
  {
    number: '04',
    title: 'SOFTWARE & SaaS',
    description: 'Turning product ideas into functional software platforms with authentication, dashboards, APIs and databases.',
    workId: 'work-saas',
  },
  {
    number: '05',
    title: 'CLIENT SOLUTIONS',
    description: 'Working directly with businesses to understand their requirements and deliver practical technology solutions.',
    workId: 'work-client',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 px-5 sm:px-8 md:px-12"
      style={{
        background: '#FFFFFF',
        borderRadius: '48px 48px 0 0',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="overflow-hidden mb-14 md:mb-20">
          <FadeIn y={50} duration={0.8}>
            <h2
              className="font-black uppercase tracking-tight leading-none text-center"
              style={{
                fontSize: 'clamp(2.8rem, 11vw, 150px)',
                background: 'linear-gradient(160deg, #111 0%, #444 60%, #888 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              SERVICES
            </h2>
          </FadeIn>
        </div>

        {/* Service rows */}
        <ul className="list-none">
          {services.map((service, i) => (
            <motion.li
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '30px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 md:py-9 cursor-default"
                style={{ borderTop: '1px solid rgba(12,12,12,0.1)' }}
              >
                {/* Gradient number */}
                <span
                  className="font-black shrink-0 leading-none transition-all duration-300"
                  style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                    background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    opacity: 0.5,
                    transition: 'opacity 0.3s ease',
                  }}
                  aria-hidden="true"
                >
                  {service.number}
                </span>

                {/* Title + description */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-10">
                  <h3
                    className="font-bold uppercase tracking-tight leading-tight group-hover:tracking-widest transition-all duration-500"
                    style={{
                      color: '#0C0C0C',
                      fontSize: 'clamp(1.1rem, 2.2vw, 1.9rem)',
                    }}
                  >
                    {service.title}
                  </h3>
                  <div className="flex flex-col sm:items-end gap-2 sm:max-w-xs md:max-w-sm shrink-0">
                    <p
                      className="font-light leading-relaxed"
                      style={{ color: 'rgba(12,12,12,0.5)', fontSize: 'clamp(0.82rem, 1.1vw, 0.95rem)' }}
                    >
                      {service.description}
                    </p>
                    <a
                      href={`#${service.workId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(service.workId)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 no-underline font-semibold uppercase tracking-widest transition-all duration-200 hover:gap-3"
                      style={{
                        fontSize: 'clamp(0.6rem, 0.9vw, 0.72rem)',
                        background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                      aria-label={`View ${service.title} work`}
                    >
                      VIEW WORK
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="url(#arrow-grad)" strokeWidth="2.5" strokeLinecap="round">
                        <defs>
                          <linearGradient id="arrow-grad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#a855f7"/>
                            <stop offset="100%" stopColor="#6366f1"/>
                          </linearGradient>
                        </defs>
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {i === services.length - 1 && (
                <div style={{ borderTop: '1px solid rgba(12,12,12,0.1)' }} />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import chandasImg from '../assets/chanda\'s group.png';
import rautImg from '../assets/rautlawfirm.png';
import ecoevImg from '../assets/ecoev.png';

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  liveUrl: string | null;
  placeholder?: boolean;
}

export interface ServiceSection {
  id: string;
  number: string;
  title: string;
  accent: string; // gradient string for the number/accent
  works: WorkItem[];
}

// Marquee GIF sources reused as placeholders
const GIF = (slug: string) => `https://motionsites.ai/assets/${slug}`;

export const serviceWork: ServiceSection[] = [
  {
    id: 'fullstack',
    number: '01',
    title: 'FULL-STACK DEVELOPMENT',
    accent: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
    works: [
      {
        id: 'chandas',
        title: "Chanda's Group",
        description: 'Full property listing & management portal — public site, admin dashboard, listings and client workflow built end-to-end.',
        tags: ['React', 'Node.js', 'MongoDB', 'Admin Dashboard'],
        image: chandasImg,
        liveUrl: null,
      },
      {
        id: 'ecoev',
        title: 'EcoEV Platform',
        description: 'Modern electric vehicle web platform with clean UI, responsive design and practical EV ecosystem features.',
        tags: ['React', 'Tailwind', 'REST API', 'Responsive'],
        image: ecoevImg,
        liveUrl: null,
      },
      {
        id: 'fs3',
        title: 'SaaS Dashboard',
        description: 'Full-stack SaaS product with authentication, role-based access, real-time data and API integrations.',
        tags: ['Next.js', 'PostgreSQL', 'Auth', 'SaaS'],
        image: GIF('hero-codenest-preview-Cgppc2qV.gif'),
        liveUrl: null,
        placeholder: true,
      },
    ],
  },
  {
    id: 'aiml',
    number: '02',
    title: 'AI / MACHINE LEARNING',
    accent: 'linear-gradient(135deg, #e879f9 0%, #a855f7 100%)',
    works: [
      {
        id: 'aiml1',
        title: 'Intelligent Automation',
        description: 'AI-powered workflow automation system — connects data sources, applies ML models and surfaces actionable insights.',
        tags: ['Python', 'TensorFlow', 'Automation', 'API'],
        image: GIF('hero-stellar-ai-v2-preview-DjvxjG3C.gif'),
        liveUrl: null,
        placeholder: true,
      },
      {
        id: 'aiml2',
        title: 'NLP Text Pipeline',
        description: 'Natural language processing pipeline for document classification, entity extraction and sentiment analysis.',
        tags: ['Python', 'NLP', 'spaCy', 'Classification'],
        image: GIF('hero-stellar-ai-preview-D3HL6bw1.gif'),
        liveUrl: null,
        placeholder: true,
      },
      {
        id: 'aiml3',
        title: 'Computer Vision Module',
        description: 'Image recognition module integrated into a real business pipeline for automated content tagging.',
        tags: ['OpenCV', 'PyTorch', 'Vision', 'ML'],
        image: GIF('hero-transform-data-preview-Cx5OU29N.gif'),
        liveUrl: null,
        placeholder: true,
      },
    ],
  },
  {
    id: 'webdesign',
    number: '03',
    title: 'WEB DESIGN & DEVELOPMENT',
    accent: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
    works: [
      {
        id: 'rautlaw',
        title: 'Raut Law Firm',
        description: 'Professional legal website — credibility-first design, service presentation, mobile responsive and accessibility focused.',
        tags: ['Web Design', 'React', 'Responsive', 'Client'],
        image: rautImg,
        liveUrl: null,
      },
      {
        id: 'webdesign2',
        title: 'Creative Agency Site',
        description: 'Motion-heavy creative portfolio site with scroll animations, custom cursor and premium typography system.',
        tags: ['Framer Motion', 'GSAP', 'Design', 'Portfolio'],
        image: GIF('hero-nexora-preview-cx5HmUgo.gif'),
        liveUrl: null,
        placeholder: true,
      },
      {
        id: 'webdesign3',
        title: 'Product Landing Page',
        description: 'High-converting SaaS landing page with animated sections, pricing, testimonials and CTA optimisation.',
        tags: ['Landing Page', 'Conversion', 'Tailwind', 'Vite'],
        image: GIF('hero-vitara-preview-Cjz2QYyU.gif'),
        liveUrl: null,
        placeholder: true,
      },
    ],
  },
  {
    id: 'saas',
    number: '04',
    title: 'SOFTWARE & SaaS',
    accent: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    works: [
      {
        id: 'saas1',
        title: 'Project Management Tool',
        description: 'SaaS project tool with Kanban boards, team collaboration, task tracking and notification system.',
        tags: ['SaaS', 'Real-time', 'Auth', 'Dashboard'],
        image: GIF('hero-xportfolio-preview-D4A8maiC.gif'),
        liveUrl: null,
        placeholder: true,
      },
      {
        id: 'saas2',
        title: 'Analytics Platform',
        description: 'Data analytics dashboard with live charts, filterable reports, CSV export and API-based data ingestion.',
        tags: ['Charts', 'PostgreSQL', 'Analytics', 'API'],
        image: GIF('hero-orbit-web3-preview-BXt4OttD.gif'),
        liveUrl: null,
        placeholder: true,
      },
      {
        id: 'saas3',
        title: 'Booking & Scheduling App',
        description: 'Appointment booking platform with calendar sync, email reminders, payment integration and admin panel.',
        tags: ['Booking', 'Stripe', 'Calendar', 'Node.js'],
        image: GIF('hero-aethera-preview-DknSlcTa.gif'),
        liveUrl: null,
        placeholder: true,
      },
    ],
  },
  {
    id: 'client',
    number: '05',
    title: 'CLIENT SOLUTIONS',
    accent: 'linear-gradient(135deg, #34d399 0%, #38bdf8 100%)',
    works: [
      {
        id: 'client1',
        title: "Chanda's Group Portal",
        description: 'End-to-end client engagement — requirements gathering, design, development, testing and delivery.',
        tags: ['Client Work', 'Full-Stack', 'Property', 'Delivery'],
        image: chandasImg,
        liveUrl: null,
      },
      {
        id: 'client2',
        title: 'Raut Law Firm Site',
        description: 'Client-first approach — understood legal sector requirements and translated them into a trustworthy digital presence.',
        tags: ['Client Work', 'Legal', 'Design', 'Web Dev'],
        image: rautImg,
        liveUrl: null,
      },
      {
        id: 'client3',
        title: 'Business Automation',
        description: 'Custom software solution for a small business — automated their manual workflow saving hours of weekly work.',
        tags: ['Automation', 'Python', 'Client', 'Business'],
        image: GIF('hero-terra-preview-BFjrCr7T.gif'),
        liveUrl: null,
        placeholder: true,
      },
    ],
  },
];

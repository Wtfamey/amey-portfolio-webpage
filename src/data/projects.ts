// Static image imports — Vite resolves these at build time
import chandasImg from '../assets/chanda\'s group.png';
import rautImg from '../assets/rautlawfirm.png';
import ecoevImg from '../assets/ecoev.png';

export interface Project {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  mediaType: 'video' | 'image';
  mediaUrl: string;
  liveUrl: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: "Chanda's Group",
    category: 'Client — Property Management Platform',
    description:
      "A complete property-focused digital platform combining a public-facing website with property listing and management functionality, built around the client's real operational requirements.",
    tags: [
      'PROPERTY LISTINGS',
      'PROPERTY MANAGEMENT',
      'ADMIN DASHBOARD',
      'RESPONSIVE UI',
      'CLIENT WORKFLOW',
    ],
    mediaType: 'image',
    mediaUrl: chandasImg,
    liveUrl: null,
  },
  {
    id: 2,
    number: '02',
    title: 'Raut Law Firm',
    category: 'Client — Legal Website',
    description:
      'A professional digital presence designed for a law firm, focusing on credibility, clarity, responsive design and an accessible presentation of legal services.',
    tags: [
      'CLIENT PROJECT',
      'RESPONSIVE DESIGN',
      'PROFESSIONAL UI',
      'SERVICE PRESENTATION',
      'WEB DEVELOPMENT',
    ],
    mediaType: 'image',
    mediaUrl: rautImg,
    liveUrl: null,
  },
  {
    id: 3,
    number: '03',
    title: 'EcoEV',
    category: 'Web Application — Electric Vehicle Platform',
    description:
      'A modern web platform built around the electric vehicle ecosystem, combining clean UI with practical functionality to serve EV owners and enthusiasts.',
    tags: [
      'WEB APPLICATION',
      'CLEAN UI',
      'RESPONSIVE DESIGN',
      'FRONTEND DEV',
      'MODERN STACK',
    ],
    mediaType: 'image',
    mediaUrl: ecoevImg,
    liveUrl: null,
  },
];

// ── Real social / contact links ──
export const socialLinks = {
  instagram: 'https://www.instagram.com/ameyychikane/',
  instagramAlt: 'https://www.instagram.com/terabitsupport/reels/',
  github: 'https://github.com/Wtfamey',
  linkedin: 'https://www.linkedin.com/in/amey-chikane-1b8536290/',
  email: 'mailto:ameychikane11@gmail.com',
  phone: 'tel:+917977544647',
  // WhatsApp direct chat — opens chat to Amey's number instantly
  whatsapp: 'https://wa.me/917977544647?text=Hi%20Amey%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!',
};

// Project images for the marquee strip
export { chandasImg, rautImg, ecoevImg };

// ─── TYPES ───────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  subtitle: string
  date: string
  type: 'Solo Project' | 'Group Project'
  description: string
  technologies: string[]
  features: string[]
  githubUrl: string
  liveUrl: string
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface EducationEntry {
  year: string
  degree: string
  institution: string
  grade: string
  gradeLabel: string
}

export interface Certification {
  title: string
  issuer: string
  platform: string
  credentialUrl: string
}

export interface Achievement {
  value: string
  label: string
  sublabel?: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

// ─── PERSONAL INFO ────────────────────────────────────────────────────────────

export const personal = {
  name: 'Bishweswar Roy',
  location: 'West Bengal, India',
  email: 'roybishweswar4321@gmail.com',
  phone: '+91 7811038268',
  headline: 'Full-Stack Developer & Problem Solver',
  tagline: 'Computer Science Engineering Student · Building Scalable Web Applications · 350+ DSA Problems Solved',
  intro:
    "I'm a Computer Science & Engineering student passionate about building full-stack web applications and solving Data Structures & Algorithms problems. I enjoy turning ideas into scalable, reliable, and user-friendly products using modern JavaScript technologies.",
  resumeUrl: 'https://drive.google.com/file/d/1A8QSRMHXsAuIA1gBZah4pEFybQoLM0p4/view?usp=drive_link',
}

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────

export const socials: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/Bishweswar1709', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/bishweswar-roy-99aa83292/', icon: 'linkedin' },
  { label: 'LeetCode', url: 'https://leetcode.com/u/roybishweswar4321/', icon: 'code' },
  { label: 'Codeforces', url: 'https://codeforces.com/profile/roybishweswar4321', icon: 'zap' },
]

// ─── SKILLS ───────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  { label: 'Languages', skills: ['C++', 'JavaScript', 'TypeScript', 'Python'] },
  { label: 'Frontend', skills: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Node.js', 'Express.js'] },
  { label: 'Databases', skills: ['MongoDB', 'SQL'] },
  { label: 'Tools & Tech', skills: ['Git', 'GitHub', 'Postman', 'Stripe', 'Clerk', 'Redis', 'Zustand'] },
  {
    label: 'Core CS',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'DBMS', 'Computer Networks'],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'talent-iq',
    title: 'Talent IQ',
    subtitle: 'Real-Time Coding & Video Collaboration Platform',
    date: 'Nov 2025 – Dec 2025',
    type: 'Solo Project',
    description:
      'A real-time collaboration platform designed around coding and communication workflows, combining video conferencing, chat, authentication, and event-driven backend processing.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Inngest', 'GetStream', 'Clerk', 'Tailwind CSS'],
    features: [
      'Real-time video conferencing and chat via GetStream',
      'Durable event-driven backend workflows with Inngest',
      'Secure authentication and session management using Clerk',
      'Role-based access control',
      'Responsive UI with Tailwind CSS',
      'Scalable data persistence with MongoDB Atlas',
    ],
    githubUrl: 'https://github.com/Bishweswar1709/Talent-Iq',
    liveUrl: '#REPLACE_WITH_TALENTIQ_LIVE_URL',
  },
  {
    id: 'shopsphere',
    title: 'ShopSphere',
    subtitle: 'Scalable Full-Stack E-Commerce Platform',
    date: 'Feb 2025 – Mar 2025',
    type: 'Group Project',
    description:
      'A full-stack e-commerce platform with secure authentication, shopping cart functionality, coupons, payments, caching, and an admin analytics dashboard.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Zustand', 'JWT', 'Redis', 'Stripe', 'Tailwind CSS'],
    features: [
      'Secure auth and role-based access control',
      'Cart management and coupon system',
      'Admin analytics dashboard',
      'Stripe payment integration',
      'JWT access and refresh token authentication',
      'Redis caching for performance',
      'RESTful API architecture',
    ],
    githubUrl: 'https://github.com/Bishweswar1709/ShopSphere',
    liveUrl: '#REPLACE_WITH_SHOPSPHERE_LIVE_URL',
  },
]

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  { value: '350+', label: 'DSA Problems Solved', sublabel: 'across platforms' },
  { value: '1796', label: 'LeetCode Rating', sublabel: 'Top 10% globally' },
  { value: '1506', label: 'Codeforces Rating', sublabel: 'Specialist rank' },
  { value: '8.78', label: 'CGPA', sublabel: 'out of 10.0' },
]

// ─── EDUCATION ────────────────────────────────────────────────────────────────

export const education: EducationEntry[] = [
  {
    year: '2023 – 2027',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Sister Nivedita University',
    grade: '8.78 / 10',
    gradeLabel: 'CGPA',
  },
  {
    year: '2022',
    degree: 'Class XII',
    institution: 'Sonamukhi BJ High School — WBCHSE',
    grade: '95.6%',
    gradeLabel: 'Score',
  },
  {
    year: '2020',
    degree: 'Class X',
    institution: 'Sonamukhi BJ High School — WBBSE',
    grade: '94.28%',
    gradeLabel: 'Score',
  },
]

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: 'Foundations of Data Structures and Algorithms',
    issuer: 'University of Colorado Boulder',
    platform: 'Coursera',
    credentialUrl: 'https://coursera.org/verify/specialization/TYQSH6FZQEDE',
  },
  {
    title: 'Introduction to Operating Systems',
    issuer: 'Codio',
    platform: 'Coursera',
    credentialUrl: 'https://coursera.org/verify/specialization/LHQAPAJA0JF5',
  },
]

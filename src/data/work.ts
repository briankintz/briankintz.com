// Homepage Work section content, transcribed from cv.md (briankintz/briankintz repo) — keep figures exactly as written.
// Figures are exact and must stay as written: >15×, −95%, 10,000+, 20+, 10M+.

export interface Stat {
  value: string
  label: string
}

export interface Role {
  org: string
  dates: string
  heading: string
  title: string
  achievements: string[]
}

export interface Education {
  institution: string
  degree: string
  honor: string
}

export const stats: Stat[] = [
  { value: '>15×', label: 'platform growth guided as lead architect' },
  { value: '−95%', label: 'global response times after DNS & CDN migration' },
  { value: '10,000+', label: 'daily CI jobs on Kubernetes build infrastructure' },
  { value: '20+', label: 'customers guided through cloud adoption' },
]

export const roles: Role[] = [
  {
    org: 'TEQWERK GmbH',
    dates: '2022 — present',
    heading: 'Enterprise cloud architecture',
    title: 'Senior Cloud & AI Solutions Architect',
    achievements: [
      'Lead cloud architect for a global, enterprise-scale manufacturing analytics platform, guiding >15× growth while balancing modernization, cost, and security.',
      "Roadmapped a national non-profit's hybrid infrastructure evolution — empowering individual development teams while recovering core platform-level operational ownership.",
      'Migrated a legacy SaaS platform to a Kubernetes-based cloud-native architecture, cutting customer onboarding from days to seconds.',
      'Led the migration of global e-commerce and financial web properties to modern DNS and CDN solutions, reducing response times by up to 95%.',
    ],
  },
  {
    org: 'tappz GmbH',
    dates: '2025',
    heading: 'AI product infrastructure',
    title: 'Cloud Software Architect',
    achievements: [
      'Led the technical expansion of an AI app with 10M+ users to a multi-platform architecture, redesigning user, subscription, and storage systems.',
      'Oversaw and supported the development team building a next-generation AI chat web application.',
    ],
  },
  {
    org: 'IAV GmbH',
    dates: '2012 — 2021',
    heading: 'Private cloud & DevOps platform',
    title: 'Lead DevOps Engineer · Software Engineer',
    achievements: [
      "Designed and implemented IAV's private cloud offering: on-premise, ML-enabled Kubernetes, Ceph, and DevOps infrastructure.",
      'Built the central Kubernetes build infrastructure handling 10,000+ jobs daily; drove enterprise-wide adoption of public and hybrid cloud.',
    ],
  },
]

export const education: Education = {
  institution: 'University of Rhode Island',
  degree: 'B.S. Computer Engineering & B.A. German',
  honor: 'summa cum laude',
}

export const certifications: string[] = [
  'Microsoft Azure Cloud Solutions Architecture Expert',
  'Google Professional Cloud Architect',
]

// Concept-level areas; the concrete tools live in techKeywords (rendered as chips)
export const technicalSkills: string[] = [
  'Cloud infrastructure & architecture',
  'AI-native software engineering',
  'Kubernetes & Docker',
  'Full-stack software engineering',
  'Modern web infrastructure',
  'DevOps & CI/CD',
]

// Concrete stack from cv.md, rendered as a chip row under the skills columns
export const techKeywords: string[] = [
  'Azure',
  'Google Cloud',
  'Kubernetes',
  'Docker',
  'Ceph',
  'TypeScript',
  'C#',
  'Go',
  'React',
  'Next.js',
  'Svelte',
  'Astro',
  'GitHub Actions',
  'GitLab',
  'Serverless',
  'CDN',
  'WAF',
  'DNS',
  'SEO',
]

export const softSkills: string[] = [
  'Technical & strategic consulting',
  'Leadership-level project communication',
  'Project and budget management',
  'Cultural & technical leadership',
]

// "basst scho." is Brian's own line from cv.md — his authored humor carries over verbatim (see CLAUDE.md tone rule)
export const languages: string[] = ['English (native)', 'German (fluent)', 'Bavarian (basst scho.)']

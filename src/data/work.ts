// Homepage Work section content, transcribed from cv.md (briankintz/briankintz repo) — keep figures exactly as written.
// Figures are exact and must stay as written: >10×, −95%, 10,000+, 15+, 10M+.

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
  { value: '>10×', label: 'platform growth guided as lead architect' },
  { value: '−95%', label: 'global response times after DNS & CDN migration' },
  { value: '10,000+', label: 'daily CI jobs on Kubernetes build infrastructure' },
  { value: '15+', label: 'customers guided through cloud adoption' },
]

export const roles: Role[] = [
  {
    org: 'TEQWERK GmbH',
    dates: '2022 — present',
    heading: 'Enterprise cloud architecture',
    title: 'Senior Cloud Solutions Architect',
    achievements: [
      'Lead cloud architect for a global, enterprise-scale manufacturing analytics platform through more than tenfold growth — balancing modernization, cost, and security.',
      'Migrated a legacy SaaS infrastructure to a Kubernetes-based cloud-native architecture, cutting customer onboarding from days to seconds.',
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
    dates: 'until 2021',
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

// cv.md's nested sub-bullets are folded into their parent lines
export const technicalSkills: string[] = [
  'Public & hybrid cloud infrastructure & architecture',
  'Cloud- and AI-native software engineering',
  'Kubernetes & Docker',
  'DevOps toolchains (GitHub Actions, GitLab)',
  'Software development — TypeScript, C#, Go · React & Next.js, Svelte, Astro',
  'Modern web infrastructure — serverless compute & databases · CDN, WAF, SEO',
]

export const softSkills: string[] = [
  'Technical & strategic consulting',
  'Leadership-level project communication',
  'Project and budget management',
  'Cultural & technical leadership',
]

// "basst scho." is Brian's own line from cv.md — his authored humor carries over verbatim (see CLAUDE.md tone rule)
export const languages: string[] = ['English (native)', 'German (fluent)', 'Bavarian (basst scho.)']

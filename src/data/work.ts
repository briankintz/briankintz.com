// Homepage Work section content, transcribed from cv.md (briankintz/briankintz repo) — keep figures exactly as written.
// Figures are exact and must stay as written: >10×, −95%, 10,000+, 15+.

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

export interface Credential {
  label: string
  detail: string
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
    dates: '2025 — present',
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

export const credentials: Credential[] = [
  { label: 'Certifications', detail: 'Azure Solutions Architecture Expert · Google Professional Cloud Architect' },
  {
    label: 'Education',
    detail: 'B.S. Computer Engineering & B.A. German, University of Rhode Island — summa cum laude',
  },
  { label: 'Core skills', detail: 'Kubernetes & Docker · DevOps toolchains · TypeScript, C#, Go · React & Next.js' },
  { label: 'Languages', detail: 'English (native) · German (fluent)' },
]

export type Project = {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  href: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    title: 'IBM Lifecycle Services Portal',
    description:
      'Unified dashboard for enterprise hardware renewals with personalized recommendations and contract visibility.',
    impact: 'Improved renewal forecasting accuracy by 18% and cut onboarding time from 2 weeks to 4 days.',
    tech: ['Next.js', 'Material UI', 'TypeScript', 'Victory Charts'],
    href: 'https://jigishmodi.com/case-studies/ibm',
    caseStudy: '/case-studies/ibm'
  },
  {
    title: 'Astra Launchpad',
    description:
      'Self-serve onboarding with guided tours, template gallery, and developer telemetry for DataStax Astra DB.',
    impact: 'Lifted day-7 activation by 24% and increased paid conversion 2.1x within three quarters.',
    tech: ['React', 'GraphQL', 'Apollo Client', 'Segment'],
    href: 'https://launch.astra.datastax.com'
  },
  {
    title: 'CNBC Markets 2.0',
    description:
      'Accessibility-first redesign of the CNBC markets experience with streaming data, theming, and offline fallback.',
    impact: 'Reduced Largest Contentful Paint by 55% and increased mobile session duration by 1.4x.',
    tech: ['Next.js', 'Node.js', 'Sass Modules', 'Akamai'],
    href: 'https://www.cnbc.com/markets'
  }
];

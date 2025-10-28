export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'Remix', 'Astro']
  },
  {
    label: 'UI & Design',
    items: ['Material UI', 'Tailwind', 'Storybook', 'Figma']
  },
  {
    label: 'Testing & Quality',
    items: ['Jest', 'Testing Library', 'Playwright', 'Cypress']
  },
  {
    label: 'Tooling',
    items: ['Vite', 'Webpack', 'TurboRepo', 'ESLint']
  },
  {
    label: 'Cloud & Data',
    items: ['AWS', 'Vercel', 'GraphQL', 'Kubernetes']
  }
];

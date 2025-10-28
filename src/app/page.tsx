import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import SkillsSection from '@/components/SkillsSection';
import { Box } from '@mui/material';

export const revalidate = 3600;

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <ProjectGrid />
      <SkillsSection />
    </Box>
  );
}

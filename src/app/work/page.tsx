import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

export const metadata = {
  title: 'Work · Jigish Modi',
  description: 'Selected front-end case studies spanning enterprise SaaS, developer tooling, and media storytelling.'
};

export default function WorkPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={2} sx={{ mb: 6 }}>
        <Typography variant="overline" color="text.secondary">
          WORK
        </Typography>
        <Typography variant="h3">A highlight reel of measurable product wins</Typography>
        <Typography variant="body1" color="text.secondary">
          Every engagement pairs design systems thinking with observability, so we can iterate quickly without sacrificing
          accessibility or performance budgets.
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip label="Design Systems" color="primary" variant="outlined" />
          <Chip label="Data Visualization" variant="outlined" />
          <Chip label="Accessibility" variant="outlined" />
          <Chip label="Growth" variant="outlined" />
        </Stack>
      </Stack>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.title} item xs={12} md={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

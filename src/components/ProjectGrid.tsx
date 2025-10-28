import { Box, Grid, Typography } from '@mui/material';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectGrid() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="overline" color="text.secondary">
        FEATURED WORK
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Impact-first stories from enterprise and media platforms
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

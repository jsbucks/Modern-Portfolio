import { Box, Card, CardActionArea, CardContent, Chip, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', backgroundColor: 'background.paper' }}>
      <Link href={project.href} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea sx={{ height: '100%' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Stack spacing={1}>
              <Typography variant="overline" color="text.secondary">
                {project.caseStudy ? 'Case Study' : 'Project'}
              </Typography>
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Typography variant="body2" color="primary.light">
                {project.impact}
              </Typography>
            </Stack>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {project.tech.map((tech) => (
                <Chip key={tech} label={tech} size="small" color="default" variant="outlined" />
              ))}
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

import ExperienceAccordion from '@/components/ExperienceAccordion';
import { experience } from '@/data/experience';
import { Box, Grid, Stack, Typography } from '@mui/material';

export const metadata = {
  title: 'About · Jigish Modi',
  description:
    'Front-end lead at IBM with a track record of building accessible, data-driven experiences for enterprise and media teams.'
};

export default function AboutPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Typography variant="overline" color="text.secondary">
              ABOUT
            </Typography>
            <Typography variant="h3">
              Shipping design systems and revenue-critical workflows for teams that can&apos;t afford to slow down.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I help product, design, and data teams turn complex requirements into high-performing customer journeys. At IBM,
              I partner across disciplines to steer a design system that powers renewals across 36 markets. Previously, I
              enabled developer success at DataStax and scaled editorial platforms for CNBC.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <ExperienceAccordion roles={experience} />
        </Grid>
      </Grid>
    </Box>
  );
}

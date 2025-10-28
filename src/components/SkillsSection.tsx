import { Box, Card, CardContent, Chip, Grid, Typography } from '@mui/material';
import { skillGroups } from '@/data/skills';

export default function SkillsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="overline" color="text.secondary">
        TOOLKIT
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        The stack I lean on to move fast without breaking accessibility
      </Typography>
      <Grid container spacing={3}>
        {skillGroups.map((group) => (
          <Grid key={group.label} item xs={12} md={6} lg={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                  {group.label}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {group.items.map((item) => (
                    <Chip key={item} label={item} variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

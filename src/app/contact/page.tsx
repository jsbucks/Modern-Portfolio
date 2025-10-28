import ContactPanel from '@/components/ContactPanel';
import { Box, Stack, Typography } from '@mui/material';

export const metadata = {
  title: 'Contact · Jigish Modi',
  description: 'Ready to collaborate on the next product milestone? Reach out for availability and tailored work samples.'
};

export default function ContactPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Typography variant="overline" color="text.secondary">
          CONTACT
        </Typography>
        <Typography variant="h3">Tell me about the roadmap you&apos;re racing toward</Typography>
        <Typography variant="body1" color="text.secondary">
          Share a quick note about your team, timeline, and the outcomes you&apos;re targeting. I&apos;ll follow up with the most
          relevant case studies and a path to kick-off.
        </Typography>
      </Stack>
      <ContactPanel />
    </Box>
  );
}

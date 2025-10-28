import { Box, Container, Divider, Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6 }}>
      <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.08)' }} />
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Jigish Modi. Crafted with Next.js & Material UI.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography variant="body2" color="text.secondary">
              <a href="mailto:hello@jigishmodi.com">hello@jigishmodi.com</a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a href="https://www.linkedin.com/in/jigishmodi" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a href="https://github.com/jigishmodi" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

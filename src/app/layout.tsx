import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import '@fontsource/inter/variable.css';
import '@fontsource/space-grotesk/variable.css';
import { Box, Container } from '@mui/material';

export const metadata: Metadata = {
  title: 'Jigish Modi · Front-End Engineer',
  description:
    'Portfolio of Jigish Modi, a Senior Front-End Engineer at IBM focused on accessible, data-rich experiences built with React and Next.js.',
  openGraph: {
    title: 'Jigish Modi · Front-End Engineer',
    description:
      'Senior Front-End Engineer at IBM helping enterprise teams ship accessible, performant web products.',
    url: 'https://jigishmodi.com',
    siteName: 'Jigish Modi Portfolio',
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NavBar />
          <Box component="main" sx={{ minHeight: '80vh' }}>
            <Container maxWidth="lg">{children}</Container>
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

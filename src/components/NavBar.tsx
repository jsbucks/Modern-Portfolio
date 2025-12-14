'use client';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography
} from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  const drawer = (
    <Box sx={{ width: 250, textAlign: 'center', py: 3, px: 2 }}>
      <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, cursor: 'pointer' }} onClick={toggleDrawer}>
          Jigish Modi
        </Typography>
      </Link>
      <Divider sx={{ mb: 2 }} />
      <List sx={{ px: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding sx={{ mb: 1 }}>
            <Link href={item.href} passHref style={{ width: '100%', textDecoration: 'none' }}>
              <Button
                onClick={toggleDrawer}
                sx={{ width: '100%', py: 1.5, justifyContent: 'center' }}
                variant="text"
              >
                {item.label}
              </Button>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <Link href="/resume.pdf" passHref style={{ width: '100%', textDecoration: 'none' }}>
            <Button
              onClick={toggleDrawer}
              sx={{ width: '100%', py: 1.5 }}
              variant="contained"
              color="primary"
            >
              Résumé
            </Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Jigish Modi</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} passHref style={{ textDecoration: 'none' }}>
                <Button variant="text" color="inherit">
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/resume.pdf" passHref style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
              >
                Résumé
              </Button>
            </Link>
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

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
    <Box sx={{ textAlign: 'center', py: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Jigish Modi
      </Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <Button
              component={Link}
              href={item.href}
              onClick={toggleDrawer}
              sx={{ my: 1, width: '100%' }}
              variant="text"
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            <Link href="/">Jigish Modi</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button key={item.href} href={item.href} component={Link} variant="text" color="inherit">
                {item.label}
              </Button>
            ))}
            <Button
              href="/resume.pdf"
              component={Link}
              variant="contained"
              color="primary"
            >
              Résumé
            </Button>
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

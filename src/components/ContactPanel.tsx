import { Button, Paper, Stack, Typography } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import type { ReactNode } from 'react';

type Action = {
  label: string;
  href: string;
  icon: ReactNode;
  variant: 'contained' | 'outlined';
};

const actions: Action[] = [
  {
    label: 'Email me',
    href: 'mailto:hello@jigishmodi.com',
    icon: <EmailRoundedIcon />,
    variant: 'contained'
  },
  {
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/jigishmodi',
    icon: <LinkedInIcon />,
    variant: 'outlined'
  },
  {
    label: 'View GitHub',
    href: 'https://github.com/jigishmodi',
    icon: <GitHubIcon />,
    variant: 'outlined'
  },
  {
    label: 'Book time',
    href: 'https://cal.com/jigish',
    icon: <CalendarMonthIcon />,
    variant: 'outlined'
  }
];

export default function ContactPanel() {
  return (
    <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">Let&apos;s build the next release together</Typography>
        <Typography variant="body1" color="text.secondary">
          Share a challenge or idea and I&apos;ll respond within 24 hours with next steps, relevant work samples, and a short
          agenda for our first conversation.
        </Typography>
      </Stack>
      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
        {actions.map((action) => (
          <Button
            key={action.label}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            startIcon={action.icon}
            variant={action.variant}
            size="large"
          >
            {action.label}
          </Button>
        ))}
      </Stack>
    </Paper>
  );
}

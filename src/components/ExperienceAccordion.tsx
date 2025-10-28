import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import type { Experience } from '@/data/experience';

export default function ExperienceAccordion({ roles }: { roles: Experience[] }) {
  return (
    <Stack spacing={2}>
      {roles.map((role, index) => (
        <Accordion key={`${role.company}-${role.title}`} defaultExpanded={index === 0} sx={{ backgroundColor: 'background.paper' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{role.title}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {role.company}
                {role.location ? ` · ${role.location}` : ''}
              </Typography>
            </Box>
            {role.start || role.end ? (
              <Typography variant="subtitle2" color="text.secondary">
                {role.start && role.end ? `${role.start} — ${role.end}` : role.start ?? role.end}
              </Typography>
            ) : null}
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              {role.description.length > 0 ? (
                <List dense>
                  {role.description.map((item) => (
                    <ListItem key={item} sx={{ alignItems: 'flex-start' }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleRoundedIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              ) : null}
              {role.skills && role.skills.length > 0 ? (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {role.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" />
                  ))}
                </Box>
              ) : null}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}

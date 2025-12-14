import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Hero() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3}>
            <Chip
              label="Senior Front-End Engineer @ IBM"
              color="primary"
              sx={{ alignSelf: "flex-start" }}
            />
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, lineHeight: 1.1 }}
            >
              I craft human-centered enterprise experiences that convert
              complexity into clarity.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
            >
              From IBM renewals to DataStax developer journeys, I help product
              teams ship accessible, performant web apps that make measurable
              impact.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Link href="/work" passHref style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large" fullWidth>
                  View IBM Case Study
                </Button>
              </Link>
              <Link
                href="/resume.pdf"
                passHref
                style={{ textDecoration: "none" }}
              >
                <Button variant="outlined" size="large" fullWidth>
                  Download Résumé
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              background:
                "radial-gradient(circle at top left, rgba(244,197,66,0.35), transparent 55%)",
              borderRadius: 6,
              p: 4,
              border: "1px solid rgba(244,197,66,0.3)",
            }}
          >
            <Stack spacing={2}>
              <Typography variant="overline" color="primary.light">
                CURRENT FOCUS
              </Typography>
              <Typography variant="body1">
                Accelerating IBM Technology Lifecycle Services renewals with a
                modular design system and data-driven insights.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Previously at DataStax and CNBC shipping design systems,
                analytics experiences, and broadcast-scale storytelling.
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

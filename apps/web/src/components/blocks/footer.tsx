import { Link } from '@atom-components/link';
import { GitHub, LinkedIn, MailOutline } from '@mui/icons-material';
import { Box, Container, IconButton, Paper, Typography } from '@mui/material';

export const FooterHeight = 48;

const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '';
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? '';
const emailUrl = process.env.NEXT_PUBLIC_EMAIL_URL ?? '';

export default function Footer() {
  return (
    <Container maxWidth="lg" disableGutters>
      <Paper
        elevation={1}
        square
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          Copyright © 2022. All Rights Reserved.
        </Typography>
        <Box display="flex">
          <IconButton href={linkedInUrl} component={Link} target="_blank">
            <LinkedIn sx={{ width: 20, height: 20 }} />
          </IconButton>
          <IconButton href={githubUrl} component={Link} target="_blank">
            <GitHub sx={{ width: 20, height: 20 }} />
          </IconButton>
          <IconButton href={emailUrl}>
            <MailOutline sx={{ width: 20, height: 20 }} />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
}

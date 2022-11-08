import AppBar, { AppBarHeight } from '@block-components/app-bar';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';

const defaultTitle = 'Turbo Template Web';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#FBFBFB',
      }}
    >
      <Head>
        <title>{defaultTitle}</title>
      </Head>
      <AppBar />
      <Container
        component="main"
        maxWidth="lg"
        disableGutters
        sx={{
          mt: AppBarHeight / 8,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}

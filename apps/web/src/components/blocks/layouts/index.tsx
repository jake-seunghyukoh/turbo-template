import AppBar, { AppBarHeight } from '@block-components/app-bar';
import { Box, CircularProgress, Container } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';

const defaultTitle = 'Turbo Template Web';

interface LayoutProps {
  children: ReactNode;
  isLoading?: boolean;
}

export default function Layout({ children, isLoading }: LayoutProps) {
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
      {isLoading ? (
        <Box
          sx={{
            width: '100%',
            height: `calc(100vh - ${AppBarHeight}px)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
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
      )}
    </Box>
  );
}

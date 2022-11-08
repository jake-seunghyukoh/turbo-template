import { Container } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';

const defaultTitle = 'Turbo Template Web';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{defaultTitle}</title>
      </Head>
      <Container maxWidth="lg" disableGutters>
        {children}
      </Container>
    </div>
  );
}

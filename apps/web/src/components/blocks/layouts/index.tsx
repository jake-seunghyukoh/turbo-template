import { Container } from '@mui/material';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth="lg" disableGutters>
      {children}
    </Container>
  );
}

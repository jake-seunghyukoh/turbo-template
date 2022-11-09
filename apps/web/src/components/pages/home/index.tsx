import Layout from '@block-components/layouts';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout isLoading={isLoading}>
      <Box></Box>
    </Layout>
  );
}

import Layout from '@block-components/layouts';
import { Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Layout>
      <Typography variant="h1">Home</Typography>
      <Box height={3000}></Box>
    </Layout>
  );
}

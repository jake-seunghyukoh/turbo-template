import { Link } from '@atom-components/link';
import { AppBar as MaterialAppBar, Box, IconButton } from '@mui/material';

export const AppBarHeight = 72;

export default function AppBar() {
  return (
    <MaterialAppBar position="fixed" elevation={0}>
      <Box
        sx={{
          height: AppBarHeight,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          boxShadow: '0px 2px 30px rgb(146 153 184 / 6%)',
          px: 2,
        }}
      >
        <IconButton href="/" component={Link}>
          Logo
        </IconButton>
      </Box>
    </MaterialAppBar>
  );
}

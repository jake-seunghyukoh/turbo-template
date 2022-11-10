import { Link } from '@atom-components/link';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar as MaterialAppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

type Menu = {
  label: string;
  link: string;
};

const menus: Menu[] = [
  {
    label: '일정',
    link: '/calendar',
  },
  {
    label: '메뉴 2',
    link: '/menu2',
  },
  {
    label: '메뉴 3',
    link: '/menu3',
  },
];

export const AppBarHeight = 64;

export default function AppBar() {
  const { data: session } = useSession();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElAvatar, setAnchorElAvatar] = useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenAvatarMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAvatar(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseAvatarMenu = () => {
    setAnchorElAvatar(null);
  };

  const isSignedIn = !!session?.user;
  const profileImage = session?.user?.image;

  return (
    <MaterialAppBar
      position="fixed"
      elevation={0}
      sx={{ backgroundColor: '#fff' }}
    >
      <Toolbar
        disableGutters
        sx={{
          width: '100%',
          backgroundColor: 'white',
          boxShadow: '0px 2px 30px rgb(146 153 184 / 6%)',
          px: 2,
        }}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex">
            <IconButton href="/" component={Link}>
              Logo
            </IconButton>

            <Box
              display={{ xs: 'none', lg: 'flex' }}
              pl={6}
              gap={4}
              alignItems="center"
            >
              {menus.map((menu, idx) => (
                <Link
                  key={idx}
                  href={menu.link}
                  underline="none"
                  color="grey.700"
                >
                  {menu.label}
                </Link>
              ))}
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <Box display="flex" mr={5}>
              {isSignedIn ? (
                <IconButton onClick={handleOpenAvatarMenu}>
                  <Avatar>
                    {profileImage && (
                      <Image
                        src={profileImage}
                        alt="profile"
                        height={40}
                        width={40}
                      />
                    )}
                  </Avatar>
                </IconButton>
              ) : (
                <Button
                  href="/sign-in"
                  component={Link}
                  variant="contained"
                  disableElevation
                  sx={{
                    height: 32,
                    lineHeight: 1.2,
                    color: 'text.primary',
                    backgroundColor: 'grey.100',
                    '&:hover': {
                      backgroundColor: 'grey.200',
                    },
                  }}
                >
                  로그인 | 회원가입
                </Button>
              )}
            </Box>

            <IconButton
              sx={{ display: { xs: 'block', lg: 'none' } }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>

      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        open={!!anchorElNav}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', lg: 'none' },
        }}
      >
        {menus.map((menu, idx) => (
          <MenuItem key={idx}>
            <Link href={menu.link} underline="none" color="grey.700">
              {menu.label}
            </Link>
          </MenuItem>
        ))}
      </Menu>

      <Menu
        anchorEl={anchorElAvatar}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        open={!!anchorElAvatar}
        onClose={handleCloseAvatarMenu}
      >
        <MenuItem onClick={() => alert('Not implemented')}>
          <Typography variant="body2" color="text.secondary">
            프로필 수정
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => signOut()}>
          <Typography variant="body2" color="text.secondary">
            로그아웃
          </Typography>
        </MenuItem>
      </Menu>
    </MaterialAppBar>
  );
}

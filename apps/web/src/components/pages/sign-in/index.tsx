import Layout from '@block-components/layouts';
import { Button, Stack, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import KakaoLogo from 'public/icons/kakao-logo.png';

export default function SignInPage() {
  return (
    <Layout>
      <Stack
        spacing={5}
        sx={{
          width: 'min(500px, calc(100% - 32px))',
          boxShadow: '0px 2px 30px rgb(146 153 184 / 6%)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          p: 6,
          background: 'white',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5">로그인</Typography>

        <Button
          onClick={() => signIn('kakao')}
          startIcon={
            <Image src={KakaoLogo} alt="kakao logo" height={24} width={24} />
          }
          size="large"
          sx={{
            py: 2,
            color: '#181600',
            backgroundColor: '#FEE500',
            '&:hover': {
              backgroundColor: '#FADA0B',
            },
            borderRadius: 2,
          }}
        >
          카카오로 로그인하기
        </Button>
      </Stack>
    </Layout>
  );
}

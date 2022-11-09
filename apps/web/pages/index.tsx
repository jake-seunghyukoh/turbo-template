import HomePage from '@page-components/home';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <HomePage />
    </div>
  );
}

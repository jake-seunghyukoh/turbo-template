import Button from '@mui/material/Button';
import { Link } from '../src/components/atoms/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button href="/foo" component={Link}>
        To foo
      </Button>
    </div>
  );
}

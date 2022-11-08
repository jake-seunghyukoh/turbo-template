import { Button } from 'ui';
import { allPostsQueryVars, ALL_POSTS_QUERY } from '../components/PostList';
import { addApolloState, initializeApollo } from '../lib/apolloClient';

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

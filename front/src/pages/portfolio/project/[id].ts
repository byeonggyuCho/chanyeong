import { GetServerSideProps } from 'next';

import { initializeApollo } from '@src/apollo';
import { GET_PROJECT } from '@queries/project.queries';
import { getProject } from '@gql-types/api';

export { default } from '@pages/Project';

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.id && typeof context.query.id === 'string') {
    const { id } = context.query;
    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query<getProject>({
      query: GET_PROJECT,
      variables: { id: Number(id) },
      fetchPolicy: 'no-cache',
    });
    return { props: { project: data.GetProject?.project } };
  }
};

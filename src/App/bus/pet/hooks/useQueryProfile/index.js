//Core
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

//Queries
const queryAvailablePets = loader('./gql/queryProfile.graphql');

export const useQueryProfile = () => {
  const [ getProfile, { loading, error, data }] = useLazyQuery(queryAvailablePets);

  return { getProfile, loading, error, profile: data && data.petById };
}

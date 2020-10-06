//Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from "graphql.macro";

//Hooks
import { useForm } from '../useForm'

////Mutations
const mutationLogIn = loader('./gql/mutationLogIn.graphql');



export const useCustomerAuth = () => {
  const [__logIn, { data }] = useMutation(mutationLogIn)
  const { values, handleChange } = useForm({
    username: '',
    password: '',
  });

  const authorizedCustomer = data?.logIn;
  const token = authorizedCustomer?.token;

  if( token ){
    localStorage.setItem(
      'token', token
    )
  }

  const logIn = () => {
    __logIn({
      variables: values
    })
  }

  return{
    logIn,
    handleChange,
    authorizedCustomer,
  }
}

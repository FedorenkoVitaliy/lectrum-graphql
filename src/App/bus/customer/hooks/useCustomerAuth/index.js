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



  const logIn = () => {
    __logIn({
      variables: values
    })
  }

  return{
    handleChange,
    logIn,
    authorizedCustomer: data && data.logIn
  }
}

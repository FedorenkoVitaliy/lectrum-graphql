//Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from "graphql.macro";

//Hooks
import { useForm } from '../useForm'

//Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomerCreator = () => {
  const [__save, { data }] = useMutation(mutationCreateAccount)
  const { values, handleChange } = useForm({
    name: '',
    username: '',
    password: '',
  });

  const save = () => {
    __save({
      variables: {
        account: values
      }
    })
  }

  return{
    handleChange,
    save,
    createdAccount: data && data.createAccount
  }
}

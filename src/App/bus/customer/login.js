//Core
import React from 'react';

//Hooks
import { useCustomerAuth } from "./hooks/useCustomerAuth";

export const Login = () => {
  const { handleChange, logIn, authorizedCustomer } = useCustomerAuth()

  const authorizedCustomerJSX = authorizedCustomer && (
    <>
      <p>Authorized customer: {authorizedCustomer.customer.name}</p>
      <p>Token {authorizedCustomer.token}</p>
    </>
  )

  return(
    <>
      <h1>login</h1>
      <input type="text" placeholder="Username" name='username' onChange={handleChange}/>
      <input type="text" placeholder="Password" name='password' onChange={handleChange}/>
      <button type="submit" onClick={ logIn }>login</button>
      { authorizedCustomerJSX }
    </>
  )
};

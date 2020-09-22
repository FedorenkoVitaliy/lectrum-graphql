import React from 'react';
import {useCustomer} from "./hooks/useCustomer";

export const Customer = () => {
  const { handleChange, save, createdAccount } = useCustomer();

  const customerJSX = createdAccount && (
    <p>
      We already created account with name {createdAccount.name}
    </p>
  );

  return(
    <>
      <h1>Registration</h1>
      <input type="text" placeholder="Name" name='name' onChange={handleChange}/>
      <input type="text" placeholder="Username" name='username' onChange={handleChange}/>
      <input type="text" placeholder="Password" name='password' onChange={handleChange}/>
      <button type="submit" onClick={save}>Save</button>
      {customerJSX}
    </>
  )
}
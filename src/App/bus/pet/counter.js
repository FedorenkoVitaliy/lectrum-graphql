//Core
import React from 'react';

//Hooks
import { useQueryAvailablePets } from './hooks/useQueryAvailablePets';

export const Counter = () => {
  const { loading, error, data, /*refetch,*/ networkStatus } = useQueryAvailablePets();

  if(loading){
    return <p>Loading...</p>
  }

  if(networkStatus === 4){
    return <p>Refetching...</p>
  }

  if(error){
    return (
      <p>
        We have a problem: {error.message}
      </p>
    )
  }

  return(
    <p>
      Available pets: {data.availablePets}
    </p>
  )
}

//Core
import React from 'react';

//Hooks
import { useCheckIn } from './hooks/useCheckIn';

export const CheckInPet = () => {
  const { checkIn, pet, errors, error } = useCheckIn();

  const errorsJSX = errors && (
    <p>
      We have a problem: {errors.message}
    </p>
  )
  const errorJSX = error && (
    <p>
      We have a another problem: {error.message}
    </p>
  )

  const petJSX = pet && (
    <>
      <p> Id: {pet.id}</p>
      <p>Name: {pet.name}</p>
    </>
  )

  return(
    <>
      <h1>Check in</h1>
      { errorJSX }
      { errorsJSX }
      { petJSX }
      <button onClick={() => checkIn('C-1')}>
        CheckIn
      </button>
    </>
  )
}

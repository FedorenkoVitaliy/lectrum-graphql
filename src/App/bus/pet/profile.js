//Core
import React from 'react';

//Hooks
import { useQueryProfile } from './hooks/useQueryProfile';

export const Profile = () => {
  const { getProfile, loading, error, profile } = useQueryProfile();

  const loadProfile = () => {
    getProfile({
      variables:{
        id: 'C-1'
      }
    })
  }

  const loadingJSX = loading && (
    <p>Loading...</p>
  )

  const errorJSX = error && (
    <p>
      We have a problem: {error.message}
    </p>
  )

  return(
    <>
      <h1>Profile</h1>
      <button onClick={loadProfile}>Get profile</button>
      { loadingJSX }
      { errorJSX }
      <p>
        { profile && profile.name }
      </p>
    </>
  )
}

//Core
import React from 'react';

//Components
import { CheckInPet } from "./checkInPet";
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import { Profile } from "./profile";

export const Pet = () => {
  return(
    <>
      <h1>Pet</h1>
      <CheckInPet/>
      {/*<Profile/>
      <Counter/>
      <h2>Pets</h2>
      <List/>
      <SpecialList/>*/}
    </>
  )
}

//Core
import React from 'react';

//Components
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";
import { Profile } from "./profile";

export const Pet = () => {
  return(
    <>
      <Profile/>
      <Counter/>
      <h2>Pets</h2>
      <List/>
      <SpecialList/>
    </>
  )
}

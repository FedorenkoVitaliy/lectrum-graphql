//Core
import React from 'react';

//Components
import { Counter } from "./counter";
import { List } from "./list";
import { SpecialList } from "./specialList";

export const Pet = () => {
  return(
    <>
      <Counter/>
      <h2>Pets</h2>
      <List/>
      <SpecialList/>
    </>
  )
}

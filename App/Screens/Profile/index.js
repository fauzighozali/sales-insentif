import React from 'react'
import { Container } from "./container";
import { Screen } from "../../Components/Screen";
import { waitInteraction } from "../../Lib/renderingHandler";

export const ProfileScreen = waitInteraction(props => {
  return (
    <Screen headerType='main' name={'Profile'}>
      <Container {...props} />
    </Screen>
  )
});


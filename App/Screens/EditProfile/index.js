import React from 'react'
import { Container } from "./container";
import { Screen } from "../../Components/Screen";
import { waitInteraction } from "../../Lib/renderingHandler";


export const EditProfileScreen = waitInteraction(props => {
  return (
    <Screen>
      <Container {...props} />
    </Screen>
  )
});

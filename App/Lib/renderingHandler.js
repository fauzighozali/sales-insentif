import React from "react";
import { InteractionManager } from 'react-native';
import { compose, withState, lifecycle } from 'recompose';
import { Blank } from "../Components/Blank";
import * as Animatable from "react-native-animatable";

export const withMaybe = (conditionalRendering) => Component => props =>
  conditionalRendering(props)
    ? <Component {...props} />
    : <Blank/>;

export const withEither = (conditionalRendering, EitherComponent) => Component => props =>
  conditionalRendering(props)
    ? <EitherComponent {...props} />
    : <Component {...props} />;

export const withAnimations = (animation = 'zoomIn', { ...animateProps }) => Component => props => {
  return (
    <Animatable.View animation={animation} useNativeDriver={true} {...animateProps}>
      <Component {...props}/>
    </Animatable.View>
  )
};

export const waitInteraction = Component => compose(
  withState('onReady', 'setOnReady', false),
  lifecycle({
    componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        this.props.setOnReady(true)
      })
    }
  }),
  withMaybe(props => props.onReady)
)(Component);

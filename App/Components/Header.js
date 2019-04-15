import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import { BackButton } from "./Button";
import { TextTampan } from "./Text";

const Title = ({ name = '' }) => {
  return (
    <View>
      <TextTampan style={styles.title}>
        {name}
      </TextTampan>
    </View>
  )
};

const HeaderHome = ({ name }) => {
  return (
    <Header
      backgroundColor={'#fff'}
      leftComponent={(<Title name={name}/>)}
      rightComponent={{ icon: 'notifications', color: '#fe506a' }}
      outerContainerStyles={styles.headerContainer}
    />
  );
};

const HeaderDefault = ({ name }) => {
  return (
    <Header
      backgroundColor={'#fff'}
      centerComponent={(<Title name={name}/>)}
      leftComponent={(<BackButton/>)}
      innerContainerStyles={{
        height: 44
      }}
    />
  );
};

export const HeaderTampan = ({ headerType, ...props }) => {
  switch (headerType) {
    case 'main':
      return (<HeaderHome {...props}/>);
    default:
      return (<HeaderDefault {...props}/>);
  }
};

const styles = StyleSheet.create({
  headerContainer: {
    // borderBottomWidth: 0,
  },
  title: {
    color: '#fe506a',
    fontSize: 20
  }
});

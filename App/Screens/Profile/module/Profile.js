import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Platform } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { Avatar } from 'react-native-ui-lib'
import { TextTampan } from "../../../Components/Text";
import { device } from "../../../Lib/dimensions";
import { compose, withHandlers } from 'recompose'

const enhance = compose(
  withHandlers({
    navigate: ({ navigation }) => (to) => () => navigation.navigate({ key: to, routeName: to })
  })
);

export const Profile = enhance(({ navigate, profile }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {/*<TouchableWithoutFeedback>*/}
          {/*<View style={styles.alignCenter}>*/}
            {/*<Icon raised size={20} name='camera' type='font-awesome' color={'#f50'}/>*/}
          {/*</View>*/}
        {/*</TouchableWithoutFeedback>*/}
        <Avatar
          size={100}
          imageSource={{ uri: 'https://media.licdn.com/dms/image/C5103AQGb3ggpROUNSA/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=mJwj4nLYRgO3UWLk4eAC8WAEHM656-vCeN6SnUA7AtM' }}
          imageStyle={styles.avatar}
        />
        {/*<TouchableWithoutFeedback onPress={navigate('EditProfile')}>*/}
          {/*<View style={styles.alignCenter}>*/}
            {/*<Icon raised size={20} name='pencil' type='font-awesome' color={'#f50'}/>*/}
          {/*</View>*/}
        {/*</TouchableWithoutFeedback>*/}
      </View>
      <TextTampan style={[styles.nameTitle, styles.white]}>Fauzi Ghozali</TextTampan>
      <TextTampan style={styles.white}>fauzighozali@ag-it.com</TextTampan>
      <TextTampan style={styles.white}>Astragraphia Information Technology</TextTampan>
      <TextTampan style={styles.white}>082234102649</TextTampan>
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
    height: device.height / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  nameTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  white: {
    color: '#fff'
  },
  avatarContainer: {
    width: '100%',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff'
  },
  avatarName: {
    justifyContent: 'center',
    marginLeft: 10
  }

});

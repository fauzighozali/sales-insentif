import React,{Component} from "react"
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'

const listItem = props =>(
    <TouchableOpacity onPress={() =>{props.onShowDialog(props.id)}}>
        <View style={styles.listItem} >
            <Image
                style={styles.image}
                source={props.image}    
                />
            <View style={styles.item}>
                <Text>{props.name}</Text>
                <Text>{props.title}</Text>
            </View>
        </View>
    </TouchableOpacity>
)

const styles=StyleSheet.create({
    listItem:{
        flexDirection:'row',
        padding: 5,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 30, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 5
    },
    item:{
        marginLeft:10,
        alignItems:'flex-start'
    },
    image:{
      width:40,
      height:40,
      borderRadius:50,
      shadowColor:'#add'
    }
})

export default listItem;   
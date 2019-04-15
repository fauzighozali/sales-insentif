import React,{Component} from "react"
import {StyleSheet, View, Modal} from "react-native"

import Dialog from 'react-native-dialog'


export const DialogInput= props=>(
            <View>
                <Dialog.Container visible={props.visible}>
                    <Dialog.Input 
                        placeholder={props.placeHolder}
                        placeholderTextColor='#F7941D'
                        style={styles.dialogInput}
                        onChangeText={props.updateCode}
                        />
                    <Dialog.Button label="Cancel" style={{color:"#F7941D"}} onPress={props.hendleCancel}  />
                    <Dialog.Button label="Submit" style={{color:'#F7941D'}} onPress={props.hendleSubmit}/>       
                </Dialog.Container>     
            </View>
        )

export const DialogMultiInput= props=>(
            <View>
                <Dialog.Container visible={props.visible}>
                    <Dialog.Input 
                        placeholder={props.placeHolder}
                        placeholderTextColor='#ddd'
                        multiline
                        style={styles.dialogMultiInput}/>
                    <Dialog.Button label="Cancel" style={{color:"#F7941D"}} onPress={props.hendleCancel}  />
                    <Dialog.Button label="Submit" style={{color:'#F7941D'}} onPress={props.hendleSubmit}/>   
                </Dialog.Container>  
            </View>
        )        
   

const styles=StyleSheet.create({
    dialogInput:{
        padding:5,
        textAlign:'center',
        borderColor:'#F7941D',
        borderBottomWidth: 1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderRadius:5
    },
    dialogMultiInput:{
        textAlignVertical: 'top',
        padding:10,
        borderColor:'#F7941D',
        borderBottomWidth: 1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderRadius:5,
        height:300,       
    }
}) 
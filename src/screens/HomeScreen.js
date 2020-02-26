import React, { useState } from 'react';
import {View,TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native';
import firebase from 'react-native-firebase';

const HomeScreen = ()=>{





    const insert = () =>{
        setTimeout(()=>{
            firebase.database().ref('users/005').set(
        {
            name:'wo',
            age:'25'
        }).then(()=>{
            console.log('inserted');
        }).catch((error)=>{
            console.log(error)
        }
        )

        },500)

    // firebase.database().ref('users/002').set(
    //     {
    //         name:'zee',
    //         age:'25'
    //     }).then(()=>{
    //         console.log('inserted');
    //     }).catch((error)=>{
    //         console.log(error)
    //     }
    //     )
    }

      const get=()=>{

        firebase.database().ref('users').on('value',(data)=>{
            console.log(data.toJSON())
        })
      }  
    
  
   
    
    return(
        <View>
            <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => {
                            insert()
                        }}
                        >
                        <Text style={styles.buttonTextStyle}>INSERT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => {
                            get()
                        }}
                        >
                        <Text style={styles.buttonTextStyle}>GET</Text>
                </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        margin: 90,
        borderRadius: 25,
        height:30,
        alignSelf:"center",
        // backgroundColor: theme.color.primaryColor,
        backgroundColor:'#274962'
      },
      buttonTextStyle: {
        width: '100%',
        textAlign: 'center',
        color:'white'
      },
})
export default HomeScreen;
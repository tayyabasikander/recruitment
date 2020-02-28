import React, { useState } from 'react';
import {View,TextInput,StyleSheet,TouchableOpacity,Text,ScrollView,KeyboardAvoidingView} from 'react-native';
import firebase from 'react-native-firebase';



// const studentName="tayyaba"
// const studentId="B1810120"

const HomeScreen = ()=>{
    const [studentName,setStudentName]=useState('');
    const [fatherName,setFatherName]=useState('');
    const[studentId,setStudentId]=useState('')



    const insert = () =>{
        setTimeout(()=>{
            firebase.database().ref('users/010').set(
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

    }

      const get=()=>{

        firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).on('value',(data)=>{
            console.log(data.toJSON())
        })
      }  
    
      const push=()=>{
        firebase.database().ref('UsersList/').push({
         studentName,
         studentId,
         fatherName
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }
   
    
    return(
        <KeyboardAvoidingView style={{flex:1}}>
            <ScrollView>
        <View style={{marginTop:100}}>
           
           <View style={styles.backgroundStyle}>
         <TextInput
            autoCapitalize="none"
            placeholder="Enter Student Name"
            autoCorrect={false}
            value={studentName}
            onChangeText={(x) => setStudentName(x)}
            style={styles.input}>
        </TextInput>
        </View>

        <View style={styles.backgroundStyle}>
         <TextInput
            autoCapitalize="none"
            placeholder="Enter Father Name "
            autoCorrect={false}
            value={fatherName}
            onChangeText={(x) => setFatherName(x)}
            style={styles.input}>
        </TextInput>
        </View>

        <View style={styles.backgroundStyle}>
         <TextInput
            autoCapitalize="none"
            placeholder="Enter Student Id "
            autoCorrect={false}
            value={studentId}
            onChangeText={(x) => setStudentId(x)}
            style={styles.input}>
        </TextInput>
        </View>

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

             <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => {
                            push()
                        }}
                        >
                        <Text style={styles.buttonTextStyle}>PUSH</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles=StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        margin: 10,
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
      input: {
        marginHorizontal: 15,
    },
    backgroundStyle: {
        // backgroundColor: 'white',
        // width:"82%",
        height: 40,
    
        borderRadius: 7,
        marginHorizontal: 40,
        marginVertical: 10,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        width:"70%",
        alignSelf:"center"

    },
})
export default HomeScreen;
import React, { useState } from 'react';
import {View,TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native';
 import firebase from 'react-native-firebase';


const RegisterScreen =()=>{
    // const [userName,setUserName]=useState('tayyaba.sikander2000@gmail.com');
    const [email,setEmail]=useState('tayyaaabbba.sikander2000@gmail.com');
    // const [companyName,setCompanyName] = useState('')
    const [password,setPassword]=useState('123456');
    // const [confirmPassword,setConfirmPassword]=useState('');
    const [errorMessage,setErrorMessage]=useState('')

    const [studentName,setStudentName]=useState('');
    const [fatherName,setFatherName]=useState('');
    const[studentId,setStudentId]=useState('')

    const push=()=>{
        firebase.database().ref('UsersList/').push({
            email,
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

  const  handleSignUp = () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email,password)
         .then((user) =>{
            push()
         console.log("user is",user)
        })

         .catch(error => {
             console.log(error.message)
            setErrorMessage(error.message)
        }
            )
      }
    return(
        <View>
             <View style={{marginTop:90}}>

        {/* <View style={styles.backgroundStyle}>
         <TextInput
            autoCapitalize="none"
            placeholder="Enter User Name"
            autoCorrect={false}
            value={email}
            onChangeText={(x) => setUserName(x)}
            style={styles.input}>
        </TextInput>
        </View> */}

        <View style={styles.backgroundStyle}>
         <TextInput
            autoCapitalize="none"
            placeholder="Enter Email"
            autoCorrect={false}
            value={email}
            onChangeText={(x) => setEmail(x)}
            style={styles.input}>
        </TextInput>
        </View>

        {/* <View style={styles.backgroundStyle}>
         <TextInput
            autoCapitalize="none"
            placeholder="Enter your Company Name"
            autoCorrect={false}
            value={password}
            onChangeText={(x) => setPassword(x)}
            style={styles.input}>
        </TextInput>
        </View>  */}

        <View style={styles.backgroundStyle}>
         <TextInput
            autoCapitalize="none"
            placeholder="Enter password"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(x) => setPassword(x)}
            style={styles.input}>
        </TextInput>
        </View>

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
                            handleSignUp()
                        }}
                        >
                        <Text style={styles.buttonTextStyle}>Register</Text>
                </TouchableOpacity>

    </View>
        </View>
    )
}
const styles=StyleSheet.create({
    input: {
        marginHorizontal: 15,
    },
    backgroundStyle: {
        // backgroundColor: 'white',
        // width:"82%",
        height: 40,
    
        borderRadius: 7,
        marginHorizontal: 40,
        marginVertical: 5,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        width:"70%",
        alignSelf:"center"

    },
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
})
export default RegisterScreen;
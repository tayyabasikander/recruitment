import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text,Picker } from 'react-native';
import firebase from 'react-native-firebase';


const RegisterScreen = ({navigation}) => {

    const [email, setEmail] = useState('@gmail.com');
    const [password, setPassword] = useState('123456');
    const [errorMessage, setErrorMessage] = useState('')

    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [role, setRole] = useState('')

    const pushUser = (userId) => {
        firebase.database().ref(`users/${userId}`).set({
            email,
            name,
            phoneNumber,
            fatherName,
            role
        }).then((data) => {
            //success callback
            console.log('data', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }

    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
              console.log('eff')
                // console.log("UID: ",user.user.uid)
                pushUser(user.user.uid)
                console.log("user is", user)
                navigation.navigate('Login')
            })

            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message)
            }
            )
    }

    const showRole = (value) => {
        setRole(value)
    }
    return (
        <View>
            <View style={{ marginTop: 90 }}>

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
                        placeholder="Enter Name"
                        autoCorrect={false}
                        value={name}
                        onChangeText={(x) => setName(x)}
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
                        placeholder="Enter contact no "
                        autoCorrect={false}
                        value={phoneNumber}
                        onChangeText={(x) => setPhoneNumber(x)}
                        style={styles.input}>
                    </TextInput>
                </View>

                <View style={styles.pickerContainer}>
                <Picker style={styles.pickerStyle}
                            selectedValue={role}
                            onValueChange={showRole.bind()}>

                            <Picker.Item label="Select role" value="0" ></Picker.Item>
                            <Picker.Item label="Admin" value="1"></Picker.Item>
                            <Picker.Item label="Employee" value="2"></Picker.Item>
                            <Picker.Item label="Student" value="3"></Picker.Item>
                            
                </Picker>
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
const styles = StyleSheet.create({
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
        width: "70%",
        alignSelf: "center"

    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        margin: 10,
        borderRadius: 25,
        height: 30,
        alignSelf: "center",
        // backgroundColor: theme.color.primaryColor,
        backgroundColor: '#274962'
    },
    buttonTextStyle: {
        width: '100%',
        textAlign: 'center',
        color: 'white'
    },
    pickerStyle: {
        width: "95%",
        // alignSelf: "center",
        color: '#274962',

    },
    pickerContainer: {
        marginTop: 9,
        width: "85%",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#274962',
        height: 40,
        justifyContent: "center"
    }
})
export default RegisterScreen;
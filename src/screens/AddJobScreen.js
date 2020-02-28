import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

const AddjobScreen = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [salary, setSalary] = useState('');

    const addJob = () =>{
   
            firebase.database().ref('Jobs/').push({
                jobTitle,
                jobDescription,
                salary,
                employerId:firebase.auth().currentUser.uid
            }).then((data)=>{
                //success callback
                console.log('data ' , data)
            }).catch((error)=>{
                //error callback
                console.log('error ' , error)
            })
        
       
    }

    return (
        <View style={{ marginTop: 90 }}>
            <View style={styles.backgroundStyle}>
                <TextInput
                    autoCapitalize="none"
                    placeholder="Job Title"
                    autoCorrect={false}
                    value={jobTitle}
                    onChangeText={(x) => setJobTitle(x)}
                    style={styles.input}>
                </TextInput>
            </View>
            <View style={styles.backgroundStyle}>
                <TextInput
                    textAlignVertical="top"
                    autoCapitalize="none"
                    placeholder="Job Description"
                    autoCorrect={false}
                    multiline={true}
                    numberOfLines={10}
                    value={jobDescription}
                    onChangeText={(x) => setJobDescription(x)}
                    style={styles.input}>
                </TextInput>
            </View>
            <View style={styles.backgroundStyle}>
                <TextInput
                    autoCapitalize="none"
                    placeholder="Salary Range"
                    autoCorrect={false}
                    value={salary}
                    onChangeText={(x) => setSalary(x)}
                    style={styles.input}>
                </TextInput>
            </View>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    addJob()
                }}
            >
                <Text style={styles.buttonTextStyle}>Add</Text>
            </TouchableOpacity>
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
        // height: 40,

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
export default AddjobScreen;
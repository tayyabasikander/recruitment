import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

const EmployeeScreen = ({ navigation }) => {
    const get = () => {

        firebase.database().ref('jobs').on('value', (snapshot) => {

            snapshot.forEach(data => {
                if (data.val().employerId == firebase.auth().currentUser.uid) {
                    console.log("Jobs are",data.val())
                }
            })

        })
    }


    return (
        <View style={{ marginTop: 250 }}>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    get()
                }}
            >
                <Text style={styles.buttonTextStyle}>See All jobs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    navigation.navigate('AddJob')
                }}
            >
                <Text style={styles.buttonTextStyle}>Post jobs</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        margin: 10,
        borderRadius: 25,
        height: 50,
        alignSelf: "center",
        // backgroundColor: theme.color.primaryColor,
        backgroundColor: '#274962'
    },
    buttonTextStyle: {
        width: '100%',
        textAlign: 'center',
        color: 'white'
    },
})
export default EmployeeScreen;
import React from 'react';
import { createAppContainer,createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';


console.disableYellowBox = true;

const AuthStack = createStackNavigator({
 
  Login: LoginScreen,
  Register:RegisterScreen, 
  
 
  
  



},
  (navigationOptions = {
      headerMode: "none"
  })
);
const AppNavigator = createAppContainer(AuthStack)

const App = ()=> {
  
    
    return (
      
        <AppNavigator />
      
    );
  
}
export default App;
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './src/navigations/BottomNavigation';
import LoginScreen from './src/screens/auth/LoginScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false,  }} />
      <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false,  }} />

        <Stack.Screen name="main" component={BottomNavigation} options={{ headerShown: false,  }} />
        
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

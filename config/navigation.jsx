import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react"
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Signup } from '../Components/Signup';
import { login } from '../Components/login';
const Stack = createNativeStackNavigator()

export const NavigationReact  = ()=>{
    return(
        <NavigationContainer>   
            <Stack.Navigator >
                <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
                <Stack.Screen  name='Signup' component={Signup} options={{headerShown:false}} />
                <Stack.Screen name='login' component={login} options={{headerShown:false}}/>
               
            </Stack.Navigator>
        </NavigationContainer>
    )

}

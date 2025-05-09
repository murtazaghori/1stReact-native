import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Contact from "../screens/Contact"
import Home from "../screens/Home"
import About from "../screens/About"
import Album from "../screens/Album"
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5"
import ContactIcon from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator();

export const TabNavigationReact = () =>{
    return(
         <NavigationContainer> 
        
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor:'white',
            tabBarActiveBackgroundColor:'black'
        }}>
                   <Tab.Screen 
             options={{
                tabBarIcon:({color})=>{
                    return <Icon color={color} name="home" size={28}/>;
                },
            }}
            name='HOME' component={Home}/>
            <Tab.Screen 
                 options={{
                    tabBarIcon:({color})=>{
                        return <ContactIcon color={color} name="contacts-outline" size={28}/>;
                    },
                }}
            name='Contact' component={Contact}/>
        
            <Tab.Screen
               options={{
                tabBarIcon:({color})=>{
                    return <Icon color={color} name="question" size={28}/>;
                },
            }}
            name='About' component={About}/>
            <Tab.Screen 
                   options={{
                    tabBarIcon:({color})=>{
                        return <ContactIcon color={color} name="album" size={28}/>;
                    },
                }}
            name='Album' component={Album}/>
        </Tab.Navigator>
         </NavigationContainer>  
    )
}
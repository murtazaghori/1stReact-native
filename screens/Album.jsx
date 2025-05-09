import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";

 
import { Text, TouchableOpacity, View } from "react-native";
const Album = ()=>{
       const navigation = useNavigation()

       const obj ={
        name:"murtaza",
        email:"murtazakhanghori@gmail.com"
       }
       const Add_Data = async() =>{
           await AsyncStorage.setItem('userData',JSON.stringify(obj)) 
           await AsyncStorage.setItem('status','teacher') 

       };
       const GET_Data = async()=>{
        const data = await AsyncStorage.getItem("userData");
        const status = await AsyncStorage.getItem("status");
        console.log(JSON.parse(data)); 
        console.log(status);
        
       }
       const GET_One_Data = async()=>{
             await AsyncStorage.removeItem("status")
            console.log(status);
            
       }

    return(
         <View>
            <Text>Album</Text>
             <TouchableOpacity onPress={()=> navigation.navigate('Contact')}> 
                            <Text>contact</Text>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={Add_Data}>
                        <Text style={{fontSize:40,backgroundColor:"blue",width:200,alignItems:"center",justifyContent:"center",margin:20,padding:10}}>
                            add data
                        </Text>
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={GET_Data}>
                        <Text style={{fontSize:40,backgroundColor:"blue",width:200,display:"flex",alignItems:"center"}}>
                            get data
                        </Text>
                        </TouchableOpacity>  
                         <TouchableOpacity onPress={GET_One_Data}>
                        <Text style={{fontSize:40,backgroundColor:"blue",width:220,display:"flex",alignItems:"center",marginTop:"10"}}>
                            get one  data
                        </Text>
                        </TouchableOpacity>   
         </View>
    )
}
export default Album;
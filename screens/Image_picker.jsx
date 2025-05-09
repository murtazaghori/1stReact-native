import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { launchCamera } from "react-native-image-picker"

const Image_picker = () =>{
    const [capture,setcapture] =useState(null)
    const open_Camera_handler = async () =>{
        const result = await launchCamera({
            mediaType:'photo',
            includeBase64: true,
        });
        if(result.assets && result.assets.length> 0){
            setcapture(result.assets[0]);
            console.log(result.assets[0]);
        }
     
        
    }
    return(
        <View>
            <TouchableOpacity onPress={open_Camera_handler}>
                <Text>open camera</Text>
            </TouchableOpacity>
            {capture && <Image source={{uri:capture.uri}}
            style={{
                width: '100%',
                height: 300,
                resizeMode: 'cover',
                borderRadius: 10,
            }}/>}
        </View>
    )
}
export default Image_picker;
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
const Home = () => {
    const navigation = useNavigation();
    const click_signup =()=>{
            navigation.navigate("Signup")
    }
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.heading}>HELLO</Text>
      <Text style={styles.para}>Lorem ipsum dolor, sit amet consectetur</Text>
      <Text style={styles.para}>adipisicing elit. Deserunt.</Text>
      <TouchableOpacity style={styles.btnContainer} onPress={click_signup}>
        <Text style={styles.btnText}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnContLogin} onPress={()=> navigation.navigate("login")}>
        <Text style={styles.btnlogin}>Login</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Icon name="facebook-with-circle" size={35} color="blue" />
        <Icon name="google--with-circle" size={35} color="blue" />
      </View>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    marginBottom: 20,
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  para: {
    textAlign: "center",
    marginBottom: 5,
  },
  btnContainer: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  btnContLogin: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,

  },
  btnlogin: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});

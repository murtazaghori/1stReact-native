import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,  // Added for buttons
} from 'react-native';

export const Signup = () => {
  const navigation =useNavigation()
  const[firstname,setfirstname]=useState();
  const[lastname,setlastname]=useState();
  const[email,setemail]=useState();
  const[password,setpassword]=useState();



  const get_Sign_value =  async()=>{
  try {
    const response = await axios.post("https://formsapi-murtaza-ghoris-projects.vercel.app/ghori/api/signup",{
    FirstName:firstname,
   LastName: lastname,
    Email:email,
    Password:password
    }) ;
    console.log(response.data);
    navigation.navigate("login")
    
}
  catch (error) {
    console.log("Error occurred during signup", error);
    
  }
}
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Image
            resizeMode="cover"
            style={{ height: 300, width: '100%' }}
            source={{
              uri: 'https://img.freepik.com/premium-vector/useful-tips-abstract-concept-vector-illustration_107173-29003.jpg?w=740',
            }}
          />
          <Text style={styles.heading}>Sign Up</Text>

          <View>
            <Text>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              onChangeText={(text)=>setfirstname(text)}
            />
          </View>

          <View>
            <Text>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              onChangeText={(text)=>setlastname(text)}

            />
          </View>

          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text)=>setemail(text)}

            />
          </View>

          <View>
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              secureTextEntry={true}
              onChangeText={(text)=>setpassword(text)}

            />
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.button} onPress={get_Sign_value}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <View style={styles.loginContainer}>
            <Text>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    gap: 15,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 10,
    width: 350,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 30,
    width: 250,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom:20
  },
  loginText: {
    color: '#007bff',
    fontWeight: 'bold',
    
  },
});


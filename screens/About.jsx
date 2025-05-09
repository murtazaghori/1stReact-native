 import React, { useEffect, useState } from "react";
import axios from "axios";
 

import { Image, ScrollView, StatusBar, StyleSheet, Text,  View } from "react-native";
 const About = () => {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <StatusBar backgroundColor="yellow"/>
      {products.map(item => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>₹ {item.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
export default About;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "green",
  },
});

 

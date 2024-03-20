import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default App = App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  return (
    //<ImageBackground source={getBackgroundImage()} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>SPOT V1</Text>
      
      <TouchableOpacity style={styles.button} onPress={fetchDogImage}>
        
        {imageUrl && <Image source={'./background/Imagen1.png' } style={styles.image} />}
        <Text style={styles.buttonText}>Room in Puerto Vallarta</Text>
        <Text style={styles.buttonText}>Room in Puerto Vallarta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    borderRadius: 10,
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
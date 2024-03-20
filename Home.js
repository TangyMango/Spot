import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const salonesFiesta = [
    {imagen:require('./assets/Salon1.jpg') ,nombre:'Salón de Fiesta Mexicana', },
    {imagen:require('./assets/Salon2.jpg') ,nombre:'Salón Santa Fé', },
    {imagen:require('./assets/Salon3.jpg') ,nombre:'Salón para Todos', },
];

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Has iniciado sesión exitosamente.</Text>
      </View>

      <View style={styles.salones}>
        {salonesFiesta.map((salon, index) => (
           <View key={index} style={styles.salon}>
             <Text style={styles.nombre}>{salon.nombre}</Text>
             <Image style={styles.imagen} source={salon.imagen}/>
           </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
  },
  salones:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#707070',
    borderWidth: 1,
  },
  salon: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
    borderColor: '#707070',
    borderWidth: 1,
  },
  imagen: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  nombre: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;

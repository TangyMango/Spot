import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DetalleSalon = ({ route }) => {
  const { salon } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{salon.nombre}</Text>
        <Image style={styles.imagen} source={salon.imagen}/>
        <Text style={styles.descripcion}>{salon.descripción}</Text>
        <Text style={styles.info}>Tamaño: {salon.tamaño}</Text>
        <Text style={styles.info}>Estado: {salon.estado}</Text>
        <Text style={styles.info}>Municipio: {salon.municipio}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagen: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DetalleSalon;

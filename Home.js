import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


const salonesFiesta = [
    {imagen:require('./assets/Salon1.jpg') ,nombre:'Salón de Fiesta Mexicana', descripción:'Bonito salón para eventos. Se renta para cumpleaños, bodas o fiestas.', tamaño:'32x58', estado:'Querétaro', municipio:'Querétaro'},
    {imagen:require('./assets/Salon2.jpg') ,nombre:'Salón Santa Fé', descripción:'Bonito salón para eventos. Se renta para cumpleaños, bodas o fiestas.', tamaño:'32x58', estado:'Querétaro', municipio:'Querétaro'},
    {imagen:require('./assets/Salon3.jpg') ,nombre:'Salón para Todos', descripción:'Bonito salón para eventos. Se renta para cumpleaños, bodas o fiestas.', tamaño:'32x58', estado:'Hidalgo', municipio:'Acatlán'},
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterByState, setFilterByState] = useState('');
  const navigation = useNavigation();

  const filteredSalones = salonesFiesta.filter(salon =>
    salon.nombre.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterByState === '' || salon.estado.toLowerCase() === filterByState.toLowerCase())
  );

  const handleSalonPress = (salon) => {
    navigation.navigate('DetalleSalon', { salon });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Suerte en tu búsqueda.</Text>
      </View>

      <View style={styles.searchFilterContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar salón..."
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
        <Picker
          selectedValue={filterByState}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setFilterByState(itemValue)}
        >
          <Picker.Item label="Filtrar por Estado" value="" />
          <Picker.Item label="Querétaro" value="querétaro" />
          <Picker.Item label="Hidalgo" value="hidalgo" />
        </Picker>
      </View>

      <View style={styles.salones}>
        {filteredSalones.map((salon, index) => (
           <TouchableOpacity key={index} style={styles.salon} onPress={() => handleSalonPress(salon)}>
             <Text style={styles.nombreTitulo}>{salon.nombre}</Text>
             <Image style={styles.imagen} source={salon.imagen}/>
             <Text style={styles.descripción}>{salon.descripción}</Text>
           </TouchableOpacity>
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
  searchFilterContainer: {
    width: '90%',
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderColor: '#707070',
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#707070',
    borderWidth: 1,
  },
  salones:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#707070',
  },
  salon: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
    borderColor: '#707070',
  },
  imagen: {
    width: '83%',
    height: 320,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 5,
  },
  nombreTitulo: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  descripción:{
    fontSize: 16,
    width: '60%',
  },
});

export default Home;

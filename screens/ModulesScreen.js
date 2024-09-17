import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

const ModulosScreen = ({ navigation }) => {
  const handleModulo1Press = () => {
    navigation.navigate('Modulo1');
  };

  const handleUnavailablePress = () => {
    Alert.alert('Módulo Indisponível', 'Este módulo ainda não está disponível.', [{ text: 'OK' }]);
  };

  const handleContactPress = () => {
    navigation.navigate('Contato'); 
  };

  return (
    <ImageBackground
      source={require('../assets/ModulosScreen3.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Selecione um Serviço</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.moduloButton} onPress={handleModulo1Press}>
            <Text style={styles.buttonText}>Assistência Motor</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.moduloButton} onPress={handleUnavailablePress}>
            <Text style={styles.buttonText}>Módulo 2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.moduloButton} onPress={handleUnavailablePress}>
            <Text style={styles.buttonText}>Módulo 3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.moduloButton} onPress={handleContactPress}>
            <Text style={styles.buttonText}>Contato</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    width: '80%', 
    padding: 20, 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center', 
    marginTop: '10%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  moduloButton: {
    width: 100, 
    height: 100,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModulosScreen;

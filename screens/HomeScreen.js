import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/StellantisHomeScreen3.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bem-vindo ao SoftApp</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Ir para Login"
            onPress={() => navigation.navigate('Login')}
            color="#00008B"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  buttonContainer: {
    width: 200,
    height: 50,
    backgroundColor: '#00008b',
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default HomeScreen;

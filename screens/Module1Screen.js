import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

const Modulo1Screen = ({ navigation }) => {
  const [doubt, setDoubt] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (doubt.trim()) {
      setSubmitted(true);
      setDoubt('');

    } else {
      Alert.alert('Campo vazio', 'Por favor, insira sua dúvida.');
    }
  };

  const goToContactScreen = () => {
    navigation.navigate('Contato'); 
  };

  return (
    <ImageBackground
      source={require('../assets/Module1Screen.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Envie sua Dúvida</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite sua dúvida aqui..."
          placeholderTextColor="#aaa"
          value={doubt}
          onChangeText={setDoubt}
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        {submitted && (
          <Text style={styles.successMessage}>
            Sua dúvida será atendida em até (tempo do SLA).
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.contactButton}
        onPress={goToContactScreen}
      >
        <Text style={styles.contactButtonText}>Contato</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  overlay: {
    width: '50%', 
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
  textInput: {
    width: '70%',
    height: 150,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 50,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Modulo1Screen;

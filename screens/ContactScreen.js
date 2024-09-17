import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

const ContactScreen = () => {
  const [bugReport, setBugReport] = useState('');
  const [rating, setRating] = useState('');

  const handleReportSubmit = () => {
    if (bugReport.trim()) {
      Alert.alert('Relatório de Bug Enviado', 'Obrigado por relatar o bug!');
      setBugReport('');
    } else {
      Alert.alert('Campo vazio', 'Por favor, descreva o bug.');
    }
  };

  const handleRatingSubmit = () => {
    if (rating) {
      Alert.alert('Avaliação Enviada', `Obrigado pela sua avaliação: ${rating}`);
      setRating('');
    } else {
      Alert.alert('Nenhuma Avaliação Selecionada', 'Por favor, selecione uma opção.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/ModulosScreen3.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Suporte e Avaliação</Text>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Relatar Bug</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Descreva o bug aqui..."
            placeholderTextColor="#aaa"
            value={bugReport}
            onChangeText={setBugReport}
            multiline
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleReportSubmit}>
            <Text style={styles.buttonText}>Enviar Relato</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxTitle}>Avalie o App</Text>
          <TouchableOpacity
            style={[styles.ratingButton, rating === 'Muito Bom' && styles.selectedRating]}
            onPress={() => setRating('Muito Bom')}
          >
            <Text style={styles.buttonText}>Muito Bom</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.ratingButton, rating === 'Bom' && styles.selectedRating]}
            onPress={() => setRating('Bom')}
          >
            <Text style={styles.buttonText}>Bom</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.ratingButton, rating === 'Ruim' && styles.selectedRating]}
            onPress={() => setRating('Ruim')}
          >
            <Text style={styles.buttonText}>Ruim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={handleRatingSubmit}>
            <Text style={styles.buttonText}>Enviar Avaliação</Text>
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
    width: '50%',
    padding: 20, 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center', 
    marginTop: '2%', 
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  box: {
    width: '70%',
    marginBottom: 20,
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'auto',
  },
  textInput: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top', 
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#1c1c1c',
    fontSize: 14  ,
    fontWeight: 'bold',
  },
  ratingButton: {
    width: '100%',
    paddingVertical: 15,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRating: {
    backgroundColor: '#32cd32',
  },
});

export default ContactScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Modulo1Screen = ({ navigation }) => {
  const [doubt, setDoubt] = useState('');
  const [doubts, setDoubts] = useState([]);
  const [editingDoubtId, setEditingDoubtId] = useState(null);

  useEffect(() => {
    loadDoubts();
  }, []);

  // Função para carregar as dúvidas salvas no AsyncStorage
  const loadDoubts = async () => {
    const storedDoubts = await AsyncStorage.getItem('doubts');
    if (storedDoubts) setDoubts(JSON.parse(storedDoubts));
  };

  // Função para salvar as dúvidas no AsyncStorage
  const saveDoubts = async (newDoubts) => {
    await AsyncStorage.setItem('doubts', JSON.stringify(newDoubts));
    setDoubts(newDoubts);
  };

  // Adicionar uma nova dúvida
  const handleAddDoubt = () => {
    if (doubt.trim()) {
      const newDoubts = [
        ...doubts,
        { id: Date.now().toString(), text: doubt },
      ];
      saveDoubts(newDoubts);
      setDoubt('');
    } else {
      Alert.alert('Campo vazio', 'Por favor, insira sua dúvida.');
    }
  };

  // Editar uma dúvida
  const handleEditDoubt = (id) => {
    const selectedDoubt = doubts.find((item) => item.id === id);
    setDoubt(selectedDoubt.text);
    setEditingDoubtId(id);
  };

  // Atualizar a dúvida editada
  const handleUpdateDoubt = () => {
    const updatedDoubts = doubts.map((item) =>
      item.id === editingDoubtId ? { ...item, text: doubt } : item
    );
    saveDoubts(updatedDoubts);
    setDoubt('');
    setEditingDoubtId(null);
  };

  // Excluir uma dúvida
  const handleDeleteDoubt = (id) => {
    const filteredDoubts = doubts.filter((item) => item.id !== id);
    saveDoubts(filteredDoubts);
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

        <TouchableOpacity
          style={styles.submitButton}
          onPress={editingDoubtId ? handleUpdateDoubt : handleAddDoubt}
        >
          <Text style={styles.buttonText}>
            {editingDoubtId ? 'Atualizar' : 'Enviar'}
          </Text>
        </TouchableOpacity>

        <FlatList
          data={doubts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.doubtItem}>
              <Text style={styles.doubtText}>{item.text}</Text>
              <TouchableOpacity onPress={() => handleEditDoubt(item.id)}>
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteDoubt(item.id)}>
                <Text style={styles.deleteText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
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
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    width: '100%',
    height: 80,
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
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  doubtItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  doubtText: {
    fontSize: 16,
  },
  editText: {
    color: '#007bff',
    marginRight: 15,
  },
  deleteText: {
    color: '#ff0000',
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

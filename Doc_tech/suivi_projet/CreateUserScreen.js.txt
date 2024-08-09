// src/screens/CreateUserScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { createUser } from '../api/userApi';

export default function CreateUserScreen({ navigation }) {
  const [formData, setFormData] = useState({
    nom: 'Doe',
    prenom: 'John',
    email: 'john.doe@example.com',
    mot_de_passe: 'password123',
    adresse: '123 Main Street',
    code_postal: '12345',
    ville: 'Anytown',
    pays: 'USA',
    telephone: '555-123-4567',
    date_naissance: '1990-01-01',
    permis_conduire: '1234567890'
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    const isValid = validateForm();
    if (!isValid) return;

    try {
      const response = await createUser(formData);
      Alert.alert('Succès', `Utilisateur créé avec succès. ID: ${response.id}`);
      navigation.navigate('User');
    } catch (error) {
      if (error.response && error.response.data) {
        Alert.alert('Erreur', `Erreur lors de la création de l'utilisateur: ${JSON.stringify(error.response.data)}`);
      } else {
        Alert.alert('Erreur', 'Erreur lors de la création de l\'utilisateur.');
      }
    }
  };

  const validateForm = () => {
    const requiredFields = ['nom', 'prenom', 'email', 'mot_de_passe', 'adresse', 'code_postal', 'ville', 'pays', 'telephone', 'date_naissance', 'permis_conduire'];
    for (let field of requiredFields) {
      if (!formData[field]) {
        Alert.alert('Erreur', `Le champ ${field.replace('_', ' ')} est obligatoire.`);
        return false;
      }
    }
    return true;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(formData).map((key) => (
        <TextInput
          key={key}
          style={styles.input}
          placeholder={key.replace('_', ' ').toUpperCase()}
          value={formData[key]}
          onChangeText={(text) => handleChange(key, text)}
        />
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Créer l'utilisateur</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});

// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/favicon.png')} 
        style={styles.logo} 
      />
      <Text style={styles.title}>
        {user ? `Bienvenue ${user.name}` : 'Bienvenue chez Location de Véhicules'}
      </Text>
      <Text style={styles.subtitle}>
        Réservez votre véhicule préféré facilement et rapidement
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('User')}
      >
        <Text style={styles.buttonText}>Voir les utilisateurs</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('HooksExample')}
      >
        <Text style={styles.buttonText}>Voir les Exemples de Hooks</Text>
      </TouchableOpacity>
    </View>
  );
}

// ... styles restent inchangés
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, // La moitié de la largeur/hauteur pour un cercle parfait
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'http://10.21.6.19:3000/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    console.log('Vérification du token...');
    try {
      const token = await AsyncStorage.getItem('userToken');
      console.log('Token trouvé:', token);
      if (token) {
        console.log('Vérification de la validité du token avec le serveur...');
        const response = await axios.get(`${API_URL}/verify-token`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Réponse du serveur:', response.data);
        setUser(response.data.user);
      }
    } catch (error) {
      console.log('Erreur lors de la vérification du token:', error.message);
      if (error.response) {
        console.log('Réponse d\'erreur du serveur:', error.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    console.log('Tentative de connexion avec:', email);
    try {
      console.log('Envoi de la requête de connexion à:', `${API_URL}/auth/login`);
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      console.log('Réponse de connexion reçue:', response.data);
      setUser(response.data.user);
      await AsyncStorage.setItem('userToken', response.data.token);
    } catch (error) {
      console.log('Erreur de connexion:', error.message);
      if (error.response) {
        console.log('Réponse d\'erreur du serveur:', error.response.data);
      }
      throw error;
    }
  };

  const register = async (name, email, password) => {
    console.log('Tentative d\'inscription avec:', { name, email });
    try {
      console.log('Envoi de la requête d\'inscription à:', `${API_URL}/auth/register`);
      const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
      console.log('Réponse d\'inscription reçue:', response.data);
      setUser(response.data.user);
      await AsyncStorage.setItem('userToken', response.data.token);
    } catch (error) {
      console.log('Erreur d\'inscription:', error.message);
      if (error.response) {
        console.log('Réponse d\'erreur du serveur:', error.response.data);
      }
      throw error;
    }
  };

  const logout = async () => {
    console.log('Déconnexion...');
    setUser(null);
    await AsyncStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
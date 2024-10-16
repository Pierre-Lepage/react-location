import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { authStyles } from "../styles/authStyles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }
    
    setIsLoading(true);
    try {
      await login(email, password);
      Alert.alert("Succès", "Connexion réussie");
      // Ici, vous pouvez rediriger l'utilisateur vers une autre page
      // navigation.navigate('Home');
    } catch (error) {
      Alert.alert("Erreur de connexion", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <View style={authStyles.container}>
    <Text style={authStyles.title}>Connexion</Text>
    <TextInput
    style={authStyles.input}
    placeholder="Email"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address"
    autoCapitalize="none"
    />
    <TextInput
    style={authStyles.input}
    placeholder="Mot de passe"
    value={password}
    onChangeText={setPassword}
    secureTextEntry
    />
    <TouchableOpacity
    style={[authStyles.button, isLoading && authStyles.buttonDisabled]}
    onPress={handleLogin}
    disabled={isLoading}
    >
    {isLoading ? (
      <ActivityIndicator color="#ffffff" />
    ) : (
      <Text style={authStyles.buttonText}>Se connecter</Text>
    )}
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
    <Text style={authStyles.link}>Pas de compte ? S'inscrire</Text>
    </TouchableOpacity>
    </View>
  );
}

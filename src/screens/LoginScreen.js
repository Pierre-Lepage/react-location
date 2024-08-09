import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData
      );
      if (response.status === 200) {
        // Stocker le token JWT et les informations utilisateur
        // Vous pouvez utiliser AsyncStorage ou Context API pour gérer l'état de l'utilisateur
        navigation.navigate("Profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
  },
});
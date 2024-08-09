# Codebase

## Structure du Projet

```
LocationDeVehicule/
├── .expo/
├── .vscode/
├── assets/
├── node_modules/
├── src/
│ ├── api/
│ │ └── userApi.js
│ ├── components/
│ │ ├── ImageRound.js
│ │ ├── MenuRight.js
│ │ └── ButtonRedirection.js
│ ├── navigation/
│ │ └── AppNavigator.js
│ ├── screens/
│ │ ├── HomeScreen.js
│ │ ├── UserScreen.js
│ │ ├── HooksExampleScreen.js
│ │ ├── CreateUserScreen.js
│ │ ├── ProfileScreen.js
│ │ ├── RegisterScreen.js
│ │ └── LoginScreen.js
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── package.json
└── README.md
```

## Fichiers Principaux

### package.json

```json
{
  "name": "locationdevehicules",
  "version": "1.0.0",
  "main": "expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@expo/metro-runtime": "~3.2.1",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/native": "^6.1.18",
    "@react-navigation/stack": "^6.4.1",
    "axios": "^1.7.3",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "expo": "~51.0.24",
    "expo-status-bar": "~1.12.1",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.5.2",
    "nativewind": "^2.0.11",
    "punycode": "^2.3.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.74.3",
    "react-native-gesture-handler": "~2.16.1",
    "react-native-reanimated": "~3.10.1",
    "react-native-safe-area-context": "^4.10.8",
    "react-native-screens": "^3.34.0",
    "react-native-web": "~0.19.10"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "tailwindcss": "^3.3.2"
  },
  "private": true
}
```

### babel.config.js

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin', "nativewind/babel"],
  };
};
```

### app.json

```json
{
  "expo": {
    "jsEngine": "hermes",
    "name": "LocationDeVehicules",
    "slug": "LocationDeVehicules",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "jsEngine": "jsc",
      "infoPlist": {
        "NSAppTransportSecurity": {
          "NSAllowsArbitraryLoads": true
        }
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

### App.js

```javascript
// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
```

### src/navigation/AppNavigator.js

```javascript
// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import HooksExampleScreen from '../screens/HooksExampleScreen';
import CreateUserScreen from '../screens/CreateUserScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
      <Stack.Screen name="CreateUser" component={CreateUserScreen} options={{ title: 'Créer un Utilisateur' }} />
    </Stack.Navigator>
  );
}

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={UserScreen} options={{ title: 'Utilisateurs' }} />
    </Stack.Navigator>
  );
}

function HooksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HooksExample" component={HooksExampleScreen} options={{ title: 'Exemples de Hooks' }} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="UserTab"
          component={UserStack}
          options={{
            tabBarLabel: 'Utilisateurs',
            tabBarIcon: ({ color, size }) => (
              <Icon name="people" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="HooksTab"
          component={HooksStack}
          options={{
            tabBarLabel: 'Hooks',
            tabBarIcon: ({ color, size }) => (
              <Icon name="code" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AuthTab"
          component={AuthStack}
          options={{
            tabBarLabel: 'Auth',
            tabBarIcon: ({ color, size }) => (
              <Icon name="lock" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

### src/screens/LoginScreen.js

```javascript
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://10.21.6.19:3000/api/auth/login",
        formData
      );
      if (response.status === 200) {
        console.log("Connexion réussie, données de réponse:", response.data);
        Alert.alert(
          "Succès",
          "Connexion réussie !",
          [
            {
              text: "OK",
              onPress: () => {
                console.log("Navigation vers Profile");
                navigation.navigate('ProfileTab', { screen: 'Profile' });
              }
            }
          ]
        );
      }
    } catch (error) {
      console.error('Erreur détaillée:', error);
      if (error.response) {
        Alert.alert("Erreur", error.response.data.message || "Échec de la connexion");
      } else if (error.request) {
        Alert.alert("Erreur", "Impossible de contacter le serveur. Vérifiez votre connexion.");
      } else {
        Alert.alert("Erreur", "Une erreur s'est produite. Veuillez réessayer.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button} disabled={isLoading}>
        <Text style={styles.buttonText}>{isLoading ? "Connexion..." : "Login"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("Navigation vers Register");
          navigation.navigate("Register");
        }}
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
```

Ces mises à jour reflètent les changements que nous avons apportés aujourd'hui, notamment :

1. La correction de la configuration dans app.json pour permettre les requêtes HTTP non sécurisées sur iOS.
2. La mise à jour de AppNavigator.js pour résoudre le problème de double header.
3. La modification de LoginScreen.js pour améliorer la gestion des erreurs et corriger la navigation vers l'écran de profil.

N'oubliez pas que ces modifications résolvent les problèmes spécifiques que nous avons traités aujourd'hui. Si vous avez d'autres fichiers ou composants qui nécessitent des mises à jour, assurez-vous de les inclure également dans votre codebase.md.

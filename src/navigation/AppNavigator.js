// src/navigation/AppNavigator.js
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../context/AuthContext';

import HomeScreen from '../screens/HomeScreen';
import HooksExampleScreen from '../screens/HooksExampleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Connexion' }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Inscription' }} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Accueil',
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Hooks"
        component={HooksExampleScreen}
        options={{
          title: 'Exemples de Hooks',
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
          headerShown: false,
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chargement...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
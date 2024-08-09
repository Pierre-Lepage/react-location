import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

// Exemples de contextes et de reducers
const MyContext = React.createContext();

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function HooksExampleScreen() {
  // useState
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    return () => {};
  }, [count]);

  // useContext
  const value = useContext(MyContext);

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback
  const handleClick = useCallback(() => {}, []);

  // useMemo
  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  // useRef
  const countRef = useRef(count);
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  return (
    <ScrollView className="flex-1 bg-gray-100 p-5">
      <Text className="text-2xl font-bold mb-5 text-center text-gray-800">Exemples de Hooks</Text>

      <View className="mb-8 p-5 bg-white rounded-lg shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">useState</Text>
        <Text className="text-base text-gray-600 mb-4">
          <Text className="font-bold">Technique:</Text> useState ajoute un état local à un composant fonctionnel.
          {"\n"}<Text className="font-bold">Simple:</Text> useState permet de se souvenir des choses. Ici, il se souvient du nombre de fois que tu appuies sur un bouton.
        </Text>
        <TouchableOpacity 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onPress={() => setCount(count + 1)}
        >
          <Text className="text-center">Increment count</Text>
        </TouchableOpacity>
        <Text className="text-base font-bold text-gray-700 mt-2">Count: {count}</Text>
      </View>

      <View className="mb-8 p-5 bg-white rounded-lg shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">useEffect</Text>
        <Text className="text-base text-gray-600 mb-4">
          <Text className="font-bold">Technique:</Text> useEffect gère les effets de bord dans les composants fonctionnels.
          {"\n"}<Text className="font-bold">Simple:</Text> useEffect permet de faire des choses après que le composant est apparu ou a changé. Par exemple, il affiche un message.
        </Text>
      </View>

      <View className="mb-8 p-5 bg-white rounded-lg shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">useContext</Text>
        <Text className="text-base text-gray-600 mb-4">
          <Text className="font-bold">Technique:</Text> useContext permet de consommer un contexte dans un composant fonctionnel.
          {"\n"}<Text className="font-bold">Simple:</Text> useContext permet de partager des informations avec plusieurs composants. Ici, il montre une valeur partagée.
        </Text>
        <Text className="text-base font-bold text-gray-700">Context Value: {value}</Text>
      </View>

      <View className="mb-8 p-5 bg-white rounded-lg shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">useReducer</Text>
        <Text className="text-base text-gray-600 mb-4">
          <Text className="font-bold">Technique:</Text> useReducer est utilisé pour gérer des états complexes avec un reducer.
          {"\n"}<Text className="font-bold">Simple:</Text> useReducer permet de gérer des actions comme ajouter ou enlever des choses. Ici, il ajoute ou enlève des points.
        </Text>
        <TouchableOpacity 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onPress={() => dispatch({ type: 'increment' })}
        >
          <Text className="text-center">Increment reducer count</Text>
        </TouchableOpacity>
        <Text className="text-base font-bold text-gray-700 mt-2">Reducer Count: {state.count}</Text>
      </View>

      <View className="mb-8 p-5 bg-white rounded-lg shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">useCallback</Text>
        <Text className="text-base text-gray-600 mb-4">
          <Text className="font-bold">Technique:</Text> useCallback mémorise une fonction pour éviter de la recréer à chaque rendu.
          {"\n"}<Text className="font-bold">Simple:</Text> useCallback permet de se souvenir d'une fonction pour ne pas la refaire tout le temps. Ici, il se souvient d'une action quand tu cliques sur un bouton.
        </Text>
        <TouchableOpacity 
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onPress={handleClick}
        >
          <Text className="text-center">Click useCallback</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-8 p-5 bg-white rounded-lg shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">useMemo</Text>
        <Text className="text-base text-gray-600 mb-4">
          <Text className="font-bold">Technique:</Text> useMemo mémorise une valeur calculée pour optimiser les performances.
          {"\n"}<Text className="font-bold">Simple:</Text> useMemo permet de se souvenir d'un calcul pour ne pas le refaire tout le temps. Ici, il double un nombre et se souvient du résultat.
        </Text>
        <Text className="text-base font-bold text-gray-700">Memoized Value: {memoizedValue}</Text>
      </View>

      <View className="mb-8 p-5 bg-white rounded-lg shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">useRef</Text>
        <Text className="text-base text-gray-600 mb-4">
          <Text className="font-bold">Technique:</Text> useRef crée une référence persistante entre les rendus.
          {"\n"}<Text className="font-bold">Simple:</Text> useRef permet de se souvenir d'une chose sans la perdre. Ici, il se souvient d'un nombre même si le composant change.
        </Text>
        <Text className="text-base font-bold text-gray-700">Ref Value: {countRef.current}</Text>
      </View>
    </ScrollView>
  );
}

# readme

# LocationDeVehicule

## Description

Ce projet est une application React Native pour la gestion de la location de véhicules. Il fournit une structure bien formatée avec une configuration simple et claire, incluant la navigation entre les écrans, la gestion de l'authentification, et l'utilisation de styles personnalisés.

## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. Clonez ce dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/LocationDeVehicule.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd LocationDeVehicule
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

4. Exécutez le projet :
   ```bash
   npm start
   ```

## Structure du Projet

La structure du projet est organisée comme suit :

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
│ ├── context/
│ │ └── AuthContext.js
│ ├── navigation/
│ │ └── AppNavigator.js
│ ├── screens/
│ │ ├── HomeScreen.js
│ │ ├── UserScreen.js
│ │ ├── HooksExampleScreen.js
│ │ ├── ProfileScreen.js
│ │ ├── LoginScreen.js
│ │ └── RegisterScreen.js
│ ├── styles/
│ │ └── authStyles.js
├── .gitignore
├── App.js
├── README.md
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
└── tailwind.config.js
```

### Fichiers et Dossiers Principaux

- `src/api/userApi.js` : Gère les appels API pour les opérations liées aux utilisateurs.
- `src/context/AuthContext.js` : Fournit le contexte d'authentification pour l'application.
- `src/navigation/AppNavigator.js` : Gère la navigation entre les écrans.
- `src/screens/` : Contient tous les écrans de l'application.
- `src/styles/authStyles.js` : Contient les styles partagés pour les écrans d'authentification.
- `App.js` : Point d'entrée principal de l'application.

## Fonctionnalités Principales

1. Authentification : Inscription, connexion et déconnexion des utilisateurs.
2. Navigation par onglets : Accueil, Hooks, et Profil.
3. Gestion de profil : Affichage et modification des informations de l'utilisateur.
4. Exemples de hooks React : Démonstration de l'utilisation de divers hooks React.

## Configuration de l'API

L'application communique avec une API backend. L'URL de base de l'API est définie dans `src/context/AuthContext.js`. Assurez-vous de mettre à jour cette URL pour qu'elle corresponde à votre backend :

```javascript
const API_URL = 'http://10.21.6.19:3000/api';
```

## Styles

Les styles pour les écrans d'authentification sont centralisés dans `src/styles/authStyles.js`. Cela permet une cohérence visuelle et facilite les modifications globales du design.

## Prochaines étapes

- Implémenter la fonctionnalité de réservation de véhicules.
- Ajouter une gestion plus avancée du profil utilisateur.
- Intégrer des notifications push pour les mises à jour de réservation.
- Améliorer la gestion des erreurs et ajouter des tests unitaires.

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à contribuer au projet.

# EOM_Characters

Instagram clone - Showing Eternity of Magic characters instead of instagram fans. Main difference being in the timeline feature, which enables to see the thoughts/feelings/experiences of the characters at different points.

# 1. Overview

Developed using Expo for React Native

- For development install Expo, Node, Watchman,Yarn (+Version)

# 1.1. Development

## 1.1.1 Expo

Run development server:
Go to directory eomCharacters and run:

```
expo start -c
```

**-c** will clear cache and prevent any issues on start. Command will run without it.

### 1.1.1.1 Running Expo

If issues with connection to app from Android/iOs arise, trys etting connection to "Tunnel".

## 1.2.1 React Navigation

Documentation: https://reactnavigation.org/docs/getting-started

For handling the routes. Run inside project directory:

- Expo needs to be closed while installing

```
npm install @react-navigation/native
npm install @react-navigation/stack

```

## 1.2.2 Bottom Tab Navigation

Documentation: https://reactnavigation.org/docs/bottom-tab-navigator/

Install in Root

```
npm install @react-navigation/bottom-tabs
```

## 1.2.3 React Native Vector Icons

Documentation: https://www.npmjs.com/package/react-native-vector-icons

Install in Root:

```
npm install --save react-native-vector-icons
```

## 1.3. Backend: Firebase

Using Firebase for a Backend. Because cheap and easy set up for backend.

### 1.3.2 Set up Expo in Firebase

Reference: https://docs.expo.io/guides/using-firebase/

Run:

```
expo install firebase

```

Configure Firebase features to be used in application.

### 1.3.3 Test App locally

```
firebase emulators:start

```

Will run on localhost:5000

### 1.4.0 Get React Navigation working

Install the following packakges

```
npm i react-native-screens
npm i @react-native-community/masked-view
npm i react-native-gesture-handler
```

### 1.5.0 Redux

#### 1.5.1 Set up Redux

```
npm i redux
```

Link React to Redux

```
npm i react-redux
```

Thunk is a middle layer between React and Redux, which simplifies creating actions.

```
npm i redux-thunk
```

### 1.5.2 Fetching data from Database

Set up of Redux file structure

Create folders and files in Root

- actions
  - index.js
- constants
  - index.js
- reducers
  - index.js
  - user.js (can be handled within index, but makes things cleaner) --> Stores user/user state variables

### 1.6.0 Firestore

Document based storage.
Currently set in test mode. For deployment need to set 　 rules to restrict user access and api key visibility.

# 1.2.0 Structure

## 1.2.1 App.js

### 1.2.1.1 Render

- MainScreen Element needs to be placed inside Provider Element to work
  - provider = store enables to access the storage

## 1.2.2 Main.js

- Import connect to enable fetch user in App.js/connect to redux
- Bind actions to components -> Import bindActionCreators

## Shoutout

https://www.youtube.com/watch?v=1hPgQWbWmEk%3Fyt%3Acc%3Don

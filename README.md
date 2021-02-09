# EOM_Characters

Instagram clone - Showing Eternity of Magic characters instead of instagram fans. Main difference being in the timeline feature, which enables to see the thoughts/feelings/experiences of the characters at different points.

# 1. Overview

Developed using Expo for React Native

- For development install Expo, Node, Watchman,Yarn (+Version)

# 2. Development

## 2.1 Expo

Go to directory eomCharacters and run:

```
expo start -c
```

**-c** will clear cache and prevent any issues on start. Command will run without it.

### 2.1.1 Running Expo

If issues with connection to app from Android/iOs arise, trys etting connection to "Tunnel".

## 2.2 React Navigation

Documentation: https://reactnavigation.org/docs/getting-started

For handling the routes. Run inside project directory:

- Expo needs to be closed while installing

```
npm install @react-navigation/native
npm install @react-navigation/stack

```

## 3. Backend: Firebase

Using Firebase for a Backend. Because cheap and easy set up for backend.

### 3.2 Set up Expo in Firebase

Reference: https://docs.expo.io/guides/using-firebase/

Run:

```
expo install firebase

```

Configure Firebase features to be used in application.

### 3.2 Test App locally

```
firebase emulators:start

```

Will run on localhost:5000

## Shoutout

https://www.youtube.com/watch?v=1hPgQWbWmEk%3Fyt%3Acc%3Don

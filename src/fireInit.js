// src/fireInit.js
//
// Modularized firebase app init file.
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
//import AsyncStorage from "@react-native-async-storage/async-storage";

// Initialize Firebase
export const fireConfig = {
    apiKey:             process.env.EXPO_PUBLIC_API_KEY,
    authDomain:         process.env.EXPO_PUBLIC_AUTH_DOMAIN,
    projectId:          process.env.EXPO_PUBLIC_PROJECT_ID,
    storageBucket:      process.env.EXPO_PUBLIC_STORAGE_BUCKET,
    messagingSenderId:  process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
    appId:              process.env.EXPO_PUBLIC_APP_ID,
    measurementId:      process.env.EXPO_PUBLIC_MEASUREMENT_ID
};
export const fireApp = initializeApp(fireConfig);
export const fireAuth = initializeAuth(fireApp, {
    //persistence: getReactNativePersistence(AsyncStorage)
  }
);
export const fireDB = getDatabase(fireApp);
export const fireRefRoot = ref(fireDB);
export const fireAnalytics = getAnalytics(fireApp);

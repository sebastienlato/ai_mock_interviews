
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLmy4mkD2q7zo_brTckKoIQ6mKjaLqExU",
    authDomain: "prepwise-9adfd.firebaseapp.com",
    projectId: "prepwise-9adfd",
    storageBucket: "prepwise-9adfd.firebasestorage.app",
    messagingSenderId: "455022682675",
    appId: "1:455022682675:web:1786f993a417f420d73946",
    measurementId: "G-M96EC1K2K6"
};

const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
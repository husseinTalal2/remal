import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCLyOz0WdJq5WMGHh69bbVtyc5u1eZjRxA",
    authDomain: "alrimal-aldhahabiya.firebaseapp.com",
    projectId: "alrimal-aldhahabiya",
    storageBucket: "alrimal-aldhahabiya.appspot.com",
    messagingSenderId: "66187503475",
    appId: "1:66187503475:web:6fe59dd001c4bf87ee8706",
    measurementId: "G-6B781076VH",
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
//firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

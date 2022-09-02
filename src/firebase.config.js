import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDK_CRKzkJMxIpL2gcIVEupTQRUVJDK2mA",
    authDomain: "restaurantapp-60e63.firebaseapp.com",
    databaseURL: "https://restaurantapp-60e63-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-60e63",
    storageBucket: "restaurantapp-60e63.appspot.com",
    messagingSenderId: "600467771119",
    appId: "1:600467771119:web:04b3ba6dc5a45f3ccfd51a"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };
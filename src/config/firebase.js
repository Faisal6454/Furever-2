// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

// Initialize Firebase
// const initializeAuthentication = () => {
//     return initializeApp(firebaseConfig)
// }

// export default initializeAuthentication;


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: '<YOUR_API_KEY>',
    authDomain: '<YOUR_AUTH_DOMAIN>',
    databaseURL: '<YOUR_DATABASE_URL>',
    projectId: '<YOUR_PROJECT_ID>',
    storageBucket: '<YOUR_STORAGE_BUCKET>',
    messagingSenderId: '<YOUR_SENDER_ID>',
    appId: '<YOUR_APP_ID>',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); //Add to Initialize Authentication
export const database = getDatabase(app); //Add to Initialize Reatime Database
export const firestoreDB = getFirestore(app); //Add to Initialize Firestore Database
 const storage = getStorage(app); //Add to Initialize Storage
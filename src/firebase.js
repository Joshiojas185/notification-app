// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";

// const firebaseConfig = {
//     apiKey: "AIzaSyD7nzziYoW0NNC2KbP1z4Qyuelz2rPfE3A",
//     authDomain: "auth-caf27.firebaseapp.com",
//     projectId: "auth-caf27",
//     storageBucket: "auth-caf27.firebasestorage.app",
//     messagingSenderId: "419446307195",
//     appId: "1:419446307195:web:95404a4f931bcbd0f025de"
//   };

// export const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);



// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

const firebaseConfig = {
    apiKey: "AIzaSyD7nzziYoW0NNC2KbP1z4Qyuelz2rPfE3A",
    authDomain: "auth-caf27.firebaseapp.com",
    projectId: "auth-caf27",
    storageBucket: "auth-caf27.firebasestorage.app",
    messagingSenderId: "419446307195",
    appId: "1:419446307195:web:95404a4f931bcbd0f025de"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
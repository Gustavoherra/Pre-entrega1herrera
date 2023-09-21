import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMEo1WQ-QCgb3nSpyokor2ZoCewioVmvk",
  authDomain: "fb-58080.firebaseapp.com",
  projectId: "fb-58080",
  storageBucket: "fb-58080.appspot.com",
  messagingSenderId: "942562155106",
  appId: "1:942562155106:web:6c4b253864188b274b0f3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

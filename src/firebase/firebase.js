import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: "chatgpt-yt-5feac.firebaseapp.com",
  projectId: "chatgpt-yt-5feac",
  storageBucket: "chatgpt-yt-5feac.appspot.com",
  messagingSenderId: "550828587525",
  appId: "1:550828587525:web:7fd825774c9597bd39ba6c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

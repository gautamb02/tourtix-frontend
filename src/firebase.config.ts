import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIxb8Q8LDhjqUgKND4yMPGH7d6u-mfAVA",
  authDomain: "agro-bharat-demo.firebaseapp.com",
  projectId: "agro-bharat-demo",
  storageBucket: "agro-bharat-demo.appspot.com",
  messagingSenderId: "718513815057",
  appId: "1:718513815057:web:f60d67e145596d56c67bb0",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

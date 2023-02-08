import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCin4AZ9TT2LC-Q4Zlrf3Oj0W-gzHnO5z0",
  authDomain: "plataforma-full-stack.firebaseapp.com",
  projectId: "plataforma-full-stack",
  storageBucket: "plataforma-full-stack.appspot.com",
  messagingSenderId: "657847085",
  appId: "1:657847085:web:59a4f7299934e52f2259a4",
  measurementId: "G-QF80R06ZX0"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
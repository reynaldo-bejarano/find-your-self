import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDrirZp0HerfXJCb2qLynfoMkwsoGKOsA",
  authDomain: "findyourself-c3268.firebaseapp.com",
  projectId: "findyourself-c3268",
  storageBucket: "findyourself-c3268.appspot.com",
  messagingSenderId: "811204074750",
  appId: "1:811204074750:web:79153cbca46a4f14e959af",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

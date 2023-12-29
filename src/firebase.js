import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAY-ekao1cDDEWPyGcr01cPbR-bkgWUxgE",
  authDomain: "crud-img-349ec.firebaseapp.com",
  projectId: "crud-img-349ec",
  storageBucket: "crud-img-349ec.appspot.com",
  messagingSenderId: "656528852944",
  appId: "1:656528852944:web:42b76c67d36a45eacc9bd5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

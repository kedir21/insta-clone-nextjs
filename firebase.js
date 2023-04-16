// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvnPV25pYo_PGRGvEMvqm92muqTGzPZs0",
  authDomain: "insta-clone-3a11d.firebaseapp.com",
  projectId: "insta-clone-3a11d",
  storageBucket: "insta-clone-3a11d.appspot.com",
  messagingSenderId: "894350468133",
  appId: "1:894350468133:web:c7ed5503ba4a7db0724bcc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp;
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
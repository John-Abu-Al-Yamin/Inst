import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVtBbHkotXG7rRDY2CLWTnpvqKFhSQFC4",
  authDomain: "insta-clone-297df.firebaseapp.com",
  projectId: "insta-clone-297df",
  storageBucket: "insta-clone-297df.appspot.com",
  messagingSenderId: "290648219658",
  appId: "1:290648219658:web:bdf97ca1bc73cdd6727ff3",
  measurementId: "G-94X5G316LS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };

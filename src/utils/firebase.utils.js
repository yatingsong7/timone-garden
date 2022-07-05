// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZociFvMM87wcQBNYKaSXfmxvOhd0mG1g",
  authDomain: "timone-garden-db.firebaseapp.com",
  projectId: "timone-garden-db",
  storageBucket: "timone-garden-db.appspot.com",
  messagingSenderId: "380407087422",
  appId: "1:380407087422:web:78cf2c910ca55528056c6f",
  measurementId: "G-4NHH5W45CD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const usersnapshot = await getDoc(userDocRef);

  if (!usersnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error:", error.message);
    }
  }

  return userDocRef;
};

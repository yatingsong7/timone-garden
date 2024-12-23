// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  writeBatch,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
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

export const createUserDocumentFromAuth = async (userAuth, addInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const usersnapshot = await getDoc(userDocRef);

  if (!usersnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...addInfo });
    } catch (error) {
      console.log("error:", error.message);
    }
  }

  return userDocRef;
};

export const addDocuments = async (collectionKey, objects) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objects.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const getItemDoc = async (docName, itemId) => {
  const docRef = doc(db, "categories", docName);
  const querySnapshot = await getDoc(docRef);
  const { items } = querySnapshot.data();
  const item = items.find((item) => item.id.toString() === itemId);

  return item;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onUserAuthStateChanged = (callback) => {
  onAuthStateChanged(auth, callback);
};

import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { u as useRuntimeConfig } from './node-server.mjs';

const config = useRuntimeConfig();
const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: "nepsap-website.firebaseapp.com",
  projectId: "nepsap-website",
  storageBucket: "nepsap-website.appspot.com",
  messagingSenderId: "1012381467635",
  appId: "1:1012381467635:web:f655c0ce88fcfcee030886",
  measurementId: "G-8W345Q1GKP"
};
const app = initializeApp(firebaseConfig);
console.log("FireBase 1");
const firestoreDB = getFirestore(app);

const queryByCollection = async (col) => {
  const colRef = collection(firestoreDB, col);
  const snapshot = await getDocs(colRef);
  const docs = Array.from(snapshot.docs).map((doc2) => {
    return {
      ...doc2.data(),
      id: doc2.id
    };
  });
  return docs;
};
const add = async (col, document) => {
  const colRef = collection(firestoreDB, col);
  const docRef = await addDoc(colRef, document);
  return docRef;
};
const del = async (col, id) => {
  const docRef = doc(firestoreDB, col, id);
  return await deleteDoc(docRef);
};

export { add as a, del as d, queryByCollection as q };
//# sourceMappingURL=firestore.mjs.map

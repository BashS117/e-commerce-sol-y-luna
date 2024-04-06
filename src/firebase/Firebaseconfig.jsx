// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage,ref,uploadBytes} from 'firebase/storage';
import {v4} from 'uuid'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjGAmg71pS-W7_tTNZ-cjTGNE2e11GgCY",  
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "solyluna-23.appspot.com",
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_API_KEY,

  projectId: "solyluna-23",

  

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);
export async  function uploadFile(file){
  const storageRef= ref(storage, `imagenes/${v4()}`)
  return await uploadBytes(storageRef,file)
}
export async  function updateFile(file,name){
  const storageRef= ref(storage, `imagenes/${name}`)
  return await uploadBytes(storageRef,file)
}
export {auth,fireDB}
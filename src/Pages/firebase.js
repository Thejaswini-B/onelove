import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDciJ5fPu16RcUfVRGiB9iwiN7K3F61c3A",
  authDomain: "onelove-4ef56.firebaseapp.com",
  projectId: "onelove-4ef56",
  storageBucket: "onelove-4ef56.appspot.com",
  messagingSenderId: "258894563961",
  appId: "1:258894563961:web:35d431f273acd7fd0de2a8",
  measurementId: "G-312NGHL8N4",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

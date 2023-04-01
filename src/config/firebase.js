import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyD0S3K_xBSWlrbKRdDRf8oInHmweIkX-uM",
    authDomain: "tiktok---jornada-abf54.firebaseapp.com",
    projectId: "tiktok---jornada-abf54",
    storageBucket: "tiktok---jornada-abf54.appspot.com",
    messagingSenderId: "240151540256",
    appId: "1:240151540256:web:cb3038a00b048fe7500245"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "use your own api:) ",
    authDomain: "use your own api:)",
    projectId: "use your own api:)",
    storageBucket: "use your own api:)",
    messagingSenderId: "use your own api:)",
    appId: "use your own api:)"
};
//:)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

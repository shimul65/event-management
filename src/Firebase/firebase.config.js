
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1YLENW-Rf5sSJYpdxyPNfr0scKhPIC1I",
    authDomain: "wedding-event-management-8d593.firebaseapp.com",
    projectId: "wedding-event-management-8d593",
    storageBucket: "wedding-event-management-8d593.appspot.com",
    messagingSenderId: "816364481764",
    appId: "1:816364481764:web:02121e8b91d20be8b690f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
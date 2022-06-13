// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFohogGdXRCL2FlOxGzWaZ7kKgfFp_h0Y",
  authDomain: "royal-wedding-photographer.firebaseapp.com",
  projectId: "royal-wedding-photographer",
  storageBucket: "royal-wedding-photographer.appspot.com",
  messagingSenderId: "566413757386",
  appId: "1:566413757386:web:b85ecf448c0d3fe3795d33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
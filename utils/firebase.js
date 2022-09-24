import firebase from 'firebase'
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBsJxsMf9w0Wjs-Nk6ETE-ESh7zRFQETVI",
    authDomain: "msgtofris.firebaseapp.com",
    projectId: "msgtofris",
    storageBucket: "msgtofris.appspot.com",
    messagingSenderId: "499016311538",
    appId: "1:499016311538:web:b14887efb42a6aac08666b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
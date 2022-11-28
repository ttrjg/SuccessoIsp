import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"


export function FireBase() {

   const firebaseConfig = {
      apiKey: "AIzaSyDPBlIuVrKLhYo9-4cGDjoG1Qg7DqviRi8",
      authDomain: "sucessoisp.firebaseapp.com",
      projectId: "sucessoisp",
      storageBucket: "sucessoisp.appspot.com",
      messagingSenderId: "1012330264048",
      appId: "1:1012330264048:web:3eb32901e9d85728a3d935",
      measurementId: "G-9FVPXS3RQ3"
   };

   var firebase = require('firebase');
   var firebaseui = require('firebaseui');

   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);

   var ui = new firebaseui.auth.AuthUI(firebase.auth());

}
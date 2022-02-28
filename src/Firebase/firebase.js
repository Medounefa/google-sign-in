import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCLfL5DC9o5pi9k4Z515MhzJ46OGsAnf0I",
    authDomain: "sign-in-730ab.firebaseapp.com",
    projectId: "sign-in-730ab",
    storageBucket: "sign-in-730ab.appspot.com",
    messagingSenderId: "692893032796",
    appId: "1:692893032796:web:211625ba091e21d4d36199"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb;
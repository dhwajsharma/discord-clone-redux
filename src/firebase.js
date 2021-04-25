import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDzoMeAwlBcBrmhKieAXA6CyufttChNF_I",
    authDomain: "discord-clone-redux-6e836.firebaseapp.com",
    projectId: "discord-clone-redux-6e836",
    storageBucket: "discord-clone-redux-6e836.appspot.com",
    messagingSenderId: "514154463546",
    appId: "1:514154463546:web:6fb812e45d3317f21fd003"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
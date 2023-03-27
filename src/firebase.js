import { initializeApp } from "firebase/app"
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBZrK330k-b9nTQ3jdY7OH0cqrX5N2zneM",
    authDomain: "ytclone-pranavshinde.firebaseapp.com",
    projectId: "ytclone-pranavshinde",
    storageBucket: "ytclone-pranavshinde.appspot.com",
    messagingSenderId: "723869676421",
    appId: "1:723869676421:web:237182f84a2f1fc4e80aec"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const storage = firebaseApp.storage();

export { auth, provider,signInWithPopup};
// export default db;
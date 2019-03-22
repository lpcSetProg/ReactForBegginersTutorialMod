import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBrSg3qKAFRBA3mtwG03eY8trNxcIAggu8",
        authDomain: "levybase-4c855.firebaseapp.com",
        databaseURL: "https://levybase-4c855.firebaseio.com",
        projectId: "levybase-4c855",
        storageBucket: "levybase-4c855.appspot.com",
        messagingSenderId: "485501115970"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export 
export { firebaseApp };

// this is a default export 
export default base;
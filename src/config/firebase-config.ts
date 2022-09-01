//import {firebase} from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {config} from './firebase';

const { firebase } = require("firebase/app");

const Firebase = firebase.initializeApp(config.firebaseConfig);

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const auth = firebase.auth();
export default Firebase;
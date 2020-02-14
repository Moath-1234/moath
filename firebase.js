import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig= firebase.initializeApp({
    apikey:'',
    authDomain:'',
    databaseURL:'',
    projectID:'',
    storageBucket:'',
    messageSenderId:'',
    apiID:'',

});
export{firebaseConfig as firebase};
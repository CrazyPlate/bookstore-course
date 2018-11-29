import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyAdJTQEBNEUV99jHL_FKgLoHfawTvWjKNc",
   authDomain: "clockwork-bookstore-db4ee.firebaseapp.com",
   databaseURL: "https://clockwork-bookstore-db4ee.firebaseio.com",
   projectId: "clockwork-bookstore-db4ee",
   storageBucket: "clockwork-bookstore-db4ee.appspot.com",
   messagingSenderId: "49905140453"
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
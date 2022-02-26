import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCU3j5jEtpU-V0Hd1arAmeKIPL8zrXQc94",
  authDomain: "lady-lollipop.firebaseapp.com",
  projectId: "lady-lollipop",
  storageBucket: "lady-lollipop.appspot.com",
  messagingSenderId: "967897687328",
  appId: "1:967897687328:web:915466792119438432a345",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export{timestamp}
export default firebaseApp.firestore();
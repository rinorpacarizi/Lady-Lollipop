import {getAuth,onAuthStateChanged} from '@firebase/auth'; 
import { initializeApp } from '@firebase/app';
import store from '../store'

var firebaseConfig = {
  apiKey: "AIzaSyCU3j5jEtpU-V0Hd1arAmeKIPL8zrXQc94",
  authDomain: "lady-lollipop.firebaseapp.com",
  projectId: "lady-lollipop",
  storageBucket: "lady-lollipop.appspot.com",
  messagingSenderId: "967897687328",
  appId: "1:967897687328:web:915466792119438432a345",
};

initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(),(user)=>{
  store.dispatch("setUser",user);
});

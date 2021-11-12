import {getFirestore} from 'firebase/firestore';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../firebase.js';
initializeApp(firebaseConfig);
const db=getFirestore() 
//import { collection, addDoc } from "firebase/firestore"; 
import {collection} from 'firebase/firestore'

export {db,collection}
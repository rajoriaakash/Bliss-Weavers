import {getFirestore} from 'firebase/firestore';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../firebase.js';
import {collection} from 'firebase/firestore'

initializeApp(firebaseConfig);
const db=getFirestore() 
//import { collection, addDoc } from "firebase/firestore"; 

export {db,collection}
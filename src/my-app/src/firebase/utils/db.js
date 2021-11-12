const {getFirestore}=require('firebase/firestore');

const db=getFirestore() 
//import { collection, addDoc } from "firebase/firestore"; 
const {collection}=require('firebase/firestore')

export {db,collection}
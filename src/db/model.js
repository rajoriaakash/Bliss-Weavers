const {initializeApp}=require('firebase/app')
const {getFirestore}=require('firebase/firestore')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp=initializeApp({
    apiKey:"AIzaSyCpz7uzVnoINwYlYs5ldekErqmyXds8Y50",
    authDomain:"shopping-web-app-81469.firebaseapp.com",
    projectId:"shopping-web-app-81469"
})

const db=getFirestore() 
//import { collection, addDoc } from "firebase/firestore"; 
const {collection}=require('firebase/firestore')
exports=module.exports={db,collection}
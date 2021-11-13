import { initializeApp } from "@firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseConfig } from "../firebase";

initializeApp(firebaseConfig);

const auth = getAuth();
async function get_user(){
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const name = user.displayName;
    return user;
    // ...
  } else {
    return null;
    // ...
  }
});}

async function sign_out(){
signOut(auth).then(() => {
  console.log("Sign Out successful");
}).catch((error) => {
  console.log("Error while signing out");
});}

export {get_user,sign_out}
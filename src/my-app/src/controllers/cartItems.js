import { db, collection } from "../firebase/utils/db.js"
import { addDoc, getDocs, query, where } from 'firebase/firestore'

async function add_item(title,category,price, userId) {
    const item=await addDoc(collection(db,'cartItems'),{
        title:title,
        category:category,
        price:price,
        userId:userId
    })
    return item
}

async function get_items(userId){
    const i= query(collection(db, 'cartItems'), where("userId", "==", userId))
    const items=await getDocs(i)
    return items
}
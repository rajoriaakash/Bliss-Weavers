import { db, collection } from "../firebase/utils/db.js"
import { addDoc, getDocs, query, where } from 'firebase/firestore'

async function add_product(title,description,category,price) {
    const product=await addDoc(collection(db,'products'),{
        title:title,
        description:description,
        category:category,
        price:price
    })
    return product
}
async function  get_product_by_category(category) {
    const p= query(collection(db, 'products'), where("category", "==", category))
    const products=await getDocs(p)
    return products
}

async function get_product_info() {
    const products=await  getDocs(collection(db,'products'))
    return products
}
export {add_product,get_product_info,get_product_by_category};
import { db, collection } from "../firebase/utils/db.js"
import { addDoc, getDocs, query, where, limit, DocumentData } from 'firebase/firestore'

async function add_product(title,description,category,price,img) {
    const product=await addDoc(collection(db,'products'),{
        title:title,
        description:description,
        category:category,
        price:price,
        img:img
    })
    return product
}
async function  get_product_by_category(category) {
    const p= query(collection(db, 'products'), where("category", "==", category),limit(1));
    const products=await getDocs(p);
    return products.docs[0].data();
}

async function get_product_by_name(name) {
    const product = await getDocs(query(collection(db,'products'),where("title","==",name), limit(1)))
    return product;
}

async function get_product_info() {
    const products=await  getDocs(collection(db,'products'))
    return products
}


export {add_product,get_product_info,get_product_by_category,get_product_by_name};
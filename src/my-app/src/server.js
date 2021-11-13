import express, { json, urlencoded } from 'express'
import { cartRoute } from './routes/cart/index.js'
const app=express()
app.use(json())
app.use(urlencoded({extended:true}))
import { productsRoute } from './routes/products/index.js'
app.use('/products',productsRoute)
app.use('/cart',cartRoute)
app.listen(5000,()=>{
    console.log('server started')
})
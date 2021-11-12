import express, { json, urlencoded } from 'express'
const app=express()
app.use(json())
app.use(urlencoded({extended:true}))
import { productsRoute } from './routes/products/index.js'
app.use('/api/products',productsRoute)
app.listen(5000,()=>{
    console.log('server started')
})
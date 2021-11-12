import { Router } from 'express'
import {add_item,get_items} from "../../models/cartItem.js"
const cartRoute=Router()
cartRoute.get('/',async (req,res)=>{
    let items
    if(req.query.userId)
    {
        items=await get_items(req.query.userId)
        res.status(200).send(items)
    }
    else
    {return res.status(400).send({
        error:"Error"
    })
}})
cartRoute.post('/',async (req,res)=>{
        const {title,category,price, userId}=req.body
        if(!title || !category || !price || !userId)
        {return res.status(400).send({
            error:"Error"
        })
    }
    else
        {
        const item=await add_item(title,category,price, userId)
        res.status(201).send('Item added to cart')
    }
})
export { cartRoute}
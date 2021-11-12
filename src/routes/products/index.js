const {Router}=require('express')
const {add_product,get_product_info,get_product_by_category}=require('../../controllers/products')
const route=Router()
route.get('/',async (req,res)=>{
    let products
    if(req.query.category)
    {
        products=await get_product_by_category(req.query.category)
    }
    else
     {products=await get_product_info()}
    res.status(200).send(products)
})
route.post('/',async (req,res)=>{
        const {title,description,category,price}=req.body
        if(!title || !description || !category || !price || isNaN(price))
        {return res.status(400).send({
            error:"need title,description,category,price for a product"
        })
    }
    else
        {
        const product=await add_product(title,description,category,price)
        res.status(201).send('product added successfully')
    }
})
module.exports={productsRoute:route}
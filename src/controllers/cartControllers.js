const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCartProducts = async (req,res) => {
    const userId = req.params.id;
    try{
        let cart = await Cart.findOne({findOne});
        if(cart && cart.products.length>0) res.send(cart);
        else res.send(null);
    }catch(err){
        console.log(err);
        res.status(500).send("Error");
    }
}

const addCartProduct = async(req,res) => {
    const userId = req.params.id;
    const {productId, quantity} = req.body;
    try{
        let cart = await Cart.findOne({userId});
        let product = await Product.findOne({id : productId});
        if(!product)res.status(404).send('Product not found!');
        const price = product.price;
        const name = product.title;
        
        if(cart){
            let productIndex = cart.products.findIndex(p => p.productId == productId);

            if(productIndex > -1)
            {
                let productProduct = cart.products[productIndex];
                productProduct.quantity += quantity;
                cart.products[productIndex] = productProduct;
            }
            else {
                cart.products.push({ productId, name, quantity, price });
            }
            cart.bill += quantity*price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else{
            const newCart = await Cart.create({
                userId,
                products: [{ productId, name, quantity, price }],
                bill: quantity*price
            });
            return res.status(201).send(newCart);
        }       
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

const deleteProduct = async (req,res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;
    try{
        let cart = await Cart.findOne({userId});
        let productIndex = cart.products.findIndex(p => p.productId == productId);
        if(productIndex > -1)
        {
            let product = cart.products[productIndex];
            cart.bill -= product.quantity*product.price;
            cart.products.splice(productIndex,1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}
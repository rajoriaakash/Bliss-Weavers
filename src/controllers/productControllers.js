const Product = require('../models/Product');

const getProducts = (req,res) => {
    Product.find()
        .sort({date:-1})
            .then(products => 
                res.json(products));
}

const postProduct = (req,res) => {
    const newProduct = new Product(req.body);
    newProduct.save()
        .then(product =>
            res.json(products))
}

const update = (req,res) => {
    Product.findByIdAndUpdate({_id: req.params.id},req.body).then(function(product){
        Product.findOne({_id: req.params.id}).then(function(product){
            res.json(product);
        });
    });
}

const deleteProduct  = (req,res) => {
    Product.findByIdAndDelete({_id: req.params.id}).then(function(product){
        res.json({success: true});
    });
}
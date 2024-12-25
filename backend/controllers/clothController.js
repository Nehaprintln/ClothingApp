const ClothProduct = require('../model/clothModel');

const createProduct = async(req, res)=> {
    try{
        const clothProduct = new ClothProduct(req.body);
        await clothProduct.save();
        res.status(200).json(clothProduct);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}

const getAllProducts = async(req, res)=>{
    try{
        const filter = {};

        if(req.query.search){
            filter.name = req.query.search;
        }
        if(req.query.category){
            filter.categoary = req.query.categoary;
        }
        if(req.query.brand){
            filter.brand = req.query.brand;
        }

        const clothProduct = await ClothProduct.find(filter);
        res.status(200).json(clothProduct);

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const deleteProduct = async(req, res)=>{
    try{
        const productId = req.param.id;

        const product = await ClothProduct.findByIdAndDelete(productId);

        if(!product){
            res.status(404).json({
                message: "Product not found"
            })
        }
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {createProduct, getAllProducts, deleteProduct}
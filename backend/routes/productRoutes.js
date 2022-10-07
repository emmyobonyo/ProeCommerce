import express from "express";
import Product from "../models/productModel";
import asyncHandler from 'express-async-handler';

const router = express.Router()

router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

router.get('/:id', asyncHandler(async(req, res) => {
    const product = Product.findById(req.params.id)
    if(product) {
        res.json(product)
    } else {
        res.status(400).json({ msg: 'Product not found' })
    }
}))

export default router;
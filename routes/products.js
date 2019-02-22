const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//get all products
router.get('', (req, res) => {
  Product.find({}).sort({ 'price': -1 })
  .then (data => {console.log(data)||res.json({message: "Found all Products", data: data})})
  .catch (err => {console.log(err)||res.json({message:"Error", error: err})}
)});

router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
  .then (data => {console.log(data)||res.json({message: "Success! findOne Product!!!", data: data})})
  .catch (err => {console.log(err)||res.json({message:"ERROR!!!", error: err})})
});

router.post('/add', (req, res) => {
  Product.create(req.body)
  .then((data)=>{console.log(data)||res.json({message: "Product added!", data: data})})
  .catch((err)=>{console.log(err)||res.status(400).json({message: "Error!!", error: err})})
});

router.post('/:id', (req, res) => {
  Product.findOneAndUpdate({_id:req.params.id}, req.body, {upsert: true, new:true, runValidators: true })
  .then (data => {console.log(data)||res.json({message: "Product updated", data: data})})
  .catch (err => {console.log(err)||res.status(400).json({message: "Error!", error: err})})
});

router.delete('/:id', (req, res) => {
  Product.findOneAndDelete({_id:req.params.id})
  .then (data => {console.log(data)||res.json({message: "Product deleted!", data: data})})
  .catch (err => {console.log(err)||res.json({message: "Error", error: err})});
});

module.exports = router;
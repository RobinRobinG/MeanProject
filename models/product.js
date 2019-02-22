const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3,'Name must be at least 3 characters long!']
  },
  category: 	{   
    type: String,
    required: [true, 'Name is required'],
  },
  description: 	{   
    type: String,
    minlength: [10,'Description must be at least 10 characters long!']
  },
  price: {
    type: Number,
    default: 0,
    min: [0,'Price must be greater than or equal to 0!'],
    required: [true, 'Price is required']
  },
  rating: {
    type: Number,
  },
  qty: 	{   
    type: Number,
    default: 0,
    min: [0,'Quantity must be greater than or equal to 0!'],
    required: [true, 'Qty is required']
  },
  createdby: 	{   
    type: String,
  }
}, {timestamps: true});

const Product = module.exports = mongoose.model('Product', ProductSchema);
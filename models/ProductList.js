const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const ProductList = new Schema({
  name: { type: String},
  description: { type: String },
  image: { type: String },
});

module.exports=mongoose.model('ProductList', ProductList);
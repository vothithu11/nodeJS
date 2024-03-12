const express= require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const port = 3000;
const mongoose = require('mongoose');
const morgan = require('morgan');
const route = require('./routes');
app.use(express.urlencoded({ extended: true })); // Phân tích URL-encoded bodies
app.use(express.json()); // Phân tích JSON bodies
mongoose.connect('mongodb://localhost/e-commerce', {useNewUrlParser: true})
app.use(morgan('combined'));
app.set('view engine','ejs')
// app.get('/products',(req, res, next) => {
//     res.render('products');
// });
route(app);
// app.get("/", (req, res) => {
//     res.render("home");
//   });
// app.get("/post", (req, res) => {
//   res.render("post");
// });
// app.post("/post", (req, res) => {
//     res.render("post");
//   });


app.listen(port,()=>console.log('hello 2')); 